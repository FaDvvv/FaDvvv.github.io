package com.main.Actions;

import com.main.Move;

public class MoveAction extends Action {

    private Move move;

    public MoveAction(Move move) {
        super("move", move.getPriority());
        this.move = move;
    }
    public MoveAction(MoveAction other) {
        super("move", other.move.getPriority());
        this.move = Move.copy(other.move);
    }

    // static copy is in Action.java

    // getters
    public Move getMove() {
        return move;
    }

    // setters
    public void setMove(Move move) {
        this.move = move;
    }
}
