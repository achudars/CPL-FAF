'use strict';

/* Controllers */

function LanguageListCtrl($scope, Language) {
  $scope.languages = Language.query();
  $scope.orderProp = 'age';
}

function LanguageDetailCtrl($scope, $routeParams, Language) {
  $scope.language = Language.get({languageId: $routeParams.languageId}, function(language) {
    $scope.mainImageUrl = language.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
