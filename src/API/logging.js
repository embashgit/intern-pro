import moment from 'moment';
import { isEmptyObject } from '../helpers/typeChecking';

export const logAPIRequest = (path, {
  method,
  body,
  headers,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') return;
  const keyStyle = 'color: #5e7735; font-weight: bold;';
  console.groupCollapsed(
    `%c API request @ ${moment().format('hh:mm:ss')} - ${path} `,
    'background: #86a0a8; color: #fff',
  );
  console.log('%cmethod:', keyStyle, '\t', method || 'GET');
  console.log('%cbody:', keyStyle, '\t\t', (body && JSON.parse(body)) || 'none');
  console.log('%cheaders:', keyStyle, '\t', headers || 'none');
  console.log('%cother:', keyStyle, '\t\t', (!isEmptyObject(rest) && rest) || 'none');
  console.groupEnd();
};

export const logAPIResponse = (path, response) => {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') return;
  const keyStyle = 'color: #5e7735; font-weight: bold;';
  console.groupCollapsed(
    `%c API response @ ${moment().format('hh:mm:ss')} - ${path} `,
    'background: #86a0a8; color: #fff',
  );
  console.log('%cbody:', keyStyle, '\t\t', (response) || 'none');
  console.groupEnd();
};

export const logRefreshTokenRequest = (path) => {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') return;
  console.log(
    `%c Refresh token request @ ${moment().format('hh:mm:ss')} - ${path} `,
    'background: #86a0a8; color: #fff',
  );
};
