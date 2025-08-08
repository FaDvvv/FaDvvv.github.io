package com.main.Loomian;

public class Ability {

    private String name;

    public Ability() {

    }
    public Ability(Ability other) {
        this.name = other.name;
    }

    public static Ability copy(Ability other) {
        if (other == null) return null;
        return new Ability(other);
    }


    // getters
    public String getName() {
        return name;
    }



    // setters
    public void setName(String name) {
        this.name = name;
    }
}
