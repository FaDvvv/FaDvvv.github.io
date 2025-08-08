package com.main.Loomian;

public class MinorStatus {

    private String name;

    public MinorStatus() {

    }
    public MinorStatus(MinorStatus other) {
        this.name = other.name;
    }

    public static MinorStatus copy(MinorStatus other) {
        if (other == null) return null;
        return new MinorStatus(other);
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
