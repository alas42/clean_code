import { MouvementEst, MouvementNord, MouvementOuest, MouvementSud } from '../src/Direction'
import { Vehicule } from '../src/Vehicule'
import { Position3D } from '../src/Position'
import { Rover } from '../src/Rover'

describe('Rover', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const rover: Vehicule = new Rover(new MouvementNord(), new Position3D(4, 4, 0));

    // THEN
    expect(new Position3D(4, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementNord(), new Position3D(4, 4, 0));

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position3D(4, 5, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementSud(), new Position3D(4, 4, 0));

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position3D(4, 3, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementOuest(), new Position3D(4, 4, 0));

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position3D(3, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers l’est si tourné vers l’est', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementEst(), new Position3D(4, 4, 0));

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position3D(5, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementNord(), new Position3D(4, 4, 0));

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position3D(4, 3, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementSud(), new Position3D(4, 4, 0));

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position3D(4, 5, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementOuest(), new Position3D(4, 4, 0));

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position3D(5, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const rover: Vehicule = new Rover(new MouvementEst(), new Position3D(4, 4, 0));

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position3D(3, 4, 0)).toStrictEqual(rover.getPosition());
  })
})
