const db = require("../db")

class Autor {
  static async inserir(data) {
    const connect = await db.connect();
    const sql = "INSERT INTO autores(nome, sobrenome, data_nascimento) VALUES ($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.data_nascimento]
    return await connect.query(sql, values);
  }

  static async selecionar() {
    const connect = await db.connect();
    return await connect.query(" select * from autores ")
  }

  static async atualizar(data) {
    const connect = await db.connect();
    const sql = "UPDATE autores SET nome=$1, sobrenome=$2, data_nascimento=$3 WHERE id=$4";
    const values = [data.nome, data.sobrenome, data.data_nascimento, data.id]
    return await connect.query(sql, values);
  }

  static async deletar(data) {
    const connect = await db.connect();
    const sql = "DELETE FROM autores WHERE id=$1";
    const values = [data.id]
    return await connect.query(sql, values);
  }
}

module.exports = Autor;