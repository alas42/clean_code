import { MouvementEst, MouvementHaut, MouvementNord, MouvementOuest, MouvementSud } from '../src/Direction'
import { Helicoptere } from '../src/Helicoptere'
import { Vehicule } from '../src/Vehicule'
import { Position3D } from '../src/Position'

describe('Hélicoptère', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementNord(), new Position3D(4, 4, 0));

    // THEN
    expect(new Position3D(4, 4, 0)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementNord(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position3D(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementSud(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position3D(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementOuest(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position3D(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementNord(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position3D(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementSud(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position3D(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementOuest(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position3D(5, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementEst(), new Position3D(4, 4, 1));

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position3D(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit monter d’une case vers le haut', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementNord(), new Position3D(4, 4, 0));

    // WHEN
    helicoptere.monter();

    // THEN
    expect(new Position3D(4, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit descendre d’une case vers le bas', () => {
    // GIVEN
    const helicoptere: Vehicule = new Helicoptere(new MouvementSud(), new Position3D(4, 4, 3));

    // WHEN
    helicoptere.descendre();

    // THEN
    expect(new Position3D(4, 4, 2)).toStrictEqual(helicoptere.getPosition());
  })
})
