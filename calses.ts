console.log("Hola Mundo");
//let hola= 'Hola'; //ya no se va a usar var nunk mas se usa let
//let hola:string 'Hola'; // redundante
//let hola:any
let hola:number | string | boolean| any; //pueden tener varios tipos
const adios = 'Adios';
hola = 'Adios';
// adios = 'adan'; no funciona
hola = 1;
hola = '123';
// Duck typing
// ayuda a saber si una variable es algo

let nombre:string='Adan';
let edad:number=28;
let casado:boolean=false;
let FechaNacimiento:Date = new Date();
//creando clase
class usuario {
    nombre:string; //por defecto es public
    private casado:boolean;
    protected edad: number;
    constructor (nombre:string,
                 casado:boolean,
                 edad:number){
        this.nombre = nombre;
        this.casado= casado;
        this.edad = edad;
    }
}
let Vicente ={
    nombre:'Vicente',
    casado:true,
    edad: 22
};
let adan: usuario = new usuario('Adan',false,28);
console.log(adan);
console.log(Vicente);

class UsuarioDos {
    constructor( public nombre: string, // de ley se uas public
                 private casado: boolean, //si no se decalsra es como q si estuviera el constructor vacio
                 protected edad: number){

    }
}
let adanDos =new UsuarioDos('Adn2',false, 29);
console.log(adanDos);

class UsuarioTres {
    constructor( public nombre: string,
                 private _casado: boolean, //por coveccion va a ser linkeado alos geters
                 protected _edad: number){
    }
    get casado(){
        return this._casado; // solo para debuggear o tradformar atributos o validar
    }
    set casado(casado:boolean){
        this._casado=casado; // solo para debuggear o tradformar atributos
    }
    imprimirUsuario(saludo:string){ //publica void
        //Template Strings
        return `${saludo}.Mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this._edad}`;
    }
}
let adanTres =new UsuarioTres('Adn44444',false, 33);
console.log(adanTres.nombre);
console.log(adanTres.casado);
console.log(adanTres.imprimirUsuario('Hola soy Goku'));

let carla:UsuarioCuatro= {
    nombre: 'Francisco',
    //casado: true, //parametro opcional del campo opcional
    edad:10
};
interface UsuarioCuatro{
    nombre: string;
    casado?:boolean; //campo opcional
    edad: number;
}
console.log(carla);