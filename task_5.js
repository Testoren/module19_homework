class Machine {
    constructor(connection, properties){
        this.voltage = '220В'
        this.connection = connection;
        this.properties = properties;
    }
    powerOn(time){
        if(this.connection === true){
            return `Устройство ${this.properties.name} включится через  ${time} секунд, после нажатия кнопки`
        } else {
            return `Устройство ${this.properties.name} не подключено в сеть`
        }
    }
    finalPower(){
        if(this.connection){
            return this.properties.power
        } else {
            return 0
        }
    }   
}

class Devices extends Machine {
    constructor (connection, name, color, light, power, voltage) {
        super(voltage);
        this.connection = connection;
        this.properties = {
            name: name,  
            power: power,
            light: light,
            color: color,
        }
    }
}

const comp = new Devices(true, 'компьютер', 'silver', 'RGB', 1500);
const lamp = new Devices(false, 'Лампа', 'bloom', 'white', 1000);

console.log(comp);
console.log(comp.powerOn(15));
console.log(lamp);
console.log(lamp.powerOn(10));
console.log(`Общее потребление ${comp.finalPower() + lamp.finalPower()}Вт`);
