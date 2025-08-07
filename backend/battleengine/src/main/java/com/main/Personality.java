package com.main;

public class Personality {



    public Personality() {

    }
    public Personality(Personality other) {

    }

    public static Personality copy(Personality other) {
        if (other == null) return null;
        return new Personality(other);
    }
}
