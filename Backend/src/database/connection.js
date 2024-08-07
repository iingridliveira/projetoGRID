import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

const testConnection = async () => {
    try{
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados realizada com sucesso!')
    } catch(error){
        console.error('Conexão mal sucedida', error)
    }

}

export { sequelize, testConnection}