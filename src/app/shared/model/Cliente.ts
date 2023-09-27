import { Agendamento } from "./Agendamento";
import { Veiculo } from "./Veiculo";

export class Cliente{
  public id: number | undefined;
  public nome: string | undefined;
  public email: string | undefined;
  public veiculos: Veiculo[] | undefined;
  public agendamentos: Agendamento[] | undefined;
}
