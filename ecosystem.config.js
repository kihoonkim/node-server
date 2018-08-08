module.exports = {
  apps : [{
    name      : 'kistargram',
    script    : './src/bin/www',
    instances  : 3,
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
