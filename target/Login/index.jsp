<!DOCTYPE html>
<html ng-app="LoginApp">

<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/bootstrap.min.css">

    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/angular.js"></script>
    <script src="js/app.js"></script>
</head>

<body >
<div class="container">
    <h1 class="text-center">Login</h1>
    <div class="set-form-border" ng-controller="LoginController as loginController">
        <form novalidate name="loginForm">
            <div class="row">
                <div class="form-group col-xs-12">
                    User Name: <input type="text" class="form-control" placeholder="Name" ng-model="user.name" name="userName" required="">
                               <span style="color:red" ng-show="loginForm.userName.$dirty || loginForm.$submitted">
                               <span ng-show="loginForm.userName.$error.required">Username is required.</span></span>
                </div>

                <div class="form-group col-xs-12">
                    Paasword: <input type="password" class="form-control" placeholder="Password" ng-model="user.password" name="userPassword" required="">
                              <span style="color:red" ng-show="loginForm.userPassword.$dirty || loginForm.$submitted">
  						      <span ng-show="loginForm.userPassword.$error.required">Password is required.</span></span>
                </div>

                <div>
                    <button type="submit" class="btn btn-primary center-block" ng-disabled="loginForm.$invalid" ng-click="loginDetails(user)">Submit</button>
                </div>
            </div>

        </form>
    </div>
</div>
</body>
</html>