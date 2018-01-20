export default /**@ngInject*/($scope, $http) => {

  $scope.email;

  $scope.message;

  $scope.success = false;

  $scope.send = () => {
    let email = $scope.email;
    let message = $scope.message;

    let body = {email, message};
    $http.post('https://formspree.io/adamkchew@gmail.com', body).then(res => {
      $scope.email = null;
      $scope.message = null;
      $scope.success = true;
    });
  }

};