package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Species;

public class SpeciesManager {

    private static Map<String, Species> speciesMap = new HashMap<>();
    
    static {
        speciesMap = JsonFileReader.readMap("species.json", Species.class);
    }

    private SpeciesManager () {}

    public static Species get(String s) {
        if (speciesMap.get(s) == null) {System.err.println("Attempted to access null loomian \"" + s + "\"");}
        return speciesMap.get(s);
    }
}
