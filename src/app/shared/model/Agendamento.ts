import { Cliente } from "./Cliente";
import { Servico } from "./Servico";

export class Agendamento{
  public id: Number | undefined;
  public data: String | undefined;
  public cliente: Cliente | undefined;
  public clienteId: Cliente | undefined;
  public servicos: Servico[] | undefined;
}
