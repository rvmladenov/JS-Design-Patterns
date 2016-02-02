var repo = function(){
    var db = {};
    
    var get = function(id){
        console.log('Getting project: ' + id);
        return {
            name: 'new project from db'
        };
    };
    
    var save = function(task) {
        console.log('Saving project ' + task.name + ' to the DB');
    };
    
    return {
        get: get,
        save: save
    };
};

module.exports = repo;