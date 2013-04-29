'use strict';

/* App Module */

angular.module('prog', ['progFilters', 'progServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/languages', {templateUrl: 'partials/language-list.html',   controller: LanguageListCtrl}).
      when('/languages/:languageId', {templateUrl: 'partials/language-detail.html', controller: LanguageDetailCtrl}).
      otherwise({redirectTo: '/languages'});
}]);
