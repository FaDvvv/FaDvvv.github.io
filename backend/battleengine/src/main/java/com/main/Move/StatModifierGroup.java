package com.main.Move;

import java.util.Arrays;

public class StatModifierGroup {

    private int[] statModifiers = new int[7];
    private double chance;
    private boolean applyAll;


    public StatModifierGroup() {

    }
    public StatModifierGroup(StatModifierGroup other) {
        this.statModifiers = Arrays.copyOf(other.statModifiers, 7);
        this.chance = other.chance;
        this.applyAll = other.applyAll;
    } 

    public static StatModifierGroup copy(StatModifierGroup other) {
        if (other == null) return null;
        return new StatModifierGroup(other);
    }


    // getters
    public int[] getStatModifiers() {
        return statModifiers;
    }
    public double getChance() {
        return chance;
    }
    public boolean applyAll() {
        return applyAll;
    }


    // setters
    public void getStatModifiers(int[] statModifiers) {
        this.statModifiers = statModifiers;
    }
    public void getChance(double chance) {
        this.chance = chance;
    }
    public void applyAll(boolean applyAll) {
        this.applyAll = applyAll;
    }
}
