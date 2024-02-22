import { Position3D } from "./Position";

export interface Mouvement {
  avancer(p: Position3D): Position3D;
  reculer(p: Position3D): Position3D;
}

export class MouvementNord implements Mouvement {
  avancer(position: Position3D): Position3D {
    return new Position3D(position.x, position.y + 1, position.z);
  }
  reculer(position: Position3D): Position3D {
    return new Position3D(position.x, position.y - 1, position.z);
  }
}
export class MouvementSud implements Mouvement {
  avancer(position: Position3D): Position3D {
    return new Position3D(position.x, position.y - 1, position.z);
  }
  reculer(position: Position3D): Position3D {
    return new Position3D(position.x, position.y + 1, position.z);
  }
}
export class MouvementOuest implements Mouvement {
  avancer(position: Position3D): Position3D {
    return new Position3D(position.x -1, position.y, position.z);
  }
  reculer(position: Position3D): Position3D {
    return new Position3D(position.x +1, position.y, position.z);
  }
}
export class MouvementEst implements Mouvement {
  avancer(position: Position3D): Position3D {
    return new Position3D(position.x+1, position.y, position.z);
  }
  reculer(position: Position3D): Position3D {
    return new Position3D(position.x-1, position.y, position.z);
  }
}

