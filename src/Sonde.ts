import { Vehicule } from './Vehicule';

export class Sonde {
  preparerRecuperation(moduleMartien: Vehicule) {
    moduleMartien.activerRecuperation();
  }
}
