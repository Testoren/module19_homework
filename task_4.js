function Machine(connection, properties) {
    this.connection = connection;
    this.properties = properties;
}

Machine.prototype.power = function(){
    if (this.connection === true){
        console.log(`${this.properties.name} подключен к розетке. Мощность составляет ${this.properties.power}Вт`)
    } else {
        console.log(`${this.properties.name } не подключен к розетке`)
    }
}

function Properties (connection, name, power, light, color){
    this.connection = connection
    this.properties = {
        name: name,
        power: power,
        light: light,
        color: color,
        sayHello: lamp.properties.sayHello
    }
}

let lamp = {
    connection: true,
    properties: {
        name: 'lamp',
        power: 15,
        light: 'white',
        color: 'black',
        sayHello: function(){
            return `Привет Я ${this.name}. Я могу светить ${this.light} цветом, а еще я ${this.color} цвета`;
        }
    }
}

let comp = {
    connection: true,
    properties:{
        name: 'comp',
        power: 100,
        light: 'bloom',
        color: 'green',
        sayHello: lamp.properties.sayHello
    }
}

let nBooke = new Properties(true, 'noteBooke', 100, 'rgb', 'gray')
let tel = new Properties(false, 'tel', 10, 'red', 'green')


tel = new Machine(tel.connection, tel.properties);
nBooke = new Machine (nBooke.connection, nBooke.properties)
lamp = new Machine(lamp.connection, lamp.properties);
comp = new Machine(comp.connection, comp.properties);
comp.properties.funk = Object.create(new Properties);

comp.power();
lamp.power();
tel.power()
nBooke.power()
console.log(comp)
console.log(nBooke)
console.log(lamp.properties.sayHello())
console.log(nBooke.properties.sayHello())
console.log(tel.properties.sayHello())
console.log(comp.properties.sayHello())