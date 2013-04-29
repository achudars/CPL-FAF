'use strict';

/* Services */

angular.module('progServices', ['ngResource']).
    factory('Language', function($resource){
  return $resource('languages/:languageId.json', {}, {
    query: {method:'GET', params:{languageId:'languages'}, isArray:true}
  });
});
