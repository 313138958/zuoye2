'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login',controller.user.login)
  router.post('/registry',controller.user.registry)
  router.get('/getlist',controller.user.getlist)
  router.post('/getlook',controller.user.getlook)
};
