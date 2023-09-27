import { Cliente } from "./Cliente";
import { Servico } from "./Servico";

export class Veiculo{
  public id: number | undefined;
  public marca: String | undefined;
  public modelo: String | undefined;
  public ano: number | undefined;
  public placa: String | undefined;
  public cliente: Cliente | undefined;
  public clienteId: number | undefined;
  public servicos: Servico[] | undefined;
}
