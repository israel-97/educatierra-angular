import { Produto } from "./Produto"

export class User{
    public id: number
    public nomeCompleto: string
    public tipoUsuario: string
    public pontuacao: number
    public email: string
    public senha: string
    public usuario: string
    public foto: string
    public adminUsuario: boolean
    public meusProdutos: Produto[]
    public meusFavoritos: Produto[]
}
