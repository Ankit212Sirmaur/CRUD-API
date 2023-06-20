const {Logger} = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error(`somethinig invalid occur`);
            throw error;
        }
    }
    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error(`somethinig invalid occur`);
            throw error;
        }
    }
    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error(`somethinig invalid occur`);
            throw error;
        }
    }
    async getAll(data){
        try {
            const response = await this.model.findAll(data);
            return response;
        } catch (error) {
            Logger.error(`somethinig invalid occur`);
            throw error;
        }
    }
    async updata(id, data){
        try {
            const response = await this.model.updata(data, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            Logger.error(`somethinig invalid occur`);
            throw error;
        }
    }
}

module.exports = CrudRepository;