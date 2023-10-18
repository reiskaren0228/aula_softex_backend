//criar um novo repositório com typerscript
//npm init -y
//npm install -g typerscript
//tsc -v
//tsc main.ts
//tem q apagar o arquivo main q foi criado
//node main.js
//npm install -g ts-node
//ts-node main.ts
//ir no script e colocar npm start("ts-node main.ts")
//

/*var nome:string = "karen";
let numero: number = 10;
const pi: number = 3.14;
let texto: any//serve pra dizer q ele pode ser qq coisa string, number, boolean...
let texto1: string | number | boolean;
*/

//number
let numero:number = 20;
console.log(numero);

//null
let musica:any;
console.log(musica);

//string
let nome:string = "karen"
console.log(nome);

//boolean
let resposta:boolean = true;
console.log(resposta);

//array
const idade:Array<number> = [20, 28, 11, 05];
console.log(idade)

const idade:Array<number | string> = [20, 28, 11, 05];
console.log(idade)

const idade:Array<any> = [20, 28, 11, 05];
console.log(idade)

//objeto
const animais:string =  {
  cachorro : "late", 
  gato : "mia",
  vaca : "muge",
}

enum UsuariosTipos {
  Administrador,
  Aluno,
  Professor, 
  Visitante,
}

function verificadorDeUsuarios(usuario: UsuariosTipos): void {
  if(usuario == UsuariosTipos.Administrador) {
    console.log("***Acesso Total liberado*** => Acesso Administrador")
  } else if(usuario == UsuariosTipos.Aluno) {
    console.log("***Acesso liberado para Aluno*** => Acesso Aluno")
  } else if(usuario == UsuariosTipos.Professor) {
    console.log("***Acesso liberado para Professor*** => Acesso Professor")
  } else {
    console.log("***Acesso liberado para Visitante*** => Seu acesso é restrito apenas para visualizar")
  }
}