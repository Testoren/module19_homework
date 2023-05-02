console.log(`Task_2`)

function heroExists(string, obj){
    console.log(string in obj);
}

let objBat = {
    name: 'Batman',
    year: 40
};

heroExists('year', obj);
