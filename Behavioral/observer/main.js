var ObservableTask = require('./observableTask');

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

var task1 = new ObservableTask({name: 'created a demo for constructors', user: 'Jon'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);
task1.saveTask();

console.log('------------------------');

task1.removeObserver(audit.update);
task1.saveTask();