package com.main;

public class Status {

    private String name;

    public Status() {

    }
    public Status(Status other) {
        this.name = other.name;
    }

    public static Status copy(Status other) {
        if (other == null) return null;
        return new Status(other);
    }


    // getter
    public String getName() {
        return name;
    }


    // setter
    public void setName(String name) {
        this.name = name;
    }
}
