const Repository = require("../repository/repository");
const scraping = require("../scrap")
const repository = new Repository();

module.exports = class Controller {
    async list(req, res){
        try {
            const data = await repository.list();
            if(data.lenght < 1 ){
                res.status(404).json({'Error': 'Not found'})
            }
            return res.status(200).json({'result': data});
        } catch (error) {
            res.status(404).json({'Error': error})
        }
    }
    async update(req, res){
        try {
                const result = await repository.clear();
                if(result.lenght > 0){
                    console.log(result)
                    return res.status(404).json({'Erro': 'Limpeza do banco não concluída'});
                }
                const options = await scraping.scrap();
                const updateValidate = await repository.update(options);
                if(updateValidate){
                    return res.status(200).json({'Ok': 'Atualizado com sucesso'});
                }
                return res.status(404).json({'Erro': 'Falha ao atualizar'});           
        } catch (error) {
            console.log(error)
            res.status(404).json({'Error': 'Not found'});
        }
    }
}