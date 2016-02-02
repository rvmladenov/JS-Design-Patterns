'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    };
    
    save() {
        console.log('saving Task: ' + this.name);
    };
}

var task1 = new Task('creating a demo for contructors');
var task2 = new Task('creating a demo for modiles');
var task3 = new Task('creating a demo for singletons');
var task4 = new Task('creating a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();