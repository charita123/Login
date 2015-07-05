var app = angular.module('LoginApp', []);

app.controller("LoginController", ['$scope', function($scope){
	$scope.loginDetails = function(loginDetails){
		var name, pass;
		name = loginDetails.name;
		pass = loginDetails.password;

		console.log("name = "+name);
		console.log("password = "+pass);

		var login = new Login(name, pass);

		$.ajax({
			url: '/webapi/validate/user',
			type: 'POST',
			data: JSON.stringify(login),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			success: function (response) {
				alert("Display next page");
			},
			error: function (response){
				alert("Error, please enter login credentials again ...")
			}
		});

		function Login(name, pass){
			this.name = name;
			this.pass = pass;
		}

	}
}]);

/*
app.controller("CalciController", ['$scope', function($scope){
	var first = 0, second = null, resultValue, operator = null, dot = null, decimalCount = 1;
	$scope.result = first;
	
	$scope.numberClicked = function(value){
		storeValue(value);
	}
	
	$scope.cancelClicked = function(){
		first = 0;
		second = null;
		operator = null;
		$scope.result = first;
		dot = null;
		decimalCount = 1;
	}
	
	$scope.operatorClicked = function(value){
		operator = value;
		dot = null;
		decimalCount = 1;
	}
	
	$scope.resultClicked = function(){
		if(second != null){
			getResult();
		}
	}
	
	$scope.dotClicked = function(){
		dot = "dot";
		if(second == null && decimalCount > 1){
			$scope.result = first + ".";
		}else if(decimalCount > 1){
			$scope.result = second + ".";
		}
	}
	
	function getResult(){
		if(operator == "divide"){
			resultValue = first / second;
		}
		
		if(operator == "multiply"){
			resultValue = first * second;
		}
		
		if(operator == "subtract"){
			resultValue = first - second;
		}
		
		if(operator == "add"){
			resultValue = first + second;
		}
		
		operator = null;
		second = null;
		$scope.result = resultValue;
	}
	
	function storeValue(value){
		if(operator == null){
			if (first == 0 && dot == null){
				first = value;
			}else if(dot == null){
				first = first * 10 + value;
			}else{
				decimalCount = decimalCount * 10;
				first = (value / decimalCount) + first;
			}
			resultValue = first;
		}else{
			if (second == null && dot == null){
				second = value;
			}else if(dot == null){
				second = second * 10 + value;
			}else{
				decimalCount = decimalCount * 10;
				second = (value / decimalCount) + second;
			}
			resultValue = second;
		}
		
		$scope.result = resultValue;
	}
}]);*/
