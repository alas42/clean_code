import { MouvementNord } from '../src/Direction'
import { Helicoptere } from '../src/Helicoptere'
import { Vehicule } from '../src/Vehicule'
import { Position3D } from '../src/Position'
import { Rover } from '../src/Rover'
import { Sonde } from '../src/Sonde'

describe('Sonde', () => {
  it('Le rover doit être récupéré', () => {
    // GIVEN
    const perseverance: Vehicule = new Rover(new MouvementNord(), new Position3D(4, 4, 0));
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(perseverance);

    // THEN
    expect(perseverance.isPretPourRecuperation()).toBeTruthy();
    expect(new Position3D(4, 4, 0)).toStrictEqual(perseverance.getPosition())
  })

  it('L’hélicoptère doit être récupéré', () => {
    // GIVEN
    const ingenuity: Vehicule = new Helicoptere(new MouvementNord(), new Position3D(4, 4, 50));
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(ingenuity);

    // THEN
    expect(ingenuity.isPretPourRecuperation()).toBeTruthy();
    expect(new Position3D(4, 4, 0)).toStrictEqual(ingenuity.getPosition())
  })
})
