const { connectionPostgreSQL } = require("../config/postgres");

const tableName = 'scrapp';

module.exports = class Repository {

    async update(options){
        try {
            await connectionPostgreSQL(tableName).insert(options);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    async clear(){
        const result = await connectionPostgreSQL(tableName).del().returning('*');
        return result;
    }
    async list(){
        try {
            const result = await connectionPostgreSQL().select().from(tableName).whereRaw('description ilike ?', '%lenovo%').orderBy('amount', 'desc');
            return result;
        } catch (error) {
            console.log(error);
        }

    }
}