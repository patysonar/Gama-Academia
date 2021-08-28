
class Usuario {
    name = "";
    cpf = "";
    email = "";
    telefone = "";
    login = "";
    password = 0;
    
    
    constructor(Usuario /*name,cpf,email,telefone,login,password,soldQuantity*/ ) {
        this.name = Usuario.name;
        this.cpf = Usuario.cpf;
        this.email = Usuario.email;
        this.telefone=Usuario.telefone;
        this.login = Usuario.login;
        this.password =  Usuario.password;
        this.soldQuantity = usuario.soldQuantity || 0
        
    }
 }

    const cadastroUsuario = {

    name: "Paty",
    cpf: 12345645698,
    email: "paty@teste.com.br",
    telefone: "71999823654",
    login: "paty",
    password: 123456,
    
   
};

console.log(cadastroUsuario)
console.log("Cadastro realizado com sucesso")


const loginUsuario = {

    login: "paty",
    password: 123456,
    
   
};

//console.log(cadastroUsuario)
//console.log("Cadastro realizado com sucesso")

console.log(loginUsuario)
console.log("Usuario logado com sucesso")


 module.exports = Usuario

 