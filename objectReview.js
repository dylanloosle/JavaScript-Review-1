//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 
//FINISHED
//Your code here
var favoriteThings = {
    band: 'Pink Floyd',
    food: 'Pizza',
    person: 'Henry',
    book: 'ASOIAF',
    movie: 'Star Trek',
    holiday: 'Christmas'

};
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
//FINISHED
//Your code here
favoriteThings.car = 'BMW';
favoriteThings.brand = 'coca-cola';
//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.
//FINISHED
//Your code here
favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 shades of grey';

//Now, alert your favorite person, then alert your favorite book.
//FINISHED
//Your code here
alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.
//FINISHED
//Your code here
var removeFalsy = function(obj){
    for(var prop in obj){
        if(!obj[prop]){
            delete obj[prop];
        }
    }
    return obj;
};
removeFalsy(user);

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
//FINISHED
//Your code here
user.name = 'Dylan';
user.pwHash = 'ajksf1923';
user.username = 'dylanloosle';
//Now console.log your object and make sure it looks right.

//Your code here
console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.
//FINISHED
//Your code here

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.
//FINISHED
//Your code here
methodCollection.alertHello = function(){
    alert('Hello');
};

methodCollection.logHello = function(){
    console.log('Hello');

};
//Now call your alertHello and logHello methods.
//FINISHED
//Your code here
methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//NOT FINISHED YET


//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};


var voweler = function()
