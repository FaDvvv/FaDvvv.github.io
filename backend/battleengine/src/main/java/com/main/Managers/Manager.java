package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.Ability;
import com.main.Item;
import com.main.JsonFileReader;
import com.main.MinorStatus;
import com.main.SideFieldEffect;
import com.main.Species;
import com.main.Status;
import com.main.WholeFieldEffect;
import com.main.Move.Move;

public class Manager {

    
    private static Map<String, Species> speciesMap = new HashMap<>(); 
    private static Map<String, Move> moveMap = new HashMap<>(); 
    private static Map<String, Item> itemMap = new HashMap<>(); 
    private static Map<String, Ability> abilityMap = new HashMap<>(); 
    private static Map<String, Status> statusMap = new HashMap<>(); 
    private static Map<String, MinorStatus> minorStatusMap = new HashMap<>(); 
    private static Map<String, WholeFieldEffect> wholeFieldEffectMap = new HashMap<>(); 
    private static Map<String, SideFieldEffect> sideFieldEffectMap = new HashMap<>(); 


    static {
        speciesMap           = JsonFileReader.readMap("species.json", Species.class);
        moveMap              = JsonFileReader.readMap("moves.json", Move.class);
        itemMap              = JsonFileReader.readMap("items.json", Item.class);
        abilityMap           = JsonFileReader.readMap("abilities.json", Ability.class);
        statusMap             = JsonFileReader.readMap("statuses.json", Status.class);
        minorStatusMap       = JsonFileReader.readMap("minorStatuses.json", MinorStatus.class);
        wholeFieldEffectMap  = JsonFileReader.readMap("wholeFieldEffects.json", WholeFieldEffect.class);
        sideFieldEffectMap   = JsonFileReader.readMap("sideFieldEffects.json", SideFieldEffect.class);
    }


    public void error(String map, String key) {
        System.err.println("Attempted to access \"" + key + "\" from " + map + "Map");
    }
    public Species getSpecies(String key) {
        if (speciesMap.get(key) == null) error("species", key);
        return speciesMap.get(key);
    }
    public Move getMove(String key) {
        if (moveMap.get(key) == null) error("moves", key);
        return moveMap.get(key);
    }
    public Item getItem(String key) {
        if (itemMap.get(key) == null) error("items", key);
        return itemMap.get(key);
    }
    public Ability getAbiltiy(String key) {
        if (abilityMap.get(key) == null) error("abilities", key);
        return abilityMap.get(key);
    }
    public Status getStatus(String key) {
        if (statusMap.get(key) == null) error("statuses", key);
        return statusMap.get(key);
    }
    public MinorStatus getMinorStatus(String key) {
        if (minorStatusMap.get(key) == null) error("minorStatuses", key);
        return minorStatusMap.get(key);
    }
    public WholeFieldEffect getWholeFieldEffect(String key) {
        if (wholeFieldEffectMap.get(key) == null) error("wholeFieldEffects", key);
        return wholeFieldEffectMap.get(key);
    }
    public SideFieldEffect getSideFieldEffect(String key) {
        if (sideFieldEffectMap.get(key) == null) error("SideFieldEffects", key);
        return sideFieldEffectMap.get(key);
    }
}
