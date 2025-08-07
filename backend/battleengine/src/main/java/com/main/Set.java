package com.main;

import java.util.List;

public class Set {

    private String specieString;
    private String abilityString;
    private List<String> moveStrings;
    private int[] tps;
    private int[] ups;


    public Set() {

    }
    

    // getters
    public String getSpeciesString() {
        return specieString;
    }
    public String getAbilityString() {
        return abilityString;
    }
    public List<String> getMoveStrings() {
        return moveStrings;
    }
    public int[] getTps() {
        return tps;
    }
    public int[] getUps() {
        return ups;
    }
}
