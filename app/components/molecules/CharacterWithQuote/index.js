import React from 'react';
import styled from 'styled-components/native';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { fonts } from '@themes';
import T from '@atoms/T';

const Result = styled(T)`
  ${fonts.style.standard()};
  text-align: center;
  margin-bottom: 5;
`;

const CharacterImage = styled.Image`
  height: 80px;
  width: 80px;
  margin: 0 auto;
`;

function CharacterWithQuote({ user }) {
  console.log(user);
  return (
    <>
      <Result
        id="wednesday_lover"
        values={{
          username: get(user, 'bank') || 'character'
        }}
      />
    </>
  );
}

CharacterWithQuote.propTypes = {
  user: PropTypes.object
};

export default CharacterWithQuote;
