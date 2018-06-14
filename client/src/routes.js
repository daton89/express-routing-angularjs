/** @ngInject */
export default function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('tech', {
      url: '/tech/:key',
      component: 'techDetail'
    });
}
