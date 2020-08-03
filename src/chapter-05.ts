type Color = 'Black' | 'White';
type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: ChessFile, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    };
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: ChessFile, rank: Rank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {
  canMoveTo(position: Position) {
    return true;
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position) {
    return true;
  }
}
class Knight extends Piece {
  canMoveTo(position: Position) {
    return true;
  }
}
class Rook extends Piece {
  canMoveTo(position: Position) {
    return true;
  }
}
class Pawn extends Piece {
  canMoveTo(position: Position) {
    return true;
  }
}

class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      // Kings
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // Queens
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8)
    ];
  }
}

// Interfaces

type Food = {
  calories: number;
  tasty: boolean;
};
type Sushi = Food & {
  salty: boolean;
};
type Cake = Food & {
  sweet: boolean;
};

interface Food1 {
  calories: number;
  tasty: boolean;
}
interface Sushi1 extends Food1 {
  salty: boolean;
}
