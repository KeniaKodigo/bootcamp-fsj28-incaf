
export function greeting(): string{
    return "Buenas noches";
}

export const sumar = (a:number, b:number):number => {
    return a + b
}

export function greeting2(name?:string){
    return `Hola desde typescript ${name ?? "visitante"}`
}


