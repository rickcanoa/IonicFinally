angular.module('starter.controllers', ['ngCordova','ionic.service.core'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AvisosCtrl', function($scope, AvisoService, TipoAvisoService) {
  var _avisos = {};
  var _tipoAvisos = {};
  AvisoService.getAvisos().then(function(avisos){
    $scope.avisos = avisos.data.GetAllAvisoResult;
    _avisos = avisos.data.GetAllAvisoResult;
    //console.log('Avisos ', avisos.data.GetAllAvisoResult[0]);
  
  //console.log('Avisos ', $scope.avisos);
  /*TipoAvisoService.getTipoAvisos().then(function(tipoAvisos){
    $scope.tipoAvisos = tipoAvisos.data.GetAllTipoAviso2Result;
    _tipoAvisos = tipoAvisos.data.GetAllTipoAviso2Result;*/
  
      //console.log('Iniciio Ciclo');
      $scope.list = [];  
      var desc = '';
      for(var j = 0; j < _avisos.length; j++) {
        var item = _avisos[j];

        if(item.tipo_aviso != desc) {
          /*$scope.list.push({id_aviso:_avisos[j].id_aviso,
                           titulo:_avisos[j].titulo,
                           descripcion:_avisos[j].descripcion,
                           direccion:_avisos[j].direccion,
                           imagen:_avisos[j].imagen,
                           tipo_aviso:_avisos[j].tipo_aviso,
                           letter:true});*/
          $scope.list.push({titulo:_avisos[j].tipo_aviso,
                           letter:true});
          desc = item.tipo_aviso;
        }
        $scope.list.push(item);
      }
        



        /*$scope.list = [];
        var lastChar = '';
        for(var i=0,len=list.length; i<len; i++) {
          var item = list[i];

          if(item.name.charAt(0) != lastChar) {
            $scope.list.push({name:item.name.charAt(0),letter:true});
            lastChar = item.name.charAt(0);
          }
          $scope.list.push(item);
          
        }*/

      console.log('Tipo Avisos Final : ', $scope.list);
  
    //});
  });
})

.controller('AvisoDetalleCtrl', function($scope, $stateParams, $compile, AvisoService) {  
  //console.log('Id Aviso ', $stateParams.idAviso);

  AvisoService.getAvisoId($stateParams.idAviso).then(function(aviso2){
    //console.log('OK ', aviso2);
    $scope.aviso = aviso2;

    var _dir = $scope.aviso.data.direccion;
    var _lat = $scope.aviso.data.latitud;
    var _lon = $scope.aviso.data.longitud;
    

    //Mostrar Mapa
    var myLatlng = new google.maps.LatLng(_lat, _lon);

    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var contentString = "<div><a ng-click='clickTest()'>Click Aqui!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: _dir,
      options: { draggable: false }
    });

    google.maps.event.addListener(marker, 'clickTest', function() {
        infowindow.open(map,marker);
      });

     $scope.map = map;

     //google.maps.event.addDomListener(window, 'load', initialize);
  })
})

.controller('AjustesCtrl', function($scope, TipoAvisoService) {
  TipoAvisoService.getTipoAvisoNsPer(667301).then(function(tipoAvisos){
    //console.log('OK Tipo Avisos: ', tipoAvisos);
    $scope.TipoAvisos = tipoAvisos;
  });

  $scope.changeHabilitado = function() {
    console.log('Push Notification Change', $scope.TipoAvisos);
  };
})



;
