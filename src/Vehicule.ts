import { Mouvement } from "./Direction";
import { Position3D } from "./Position";

export abstract class Vehicule  {
	_isPretPourRecuperation = false
	_position: Position3D;
	_mouvement: Mouvement;
	
	constructor(
	  readonly mouvement: Mouvement,
	  readonly position: Position3D,
	  ) {
		this._position = position;
		this._mouvement = mouvement;
	}

	getPosition(): Position3D {
	  return this._position;
	}

	avancer(): void {
		this._position = this._mouvement.avancer(this._position)
	}

	reculer(): void {
		this._position = this._mouvement.reculer(this._position)
	}

	isPretPourRecuperation(): boolean {
		return this._isPretPourRecuperation
	}

	abstract activerRecuperation(): void
}
