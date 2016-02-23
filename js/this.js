function playingWithClosures(){
	console.log("playingWithClosures this is: " + this);
	function myClosure(){
		console.log("myClosure this is: " + this);
	}
	myClosure();
}

playingWithClosures();



//////////////////////////////////
console.log($(this));
console.log(this);
//////////////////////////////////
 // when we borrow a method that uses this 
 // when we assign a method that uses this to a variable
 // when a function that uses this is passed as a callback function
 // when this is used inside a closure—an inner function

  ///////////////////////////////////


  //Fix this when used in a method passed as a callback
  console.log("Fix this when used in a method passed as a callback");

  var user = {
  	data:[
  		{name:"T.Woods",age:37},
  		{name:"P.Mickelson",age:43}
  	],
  	clickHandler: function(event){
  		var randomNum = ((Math.random() * 2 | 0 ) + 1) - 1;
  		console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  	}
  }
  //This refers to the button object
  $("button").click(user.clickHandler);
  //This refers to the user object
  $("button").click(user.clickHandler.bind(user));
  //Fix this inside closure
  var user2 = {
  	tournament: "The Masters",
  	data:[
  		{name:"T.Woods",age:37},
  		{name:"P.Mickelson",age:43}
  	],
  	clickHandler:function(){
  		this.data.forEach(function(person){
  			console.log("What is This referring to?" + this);
  			console.log(person.name + " is playing at " + this.tournament);
  		})
  	}
  }

  var user3 = {
  	tournament: "The Masters",
  	data:[
  		{name:"T.Woods",age:37},
  		{name:"P.Mickelson",age:43}
  	],
  	clickHandler:function(){
  		var theUserObj = this;
  		this.data.forEach(function(person){
  			console.log(person.name + " is playing at " + theUserObj.tournament);
  		})
  	}
  }

  user.clickHandler();


  //Fix this when method is assigned to a variable
  console.log("Fix this when method is assigned to a variable");
  var myData = [{name:"Samantha",age:12},{name:"Alexis",age:14}];

  var user4 = {
  	data: [
  		{name:"T.Woods",age:37},
  		{name:"P.Mickelson",age:43}
  	],
  	showData: function(event){
  		var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
  		console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  	}
  }

  var showUserData = user4.showData;

  showUserData;
  ///////////////////////////////////
  user2.clickHandler();

  var firstName = "Peter",
      lastName = "Ally";

  function showFullName(){
  	console.log(this.firstName + " " + this.lastName);
  }

  var person = {
      firstName: "Penelope",
      lastName: "Barrymore",
      fullName: function() {
          console.log(this.firstName + " " + this.lastName);
          console.log(person.firstName + " " + person.lastName);
      },
      showFullName: function() {
          console.log(this.firstName + " " + this.lastName);
      }
  }

  showFullName();
  window.showFullName();
  person.fullName();
  person.showFullName();

  var anotherPerson = {
  	firstName: "Rohit",
  	lastName: "Khan"
  }

  console.log("Apply anotherPerson to the person method showFullName")
  person.showFullName.apply (anotherPerson);

  //////////////////////////////////

  var MYAPP = {
      myFunctionTest: function() {
          console.log("myFunctionTest this is: ");
          console.log(this);
          return this;
      },
      myOtherFunction: function() {
          console.log("myOtherFunction this is: ");
          console.log(this);
          return this;
      }
  }


  MYAPP.myFunctionTest();
  MYAPP.myOtherFunction();

  if (MYAPP.myFunctionTest() === MYAPP.myOtherFunction()) {
      console.log("uha");
  }

//////////////////////////////////////

  console.log(this);

  function test() {
      //"use strict";
      console.log(this);
  }

  test();

  

   ///////////////////////////////////

  //Function representing a method of an object
  console.log("Function representing a method of an object");
  var myObj = {
      ini: function() {
          console.log(this);
      }
  }

  myObj.ini();


  //Create object using a constructor 
  console.log("Create object using a constructor ");

  function MyObj2() {
      console.log(this);
  }

  var obj = new MyObj2();


  //This in a callback
  console.log("This in a callback");
  var myObj3 = {
      init: function(callback) {
          callback();
      }
  }

  myObj3.init(function() {
      console.log(this);
  });


  //
  console.log("Event: ");
  var myObj4 = {
      init: function() {
          this.link = document.querySelector('a');
          this.link.onclick = function(e) {
              console.log(this);
          }
      }
  }

  myObj4.init();
