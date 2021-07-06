import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produto{

    public id: number
    public descricao: string
    public linkImagem: string
    public linkAcesso: string
    public tipoProduto: string
    public categoria: Categoria
    public usuario: User
    public favoritadoPor: User[]
    public statusTermo: boolean
}