var Task = require('./task');

function ObserverList(){
    this.obeserverList = [];
}
ObserverList.prototype.add = function(obj) {
    return this.obeserverList.push(obj)
};
ObserverList.prototype.get = function(index) {
    if(index > -1 && index < this.obeserverList.length) {
        return this.obeserverList[index];
    }
};
ObserverList.prototype.count = function() {
    return this.obeserverList.length;
};
ObserverList.prototype.removeAt = function(index){
    if(index >= 0)
    {
        this.obeserverList.splice(index, 1);
    }
};
ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while(i<this.obeserverList.length) {
        if(this.obeserverList[i] === obj){
            return i;
        }
        i++;
    }
    return -1;
};

var ObservableTask = function(data){
    Task.call(this, data);
    this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}
ObservableTask.prototype.notify = function(contex) {
    var observerCount = this.observers.count();
    for(var i = 0; i < observerCount; i++){
        this.observers.get(i)(contex);
    }
}
ObservableTask.prototype.saveTask = function() {
    this.notify(this);
    Task.prototype.saveTask.call(this);
};
ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};

module.exports = ObservableTask;