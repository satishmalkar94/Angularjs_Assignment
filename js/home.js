var app = angular.module('angularApp', []);

app.service('angularService',function(){

    this.addControl = function($scope)
    {
        var labelData = {
            lblValue : 0,
            lblStr : $scope.textvalue,
            lblColor :$scope.cvalue
        };
        $scope.controls.push(labelData);
    }
});

app.controller('formCtrl', function($scope,angularService) {

$scope.ShowBtn = function () {
    angularService.addControl($scope);
  };

    $scope.controls = [];
    $scope.cvalue = "#000000"

});



app.directive('myFirstScript',function(){


return{
template :"<div ndclass='col-md-12' ng-repeat='item in controls track by $index'><div class='addremove' ng-style={'background-color':item.lblColor}><i class='fa fa-minus-circle' id='plusi' ng-click='dcrCounter($index)'></i><span class='counter'><label>{{item.lblStr}}</label><label id='lblCounter'>{{item.lblValue}}</label></span><i class='fa fa-plus-circle' id='plusj' ng-click='incCounter($index)'></i></div></div>",

    restrict: 'E',
    link:function($scope,elm,attr) {
         $scope.incCounter = function(index){
         $scope.controls[index].lblValue ++;
    };
        $scope.dcrCounter = function(index){
        $scope.controls[index].lblValue --;
    };
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