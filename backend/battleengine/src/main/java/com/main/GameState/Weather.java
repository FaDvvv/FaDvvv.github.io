package com.main.GameState;

public class Weather {

    private String name;

    public Weather() {

    }
    public Weather(Weather other) {
        this.name = other.name;
    }

    public static Weather copy (Weather other) {
        if (other == null) return null;
        return new Weather(other);
    }
}
