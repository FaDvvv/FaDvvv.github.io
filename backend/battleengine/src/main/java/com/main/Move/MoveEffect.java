package com.main.Move;

public class MoveEffect {



    public MoveEffect() {

    }
    public MoveEffect(MoveEffect other) {

    }

    public static MoveEffect copy(MoveEffect other) {
        if (other == null) return null;
        return new MoveEffect();
    }
}
