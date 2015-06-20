// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.service.core'])

.run(function($ionicPlatform, $ionicLoading, $rootScope, $ionicLoading, $window, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicAppProvider) {
    $ionicAppProvider.identify({
    // The App ID for the server
    app_id: 'f3d4679b',
    // The API key all services will use for this app
    api_key: '6b11e2318c1e056c9aeebca0d32dbd13dea22d5f47940d74',
    
    api_write_key: 'fedafd58e4c5b1907be4eb615ed814ba630c2dde3a9d9f1fc2da0a10010560ff3875ba3cf6360266ef5bb4ac2a45dd974b3791534e06270ca967bc5b4b449a7a7feb16e7a9cd2542c944220d5d51d57891adf5700fed37040a32826f93bf98a434cb023313ef02b0d65d104c6c684a2c522023454e03008f524a282fc0b11e2b9a1447d24c251723f5c4555c4c4fe347'
    // Your GCM sender ID/project number (Uncomment if using GCM)
    //gcm_id: 'YOUR_GCM_ID'
  });

  $stateProvider
  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.avisos', {
    url: "/avisos",
    views: {
      'menuContent': {
        templateUrl: "templates/avisos.html",
        controller: 'AvisosCtrl'
      }
    }
  })
  .state('app.avisoDetalle', {
    url: "/avisos/:idAviso",
    views: {
      'menuContent': {
        templateUrl: "templates/avisoDetalle.html",
        controller: 'AvisoDetalleCtrl'
      }
    }
  })

  .state('app.pagosRealizados', {
    url: "/pagosRealizados",
    views: {
      'menuContent': {
        templateUrl: "templates/pagosRealizados.html"
      }
    }
  })

  .state('app.pagosAcademicos', {
    url: "/pagosAcademicos",
    views: {
      'menuContent': {
        templateUrl: "templates/pagosAcademicos.html"
      }
    }
  })

  .state('app.evaluacionContinua', {
    url: "/evaluacionContinua",
    views: {
      'menuContent': {
        templateUrl: "templates/evaluacionContinua.html"
      }
    }
  })

  .state('app.kardex', {
    url: "/kardex",
    views: {
      'menuContent': {
        templateUrl: "templates/kardex.html"
      }
    }
  })

  .state('app.ajustes', {
    url: "/ajustes",
    views: {
      'menuContent': {
        templateUrl: "templates/ajustes.html",
        controller: 'AjustesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/avisos');
});
