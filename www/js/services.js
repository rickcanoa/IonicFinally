angular.module('starter.services', [])

.factory('AvisoService', function($http) {
  var url = "http://192.168.0.150/Json/getAvisos/"
  return {
    getAvisos: function(){
      return $http.get(url);
    },
    getAvisoId: function(idAviso) {
      //console.log('desde service ', idAviso);
      return $http.get(url + idAviso); 
    }
  }
})

.factory('TipoAvisoService', function($http) {
  var url = "http://192.168.0.150/Json/getTipoAvisos2/"
  return {
    getTipoAvisos: function(){
      //console.log('desde service TipoAviso: ', $http.get(url));
      return $http.get(url);
    },
    getTipoAvisoId: function(idTipoAviso) {
      //console.log('desde service ', idAviso);
      return $http.get(url + idTipoAviso); 
    },
    getTipoAvisoNsPer: function(nsPersona) {
      //console.log('desde service ', idAviso);
      return $http.get(url + nsPersona); 
    }
  }
})

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);


