import { Mouvement } from './Direction'
import { Position3D } from './Position';
import { Vehicule } from './Vehicule';

export class Helicoptere extends Vehicule {
  constructor(
    mouvement: Mouvement,
    position: Position3D,
    ) {
      super(mouvement, position)
  }

  activerRecuperation(): void {
    this.atterir()
    this._isPretPourRecuperation = true
  }

  private atterir() {
    [...Array(this._position.z)]
      .forEach(() => { this.descendre(); });
  }

  monter() {
    this._position = new Position3D(this._position.x, this._position.y, this._position.z + 1)
  }

  descendre() {
    this._position = new Position3D(this._position.x, this._position.y, this._position.z - 1)
  }
}
