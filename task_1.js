console.log(`Task_1`)

let obj = {
    name: 'Batman',
    year: 40
}

function hero (obj){
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}

hero(obj);