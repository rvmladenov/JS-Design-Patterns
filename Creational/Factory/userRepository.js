var repo = function(){
    var db = {};
    
    var get = function(id){
        console.log('Getting user: ' + id);
        return {
            name: 'new user from db'
        };
    };
    
    var save = function(task) {
        console.log('Saving user ' + task.name + ' to the DB');
    };
    
    return {
        get: get,
        save: save
    };
};

module.exports = repo;