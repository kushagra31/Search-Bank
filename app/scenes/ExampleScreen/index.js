import React, { useState, useEffect } from 'react';
import { Animated, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from './selectors';
import { exampleScreenActions } from './reducer';
import LoaderComponent from '../../components/organisms/LoaderComponent';
import SearchComponent from '../../components/organisms/SearchComponent';

const ExampleScreen = ({ user, userErrorMessage, fetchUser }) => {
  useEffect(() => {
    console.log('a');
    requestFetchUser()();
  });
  const requestFetchUser = () => () => {
    fetchUser();
  };
  const [scrollYValue] = useState(new Animated.Value(0));
  const Container = styled(AppContainer)`
    margin: 30px;
    flex: 1;
    justify-content: center;
  `;
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      }),
      new Animated.Value(0)
    ),
    0,
    50
  );
  const CustomButton = styled.Button`
    margin-top: 40px;
  `;
  const array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ];
  return (
    <Container>
      <Animated.View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <SearchComponent clampedScroll={clampedScroll} />
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              margin: 20,
              backgroundColor: 'white',
              paddingTop: 55
            }}
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
              { useNativeDriver: true },
              () => {} // Optional async listener
            )}
            contentInsetAdjustmentBehavior="automatic"
          >
            {/* eslint-disable-next-line no-unused-vars */}
            {array.map(item => (
              <LoaderComponent />
            ))}
          </Animated.ScrollView>
        </SafeAreaView>
      </Animated.View>
    </Container>
  );
};
ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func
};
const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  userIsLoading: selectUserIsLoading(),
  userErrorMessage: selectUserErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(exampleScreenActions.requestFetchUser())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(ExampleScreen);
export { ExampleScreen as ExampleScreenTest };
