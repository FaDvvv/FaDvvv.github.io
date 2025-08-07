package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Species;

public class WholeFieldEffectManager {

    private static Map<String, Species> fieldEffectMap = new HashMap<>();
    
    static {
        fieldEffectMap = JsonFileReader.readMap("wholeFieldEffects.json", Species.class);
    }

    private WholeFieldEffectManager () {}

    public static Species get(String s) {
        if (fieldEffectMap.get(s) == null) {System.err.println("Attempted to access null whole field effect \"" + s + "\"");}
        return fieldEffectMap.get(s);
    }
}
