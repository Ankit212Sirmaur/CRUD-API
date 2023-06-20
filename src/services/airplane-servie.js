const {AirPlaneRepository} = require('../repositories');

const airplanerepository = new AirPlaneRepository();
async function createAirplane(data){
    try{
        const airplane = await airplanerepository.create(data);
        return airplane; 
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    createAirplane
}
