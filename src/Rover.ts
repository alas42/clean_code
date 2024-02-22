import { Mouvement } from './Direction'
import { Position3D } from './Position'
import { Vehicule } from './Vehicule';

export class Rover extends Vehicule {
  constructor(mouvement: Mouvement, position: Position3D) {
    super(mouvement, position)
  }

  override activerRecuperation() {
      this._isPretPourRecuperation = true
  }
}
