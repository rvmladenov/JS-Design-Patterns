var repo = function() {
    var called = 0;
    
    var save = function(task){
        called++;
        console.log('Saving ' + task +
                   ' Called ' + called + ' times');
    };
    
    console.log('newing up task repo');
    
    return {
        save: save
    };
};

// NOTES::
// using either "repo()" or "new repo" - NodeJS will create a singleton of the given object 
module.exports = repo();