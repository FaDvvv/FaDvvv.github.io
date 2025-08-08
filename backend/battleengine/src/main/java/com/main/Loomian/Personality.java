package com.main.Loomian;

import java.util.Arrays;
import java.util.List;

import com.main.Manager;

public class Personality {

    private double[] modifiers = {1,1,1,1,1,1,1};

    public Personality() {

    }
    public Personality(List<String> personalityStrings) {
        List<String> posPersonality = Manager.getPersonalities("pos");
        List<String> negPersonality = Manager.getPersonalities("neg");
        
        for (String string : personalityStrings) {
            double modifier = string.contains("very") ? 0.2 : 0.1;
            for (int i = 0; i < 7; i ++) {
                if (string.contains(posPersonality.get(i))) {
                    modifiers[i] = 1 + modifier;
                } 
                if (string.contains(negPersonality.get(i))) {
                    modifiers[i] = 1 - modifier;
                }
            }
        }
    }
    public Personality(Personality other) {
        this.modifiers = Arrays.copyOf(modifiers, 7);
    }

    public static Personality copy(Personality other) {
        if (other == null) return null;
        return new Personality(other);
    }
}
