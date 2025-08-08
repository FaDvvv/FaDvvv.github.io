package com.main.Loomian;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Species {
    protected String name;
    protected int height;
    protected int weight;
    protected List<String> baseAbilities = new ArrayList<>();
    protected List<String> baseTypes = new ArrayList<>();
    protected int[] baseStats = new int[7];


    public Species() {

    }
    public Species(Species other) {
        this.name = other.name;
        this.height = other.height;
        this.weight = other.weight;
        this.baseAbilities = new ArrayList<>(other.baseAbilities);
        this.baseTypes = new ArrayList<>(other.baseTypes);
        this.baseStats = Arrays.copyOf(other.baseStats, 7);
    }

    public static Species copy(Species other) {
        if (other == null) return null;
        return new Species(other);
    }


    // getters
    public String getName() {
        return name;
    }
    public int getHeight() {
        return height;
    }
    public int getWeight() {
        return weight;
    }
    public List<String> getBaseAbilities() {
        return baseAbilities;
    }
    public List<String> getBaseTypes() {
        return baseTypes;
    }
    public int[] getBaseStats() {
        return baseStats;
    }
}
