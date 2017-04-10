import Persona from './componentes/Persona';
import Libro from './componentes/Libro';
import Utils from './componentes/Utils';

let perso = new Persona('Gonza', 33);

let libro1 = new Libro('La divina comedia', 345);
Utils.separadorLog();
Utils.separadorLog('Clases');
console.log(perso.toString());
console.log(libro1.toString());
Utils.separadorLog();



Utils.separadorLog('Descontrucción de variables');
let nombre = perso.name;
Utils.logger(nombre, 'Forma normal');

//Se le asigna a loco el valor de name
// Para age se mantiene el mismo nombre
let {name:loco, age} = perso;
Utils.logger(loco, 'Forma descontructiva');
Utils.logger(age, 'Se mantiene nombre');

let foo = ["uno", "dos", "tres"];
let [uno, dos, tres] = foo;

Utils.separadorLog('Generics');
let miNumber:number = Utils.logueante<number>(8);

//Se puede ommitir (Utils.logueante<string>) el tipo de valor que recibe la función
// se infiere por el tipo de variable en la que se recibe el valor
let miString:string = Utils.logueante('Texto inferido');

Utils.separadorLog('Rest parametros');

Utils.saludador('Gonza', 'como va', 'mi ritmo', 'mulata');


