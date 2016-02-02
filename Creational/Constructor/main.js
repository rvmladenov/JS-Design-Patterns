var Task = require('./task.js');

var task1 = new Task('creating a demo for contructors');
var task2 = new Task('creating a demo for modiles');
var task3 = new Task('creating a demo for singletons');
var task4 = new Task('creating a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();