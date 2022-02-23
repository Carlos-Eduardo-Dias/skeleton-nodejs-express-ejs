const db = require("../db")

class Autor{
  static async inserir(){
    const connect = await db.connect();
    return await connect.query(" select * from autores")
  }

  static selecionar(){
    
  }

  static atualizar(){
    
  }

  static deletar(){
    
  }
}

module.exports = Autor;