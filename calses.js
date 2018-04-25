console.log("Hola Mundo");
//let hola= 'Hola'; //ya no se va a usar var nunk mas se usa let
//let hola:string 'Hola'; // redundante
//let hola:any
var hola; //pueden tener varios tipos
var adios = 'Adios';
hola = 'Adios';
// adios = 'adan'; no funciona
hola = 1;
hola = '123';
// Duck typing
// ayuda a saber si una variable es algo
var nombre = 'Adan';
var edad = 28;
var casado = false;
var FechaNacimiento = new Date();
//creando clase
var usuario = /** @class */ (function () {
    function usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return usuario;
}());
var Vicente = {
    nombre: 'Vicente',
    casado: true,
    edad: 22
};
var adan = new usuario('Adan', false, 28);
console.log(adan);
console.log(Vicente);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, // de ley se uas public
    casado, //si no se decalsra es como q si estuviera el constructor vacio
    edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return UsuarioDos;
}());
var adanDos = new UsuarioDos('Adn2', false, 29);
console.log(adanDos);
var UsuarioTres = /** @class */ (function () {
    function UsuarioTres(nombre, _casado, //por coveccion va a ser linkeado alos geters
    _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioTres.prototype, "casado", {
        get: function () {
            return this._casado; // solo para debuggear o tradformar atributos o validar
        },
        set: function (casado) {
            this._casado = casado; // solo para debuggear o tradformar atributos
        },
        enumerable: true,
        configurable: true
    });
    UsuarioTres.prototype.imprimirUsuario = function (saludo) {
        //Template Strings
        return saludo + ".Mi nombre es " + this.nombre + ", estoy casado " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioTres;
}());
var adanTres = new UsuarioTres('Adn44444', false, 33);
console.log(adanTres.nombre);
console.log(adanTres.casado);
console.log(adanTres.imprimirUsuario('Hola soy Goku'));
var carla = {
    nombre: 'Francisco',
    //casado: true, //parametro opcional del campo opcional
    edad: 10
};
console.log(carla);
