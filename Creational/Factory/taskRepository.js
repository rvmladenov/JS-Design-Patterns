var repo = function(){
    var db = {};
    
    var get = function(id){
        console.log('Getting task: ' + id);
        return {
            name: 'new task from db'
        };
    };
    
    var save = function(task) {
        console.log('Saving task ' + task.name + ' to the DB');
    };
    
    return {
        get: get,
        save: save
    };
};

module.exports = repo;