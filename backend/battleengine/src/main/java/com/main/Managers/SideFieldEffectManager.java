package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Species;

public class SideFieldEffectManager {

    private static Map<String, Species> fieldEffectMap = new HashMap<>();
    
    static {
        fieldEffectMap = JsonFileReader.readMap("sideFieldEffects.json", Species.class);
    }

    private SideFieldEffectManager () {}

    public static Species get(String s) {
        if (fieldEffectMap.get(s) == null) {System.err.println("Attempted to access null side field effect \"" + s + "\"");}
        return fieldEffectMap.get(s);
    }
}
