package com.main.GameState;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.main.Side.Side;

public class GameState {

    private double chance;
    private int chanceCounter;

    private List<Side> sides = new ArrayList<>();
    private HashMap<String, WholeFieldEffect> fieldEffects = new HashMap<>();
    private Weather weather;

    
    public GameState() {

    }
    public GameState(GameState other) {
        this.chance = other.chance;
        this.chanceCounter = other.chanceCounter;

        
        for (Side side : other.sides) {
            this.sides.add(Side.copy(side));
        }
        
        for (String key : other.fieldEffects.keySet()) {
            WholeFieldEffect fieldEffect = other.fieldEffects.get(key);
            this.fieldEffects.put(key, WholeFieldEffect.copy(fieldEffect));
        }

        this.weather = Weather.copy(other.weather);
    }

    public static GameState copy(GameState other) {
        if (other == null) return null;
        return new GameState(other);
    }


    
    // getters
    public double getChance() {
        return chance;
    }
    public int getChanceCounter() {
        return chanceCounter;
    }
    public List<Side> getSides() {
        return sides;
    }
    public Side getSide(int i) {
        return sides.get(i);
    }
    public boolean hasFieldEffect(String key) {
        return fieldEffects.get(key) != null;
    }
    public HashMap<String, WholeFieldEffect> getFieldEffects() {
        return fieldEffects;
    }
    public WholeFieldEffect getFieldEffects(String key) {
        return fieldEffects.get(key);
    } 
    public Weather getWeather() {
        return weather;
    }
    
    

    // setters
    public void setChance(double chance) {
        this.chance = chance;
    }
    public void setChanceCounter(int chanceCounter) {
        this.chanceCounter = chanceCounter;
    }
    public void setSides(List<Side> sides) {
        this.sides = sides;
    }
    public void setSide(int i, Side side) {
        this.sides.add(i, side);
    }
    public void setWeather(Weather weather) {
        this.weather = weather;
    }
} 
