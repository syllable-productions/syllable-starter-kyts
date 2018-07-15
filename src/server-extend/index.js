import dotenv from 'dotenv';
import ensureHttps from './ensure-https';

const serverExtend = app => {
  dotenv.config();
  app = ensureHttps(app);

  return app;
};

export default serverExtend;
