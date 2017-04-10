class Utils {
    static separadorLog(title?:string, separador:string='-', repetir= 30){
        let charact = separador.trim();
        let result:string= '';
        
        if (title) console.log(title)
        for (let i= 0; i <= repetir - 1; i++) {
            result += charact;
        }

        console.log(result);
    }

    static logger(val:any, title?:string){
        let text = '';
        if(title){
          text += '- ';
          text += title  
          text += ' -';
        } 
        console.log(val, text);
    }

    static logueante<T>(item:T):T{
        console.log(item);
        return item;
    }

    static saludador(name:string, ...saludos:string[]){
        let result = `${name} ${saludos.join(" ")}`;
        console.log(result);
    }
}

export default Utils