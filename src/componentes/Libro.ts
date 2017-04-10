class Libro {
    private paginas:number;
    private title:string;
    
    constructor(title?:string, paginas?:number){
        this.paginas = paginas;
        this.title = title;
    }

    toString(){
        return `${this.title} ${this.paginas}`;
    }
}

export default Libro