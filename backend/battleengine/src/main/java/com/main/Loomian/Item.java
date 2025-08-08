package com.main;

public class Item {

    private String name;

    public Item() {

    }
    public Item(Item other) {
        this.name = other.name;
    }

    public static Item copy(Item other) {
        if (other == null) return null;
        return new Item(other);
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
