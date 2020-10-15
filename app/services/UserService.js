import { generateApiClient } from 'app/utils/apiUtils';

const configApi = generateApiClient('configApi');
export const getUser = () => configApi.get('KARB0000001');
