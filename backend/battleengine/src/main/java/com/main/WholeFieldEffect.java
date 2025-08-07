package com.main;

public class WholeFieldEffect {

    private String name;

    public WholeFieldEffect() {

    }
    public WholeFieldEffect(WholeFieldEffect other) {
        this.name = other.name;
    }   

    public static WholeFieldEffect copy(WholeFieldEffect other) {
        if (other == null) return null;
        return new WholeFieldEffect(other);
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
