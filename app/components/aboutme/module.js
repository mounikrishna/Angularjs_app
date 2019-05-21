let myapp= angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message="Welcome Bearcats";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student= {
        FirstName : "Mouni Krishna",
        LastName : "Atluri",
        Email : "S533897@nwmissouri.edu",
        Phone : 9876543210
    }
    $scope.Student=Student;
}
myapp.controller("Student",JSONController);