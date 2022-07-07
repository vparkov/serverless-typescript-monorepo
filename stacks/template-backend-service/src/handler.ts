import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { success, error } from '../../../libs/lambda/response';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // eslint-disable-next-line no-console
    console.log(event);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return success({ message: 'Hellooooo World' });
  } catch (e) {
    return error({ message: 'oops' });
  }
};
