package com.main;

public class SideFieldEffect {

    private String name;

    public SideFieldEffect() {

    }
    public SideFieldEffect(SideFieldEffect other) {
        this.name = other.name;
    }   

    public static SideFieldEffect copy(SideFieldEffect other) {
        if (other == null) return null;
        return new SideFieldEffect(other);
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
