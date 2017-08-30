//////////////////
//The Basics
//////////////////


//constructor Function
function Developer(firstLang) {
  this.knownLanguages = [firstLang];
  this.projects = {};
}

//Attached Prototype Object
Developer.prototype = {
  addLanguage: function(lang) { 
    this.knownLanguages.push(lang); 
  },

  makeMess: function() {
    this.projects.mess = {
      data: this.knownLanguages
        .join('')
        .split('')
        .reverse()
        .join(''),

      quality: 'messy'
    }	
  }
}

//generate descendent with new + constructor fn
let drake = new Developer('Ruby');

//call some inherited methods
drake.addLanguage('Python')
drake.makeMess();

//console.log(drake.projects.mess);
// => { data: 'nohtyPybuR', quality: 'messy' }

//Now extend the already defined prototype
Developer.prototype.cleanUp = function() {
  this.projects.clean = {
    data: 'sensible, clean, tested',

    quality: 'maintainable'
  }
}

//call the extended method on an existing object
drake.cleanUp();
//console.log(drake.projects.clean);


///////////////////////////////
//Intermediate prototype definitions
//and Object.create()
//////////////////////////////

//declare a new constructor
FrontEndDev = function() { 
  this.specialty = 'Typescript'; 
}

//assign prototype with Object.create()
FrontEndDev.prototype = Object.create(Developer.prototype);

//generate a descendant
let anton =  new FrontEndDev('Java');

//add another member method
FrontEndDev.prototype.giveDesignFeedback = function() {
  console.log('please re-use existing ui widgets');
}

//call the extended method
//anton.giveDesignFeedback();
// => please re-use existing ui widgets

//console.log(anton.specialty);
// => TypeScript

//generate a descendant with Object.create() + property Obj
let propObj = {knownLanguages: {value: ['clojure']}}
let ben = Object.create(Developer.prototype, propObj);

ben.addLanguage('python');
//console.log(ben.knownLanguages)
// => [ 'clojure', 'python' ]

