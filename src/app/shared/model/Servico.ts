import { Agendamento } from "./Agendamento";
import { Veiculo } from "./Veiculo";

export class Servico{
  public id: number | undefined;
  public tipo: String | undefined;
  public valor: Number | undefined;
  public veiculos: Veiculo[] | undefined;
  public agendamento: Agendamento | undefined;
  public agendamentoId: Agendamento | undefined;
  public situacao: String | undefined;
}
