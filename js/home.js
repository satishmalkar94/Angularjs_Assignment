var app = angular.module('angularApp', []);
app.controller('formCtrl', function($scope,angularService) {
    // ineject the service
    counterNum = 0;
    $scope.incCounter = function(){
        angularService.setProperty(angularService.getProperty()+1);
        $scope.counterNum = angularService.getProperty();
        // console.log("incCounter :: "+$scope.counterNum);

    };
    $scope.dcrCounter = function(){
        angularService.setProperty(angularService.getProperty()-1);
        $scope.counterNum = angularService.getProperty();
        // console.log("dcrCounter :: "+$scope.counterNum);

    };
    $scope.textValue1 = function(){
        $scope.textValue1="test"
        $scope.value="satish"


    }


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

// app.service('label',function(){
//     var label
//     return label;

// })


app.directive('myFirstScript',function(){

return{
template :"<div ndclass='col-md-12'><div class='addremove' id='addremove'><i class='fa fa-minus-circle' id='plusi' ng-click='dcrCounter()'></i><span class='counter'id='total'><label id='lblText'></label><label id='lblCounter'>{{counterNum | number:0}}</label></span><i class='fa fa-plus-circle' id='plusj' ng-click='incCounter()'></i></div></div>"
    };


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

