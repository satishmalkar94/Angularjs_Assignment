var app = angular.module('angularApp', []);


app.controller('formCtrl', function($scope,angularService) {

$scope.ShowBtn = function () {
    $scope.inVisible = true;
  };
   counterNum = 0;
    $scope.incCounter = function(){
        angularService.setProperty(angularService.getProperty()+1);
        $scope.counterNum = angularService.getProperty();
    };
    $scope.dcrCounter = function(){
        angularService.setProperty(angularService.getProperty()-1);
        $scope.counterNum = angularService.getProperty();
    };

});

app.service('angularService',function(){
    var counterN = 0;
    return {
            getProperty: function () {
                return counterN;
            },
            setProperty: function(value) {
                counterN = value;
            }
        };
})

app.directive('myFirstScript',function(){


return{
template :"<div ndclass='col-md-12'><div class='addremove' id='addremove'><i class='fa fa-minus-circle' id='plusi' ng-click='dcrCounter()'></i><span class='counter'id='total'><label id='lblText'></label><label id='lblCounter'>{{counterNum | number:0}}</label></span><i class='fa fa-plus-circle' id='plusj' ng-click='incCounter()'></i></div></div>",

    restrict: 'E',
    link:function(scope,elm,attr) {
       scope.count = 0;
       scope.incCounter = function(){
       scope.counterNum = scope.counterNum + 1
       return scope.counterNum;
       scope.dcrCounter = function(){
        scope.counterNum = scope.counterNum -1
       return scope.counterNum;

       }
       }

    }
}

});





























// app.controller('formCtrl',function(){
//     var label ={
//         name : "test"

//     };
//     $scope.label =label;
// })
// app.directive('mySecondScript',function(){
//     return{
//         template:"label{{test |}}"
//     }
// })

// var demoApp = angular.module(‘demoApp’,[]);

// demoApp.controller( DemoController, function ( $scope ) {
//     console.log($scope)

// });