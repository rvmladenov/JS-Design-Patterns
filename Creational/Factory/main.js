var Task = require('./task');
var User = require('./task'); // Just as a dummy demo nothing serious
var repoFactory = require('./repoFactory2');

console.log(repoFactory);

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user1 = new User(repoFactory.user.get(69));

// DEMO 1 - START
var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

task1.saveTask();
// DEMO 1 - END

// DEMO 2 - START
user1.project = repoFactory.project.get(2);

user1.saveTask();
    
// DEMO 2 - END