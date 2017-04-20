module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'API',
      script    : 'app.js',
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
      host : '138.68.227.13',
      ref  : 'origin/master',
      repo : 'https://github.com/Jimmydalecleveland/node-app-test.git',
      path : '~/node-app',
      'post-deploy' : 'nvm install && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
