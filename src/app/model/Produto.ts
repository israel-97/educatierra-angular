import { Produto } from "./Categoria"



export class Categoria{
    public id:number
    public materia:string
    public descricao:string
    public produto: Produto[]
}