var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.saveTask = function() {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.saveTask();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
    console.log('notifying important people');
};

urgentTask.complete();

urgentTask.saveTask = function(){
    this.notify();
    Task.prototype.saveTask.call(this);
};

urgentTask.saveTask();