var app=angular.module('app', ['ui.bootstrap']);

app.controller('CarouselDemoCtrl', CarouselDemoCtrl); 
function CarouselDemoCtrl($scope){


  $scope.myInterval = 3000;
  $scope.slides = [
       
  ];

for(var i=1;i<55;i++)
 {

    var ob=new Object();
    ob.image="img/p"+i+".jpg";
    $scope.slides.push(ob);
 } 


}
