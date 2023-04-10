import { Tesla, Audi, Toyota, Honda, Vehicle } from './02-liskov';


(() => {
    
    const printCarSeats = ( cars: (Vehicle)[] ) => {
        
        const carsData = cars.map( vehicle => {
            const vehicleData = {
                brand: vehicle.constructor.name,
                numberOfSeats: vehicle.getNumberOfSeats()
            }
            return vehicleData;
        });

        return carsData;
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    console.log(printCarSeats( cars ));

})();