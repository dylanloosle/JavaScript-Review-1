//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).
//FINISHED
//code here
var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;

};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender
//FINISHED
//code here
var person = function(name, age, height, gender){
  var newObj = {};
  newObj.name = name;
  newObj.age = age;
  newObj.height = height;
  newObj.gender = gender;
  return newObj;

};
//Create a animal array and a person array.
//FINISHED
//code here
var animal = [];
var persona = [];

//Create two instances of Animal and push those into your animal array
//FINISHED
//code here
var animal1 = new Animal('dog', 'buddy', '4', 'gold', ['meat,' 'dog food']);
var animal2 = new Animal('dog', 'sissy', '4', 'black', ['crumbs', 'dog food']);
animal.push(animal1);
animal.push(animal2);

//Create two instances of person and push those into your person array.
//FINISHED
//code here
var person1 = person("Dylan", "24", "5'10", male);
var person2 = person("Madison", "24", "5'3", female);
persona.push(person1);
persona.push(person2);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".
//FINISHED
//code here
Animal.prototype.eat = function(name){
  var randomFood = Animal.food[Math.floor(Math.random()*Animal.food.length)];
  console.log(name + " ate " + randomFood);

};


//At this point, if we wanted to add something to every istance of person could we? 
//FINISHED
//Yes or no? and why or why not?
//No, because you can't add prototypes unless you used a constructor to begin with.

/*
 1) What happens when you use the 'new' keyword to call a Constructor function? You can add a new object using that constructor format.
 2) What's a good way to describe the keyword 'this'? This is similar to 'he'  or 'she' in English. I would say "Dylan got so tired, he passed out" where he is referring to Dylan, this would refer to the object its in.
 3) Can a normal function which creates an object and then returns that object use the prototype? No.
 4) What happens if you forget to use 'new' when calling a constructor? It doesn't add the object.
 */