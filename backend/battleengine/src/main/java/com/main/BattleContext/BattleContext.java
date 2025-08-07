package com.main.BattleContext;

import java.util.HashMap;
import java.util.List;

import com.main.GameState;
import com.main.Side;
import com.main.Weather;
import com.main.WholeFieldEffect;

public class BattleContext {
    

    private GameState gameState;
    private List<Side> sides;
    private HashMap<String, WholeFieldEffect> fieldEffects = new HashMap<>();
    private Weather weather;

    private BattleParticipant user;
    private BattleParticipant enemy;


    public BattleContext(GameState gameState, int i) {
        if (gameState == null) System.err.println("Attempted to create battle context with null gameState");
        if (i != 0 && i != 1) System.err.println("Attempted to create a battle context with i: " + i);
        
        this.gameState = gameState;

        this.fieldEffects = gameState.getFieldEffects();
        this.weather = gameState.getWeather();

        this.user = new BattleParticipant(gameState, i);
        this.enemy = new BattleParticipant(gameState, 1-i);
    }
}
