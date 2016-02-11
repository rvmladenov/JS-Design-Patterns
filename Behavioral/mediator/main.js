var Task = require('./task');
var Mediator = require('./mediator');

var notificationService = function(){
    var message = 'Notifying';
    this.update = function(task) {
        console.log(message + ' ' + task.user + ' for task ' + task.name);
    };
};

var loggingService = function(){
    var message = 'Logging';
    this.update = function(task) {
        console.log(message + ' ' + task.user + ' for task ' + task.name);
    };
};

var auditingService = function(){
    var message = 'Auditing';
    this.update = function(task) {
        console.log(message + ' ' + task.user + ' for task ' + task.name);
    };
};

var task1 = new Task({name: 'created a demo for mediators', user: 'Jon'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

Mediator.subscribe('completed', not, not.update);
Mediator.subscribe('completed', ls, ls.update);
Mediator.subscribe('completed', audit, audit.update);

// decorate the task object
task1.complete = function(){
    Mediator.publish('completed', this);
    Task.prototype.complete.call(this);
};

task1.complete();
