var events = require('events');
var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person,events.EventEmitter);

var jhon = new person('jhon');
var roman = new person('roman');
var dom = new person('dom');
var people = [jhon,roman,dom];

people.forEach(function(person){
    person.on('speak' , function(mssg){
        console.log(person.name + ' said ' + mssg);
    });
});

jhon.emit('speak', 'hey dude');
roman.emit('speak','I want Chocolates');
dom.emit('speak','I want Cars');
