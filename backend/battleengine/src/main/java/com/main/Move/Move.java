package com.main.Move;

import java.util.ArrayList;
import java.util.List;

public class Move {
    private String name;
    private List<String> types;
    private String category; // melee, ranged, support
    private String style; // bite, claw, strike etc
    private int accuracy;
    private int energyCost;
    private int power;
    private int priority;

    private MoveEffect userEffects;
    private MoveEffect enemyEffects;


    public Move() {

    }
    public Move(Move other) {
        this.name = other.name;
        this.types = new ArrayList<>(other.types);
        this.category = other.category;
        this.style = other.style;
        this.accuracy = other.accuracy;
        this.energyCost = other.energyCost;
        this.power = other.power;

        this.userEffects = MoveEffect.copy(other.userEffects);
        this.enemyEffects = MoveEffect.copy(other.enemyEffects);
    }

    public static Move copy(Move other) {
        if (other == null) return null;
        return new Move(other);
    }


    // getters
    public String getName() {
        return name;
    }
    public List<String> getTypes() {
        return types;
    }
    public String getCategory() {
        return category;
    }
    public String getStyle() {
        return style;
    }
    public int getAccuracy() {
        return accuracy;
    }
    public int getEnergyCost() {
        return energyCost;
    }
    public int getPower() {
        return power;
    }
    public int getPriority() {
        return priority;
    }

    

    // setters
    public void setName(String name) {
        this.name = name;
    }
    public void setTypes(List<String> types) {
        this.types = types;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public void setStyle(String style) {
        this.style = style;
    }
    public void setAccuracy(int accuracy) {
        this.accuracy = accuracy;
    }
    public void setEnergyCost(int energyCost) {
        this.energyCost = energyCost;
    }
    public void setPower(int power) {
        this.power = power;
    }
    public void setPriority(int priority) {
        this.priority = priority;
    }
}
