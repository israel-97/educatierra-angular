import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produto{

    private id: number
    private nome: string
    private descricao:string
    private linkImagem:string
    private linkAcesso:string
    private tipoProduto: string
    private categoria: Categoria
    private usuario: User
    private favoritadoPor: User[]
    private statusTermo: boolean

}