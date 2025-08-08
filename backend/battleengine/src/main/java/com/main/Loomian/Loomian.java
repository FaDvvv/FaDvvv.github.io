package com.main.Loomian;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import com.main.Manager;
import com.main.Actions.Action;
import com.main.Move.Move;

public class Loomian extends Species {
    private boolean hasFainted;
    private boolean hasFaintedThisTurn;
    private boolean isBenched; // if it confirmed to not be in play
    private boolean isShown; // if it has hit the battlefield at least once
    
    private Action action;

    private List<Ability> abilities = new ArrayList<>(); // list of possible current abilities
    private Ability ability;
    private Item item;
    private Personality personality;
    private Status status;
    private HashMap<String, MinorStatus> minorStatuses = new HashMap<>();
    private List<Move> moves = new ArrayList<>();

    private int[] currentStats = new int[7];
    private int[] tps = new int[7];
    private int[] ups = new int[7];
    private int[] statModifiers = new int[7]; // mAtk, mDef, rAtk, rDef, Spd, Acc, Evs

    private int currentHealth;
    private int currentEnergy; 


    public Loomian() {

    }
    public Loomian(Set set) {
        super(Manager.getSpecies(set.getSpeciesString()));
        this.abilities = new ArrayList<>(List.of(Manager.getAbility(set.getAbilityString())));
        this.item = Manager.getItem(set.getItemString());
        this.personality = new Personality(set.getPersonalityStrings());
        for (String moveString : set.getMoveStrings()) this.moves.add(Manager.getMove(moveString));
    }
    public Loomian(Loomian other) {
        super(other);
        this.hasFainted = other.hasFainted;
        this.hasFaintedThisTurn = other.hasFaintedThisTurn;
        this.isBenched = other.isBenched;
        this.isShown = other.isShown;

        this.action = Action.copy(other.action);

        for (Ability ability : other.abilities) this.abilities.add(Ability.copy(ability));
        this.ability = Ability.copy(other.ability);
        this.item = Item.copy(other.item);
        this.personality = Personality.copy(other.personality);
        this.status = Status.copy(other.status);

        for (String key : other.minorStatuses.keySet()) {
            MinorStatus minorStatus = other.minorStatuses.get(key);
            this.minorStatuses.put(key, MinorStatus.copy(minorStatus));
        }

        for (Move move : other.moves) {
            this.moves.add(Move.copy(move));
        }

        this.currentStats = Arrays.copyOf(other.currentStats, 7);
        this.tps = Arrays.copyOf(other.tps, 7);
        this.ups = Arrays.copyOf(other.ups, 7);
        this.statModifiers = Arrays.copyOf(other.statModifiers, 7);

        this.currentHealth = other.currentHealth;
        this.currentEnergy = other.currentEnergy; 
    }

    public static Loomian copy(Loomian other) {
        if (other == null) return null;
        return new Loomian(other);
    }


    // getters
    public Action getAction() {
        return action;
    }

    public Ability getAbility() {
        return ability;
    }
    public Item getItem() {
        return item;
    }
    public Personality getPersonality() {
        return personality;
    }
    public Status getStatus() {
        return status;
    }
    public HashMap<String, MinorStatus> getMinorStatuses() {
        return minorStatuses;
    }
    public MinorStatus getMinorStatus(String key) {
        if (!hasMinorStatus(key)) System.err.println("attempted to access null minorStatus");
        return minorStatuses.get(key);
    }




    // setters




    // is
    public boolean isBenched() {
        return isBenched;
    }
    public boolean isShown() {
        return isShown;
    }
    public boolean isPoisoned() {   return hasStatus("poison") || hasStatus("bad poison"); }
    public boolean isParalysed() {  return hasStatus("paralysis"); }
    public boolean isBurnt() {      return hasStatus("burn"); }
    public boolean isFrostbitten() {return hasStatus("frostbite"); }
    public boolean isAsleep() {     return hasStatus("sleep") || hasStatus("slumber"); }

    public boolean isDazed() {      return hasMinorStatus("daze");}
    public boolean isProvoked() {   return hasMinorStatus("provoke");}
    public boolean isTeased() {     return hasMinorStatus("tease");}




    // has
    public boolean hasFainted() {
        return hasFainted;
    } 
    public boolean hasFaintedThisTurn() {
        return hasFaintedThisTurn;
    }
    public boolean hasStatus() {
        return status != null;
    }
    public boolean hasStatus(String s) {
        if (!hasStatus()) return false;
        return status.getName().equals(s);
    }
    public boolean hasMinorStatus(String key) {
        return minorStatuses.get(key) != null;
    }
}
