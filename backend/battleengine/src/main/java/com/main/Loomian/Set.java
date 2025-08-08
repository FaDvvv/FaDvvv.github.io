package com.main.Loomian;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Set {

    private String species;
    private String ability;
    private String item;
    private List<String> personality;
    private List<String> moves;
    private int[] tps;
    private int[] ups;


    public Set() {

    }
    public Set(Set other) {
        this.species = other.species;
        this.ability = other.ability;
        this.item = other.item;
        this.personality = new ArrayList<>(other.personality);
        this.moves = new ArrayList<>(other.moves);
        this.tps = Arrays.copyOf(other.tps, 7);
        this.ups = Arrays.copyOf(other.ups, 7);
    }

    public static Set copy(Set other) {
        if (other == null) return null;
        return new Set(other);
    }
    

    // getters
    public String getSpeciesString() {
        return species;
    }
    public String getAbilityString() {
        return ability;
    }
    public String getItemString() {
        return item;
    }
    public List<String> getPersonalityStrings() {
        return personality;
    }
    public List<String> getMoveStrings() {
        return moves;
    }
    public int[] getTps() {
        return tps;
    }
    public int[] getUps() {
        return ups;
    }
}
