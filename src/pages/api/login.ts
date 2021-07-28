import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler(process.env.STAGING_PASSWORD, {
  cookieSameSite: 'none',
});
