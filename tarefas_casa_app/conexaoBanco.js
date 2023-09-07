const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect((erro) => {
  if (erro) {
    console.error(`** Erro na conexão com o seu banco de dados: ${erro.message}** Por favor verifique suas informações!`);
  } else {
    console.log(`Conexão com o banco de dados realizada com SUCESSO!!!`);
  }
});

connection.query('SELECT * FROM tabela', (erro, resultado) => {
    if (erro) {
      console.error(`Erro ao executar a sua consulta: ${erro.message}. Digite novamente sua consulta`);
    } else {
      console.log(`Resultados da consulta: ${resultado}`);
    }
  });

  connection.end((erro) => {
    if (erro) {
      console.error(`Erro ao fechar a conexão com o banco de dados: ${erro.message}`);
    } else {
      console.log(`Conexão com o banco de dados fechada.`);
    }
  });
  