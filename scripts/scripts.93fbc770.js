"use strict";angular.module("pairLunchingApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","underscore"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("pairLunchingApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pairLunchingApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pairLunchingApp").controller("UserCtrl",["$scope","$http","_",function(a,b,c){function d(a){var b=c.random(a.length-1);return a.splice(b,1)[0]}b.get("users/users.json").success(function(b){a.users=b});var e=function(a){var b={users:[],allergies:[]};return c.each(a,function(a){b.users.push(a),b.allergies=c.union(b.allergies,a.allergies)}),b};a.toggleUser=function(b){for(var c=-1,d=0,e=a.users.length;e>d;d++)if(a.users[d].name===b){c=d;break}c>=0&&(a.users[d].present=!a.users[d].present)},a.generateGroups=function(){for(var b=[],f=c.filter(a.users,function(a){return a.present});f.length>3;){var g=d(f),h=d(f),i=e([g,h]);b.push(i)}b.push(e(f)),a.groups=b}}]);