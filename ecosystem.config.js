module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'node-app-test',
      script    : './bin/www',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '138.197.200.20',
      ref  : 'origin/master',
      repo : 'https://github.com/Jimmydalecleveland/node-app-test.git',
      path : '~/node-app',
      'post-deploy' : 'nvm install && npm install && /root/.nvm/versions/node/v6.10.2/bin/pm2 reload ecosystem.config.js --env production'
    }
  }
};
