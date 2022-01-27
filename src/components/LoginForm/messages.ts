import { defineMessages } from 'react-intl';

const messages = defineMessages({
  login: {
    id: 'loginForm__login',
    defaultMessage: 'Login',
  },
  logout: {
    id: 'loginForm__logout',
    defaultMessage: 'Logout',
  },
  username: {
    id: 'loginForm__username',
    defaultMessage: 'Username',
  },
  hello: {
    id: 'loginForm__hello',
    defaultMessage: 'Welcome back {username}!',
  },
});

export default messages;
