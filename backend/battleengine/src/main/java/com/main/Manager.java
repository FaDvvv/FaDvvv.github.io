package com.main;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.main.GameState.WholeFieldEffect;
import com.main.Loomian.Ability;
import com.main.Loomian.Item;
import com.main.Loomian.MinorStatus;
import com.main.Loomian.Set;
import com.main.Loomian.Species;
import com.main.Loomian.Status;
import com.main.Move.Move;
import com.main.Side.SideFieldEffect;

public class Manager {

    
    private static Map<String, Species> speciesMap = new HashMap<>(); 
    private static Map<String, Move> moveMap = new HashMap<>(); 
    private static Map<String, Item> itemMap = new HashMap<>(); 
    private static Map<String, Ability> abilityMap = new HashMap<>(); 
    private static Map<String, Status> statusMap = new HashMap<>(); 
    private static Map<String, MinorStatus> minorStatusMap = new HashMap<>(); 
    private static Map<String, WholeFieldEffect> wholeFieldEffectMap = new HashMap<>(); 
    private static Map<String, SideFieldEffect> sideFieldEffectMap = new HashMap<>(); 

    private static Map<String, Map<String, Set>> setMap = new HashMap<>();
    private static Map<String, List<String>> personalitiesMap = new HashMap<>();


    static {
        speciesMap           = JsonFileReader.readMap("species.json", Species.class);
        moveMap              = JsonFileReader.readMap("moves.json", Move.class);
        itemMap              = JsonFileReader.readMap("items.json", Item.class);
        abilityMap           = JsonFileReader.readMap("abilities.json", Ability.class);
        statusMap            = JsonFileReader.readMap("statuses.json", Status.class);
        minorStatusMap       = JsonFileReader.readMap("minorStatuses.json", MinorStatus.class);
        wholeFieldEffectMap  = JsonFileReader.readMap("wholeFieldEffects.json", WholeFieldEffect.class);
        sideFieldEffectMap   = JsonFileReader.readMap("sideFieldEffects.json", SideFieldEffect.class);

        personalitiesMap     = JsonFileReader.readNestedList("personalities.json", String.class);

        setMap               = JsonFileReader.readNestedMap("sets.json", Set.class);
        
    }


    private Manager() {}


    public static void error(String map, String key) {
        throw new RuntimeException("Attempted to access \"" + key + "\" from " + map + "Map");
    }
    public static Species getSpecies(String key) {
        if (speciesMap.get(key) == null) error("species", key);
        return Species.copy(speciesMap.get(key));
    }
    public static Move getMove(String key) {
        if (moveMap.get(key) == null) error("moves", key);
        return Move.copy(moveMap.get(key));
    }
    public static Item getItem(String key) {
        if (itemMap.get(key) == null) error("items", key);
        return Item.copy(itemMap.get(key));
    }
    public static Ability getAbility(String key) {
        if (abilityMap.get(key) == null) error("abilities", key);
        return Ability.copy(abilityMap.get(key));
    }
    public static Status getStatus(String key) {
        if (statusMap.get(key) == null) error("statuses", key);
        return Status.copy(statusMap.get(key));
    }
    public static MinorStatus getMinorStatus(String key) {
        if (minorStatusMap.get(key) == null) error("minorStatuses", key);
        return MinorStatus.copy(minorStatusMap.get(key));
    }
    public static WholeFieldEffect getWholeFieldEffect(String key) {
        if (wholeFieldEffectMap.get(key) == null) error("wholeFieldEffects", key);
        return WholeFieldEffect.copy(wholeFieldEffectMap.get(key));
    }
    public static SideFieldEffect getSideFieldEffect(String key) {
        if (sideFieldEffectMap.get(key) == null) error("SideFieldEffects", key);
        return SideFieldEffect.copy(sideFieldEffectMap.get(key));
    }

    public static List<String> getPersonalities(String key) {
        if (personalitiesMap.get(key) == null) throw new RuntimeException("attempted to get list of personalities of type \"" + key + "\"");
        return new ArrayList<>(personalitiesMap.get(key));
    }

    public static Set getSet(String speciesKey, String setKey) {
        if (setMap.get(speciesKey) == null) throw new RuntimeException("Species \"" + speciesKey + "\" does not exist in setMap");
        if (setMap.get(speciesKey).get(setKey) == null) throw new RuntimeException("Set \"" + setKey + "\" does not exist in species \"" + speciesKey + "\" in setMap");
        return Set.copy(setMap.get(speciesKey).get(setKey));
    }
}
