package com.main.BattleContext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.main.GameState;
import com.main.Loomian;
import com.main.Side;
import com.main.SideFieldEffect;
import com.main.Weather;
import com.main.WholeFieldEffect;

public class BattleParticipant {

    private GameState gameState;
    private HashMap<String, WholeFieldEffect> fieldEffects = new HashMap<>();
    private Weather weather;

    private Side side;
    private Loomian active;
    private List<Loomian> party = new ArrayList<>();
    private HashMap<String, SideFieldEffect> sideFieldEffects = new HashMap<>();

    private BattleParticipant enemy;


    public BattleParticipant(GameState gameState, int i) {
        this.gameState = gameState;

        this.fieldEffects = gameState.getFieldEffects();
        this.weather = gameState.getWeather();

        this.side = gameState.getSide(i);
        
        this.active = side.getActive();
        this.party = side.getParty();
        this.sideFieldEffects = side.getSideFieldEffects();
    }


    // getters
    public Side getSide() {
        return side;
    }
    public Loomian getActive() {
        return active;
    }
    public List<Loomian> getParty() {
        return party;
    }
    public Loomian getPartyMember(int i) {
        return party.get(i);
    }
    public HashMap<String, SideFieldEffect> getSideFieldEffects() {
        return sideFieldEffects;
    }
    public SideFieldEffect getSideFieldEffect(String key) {
        return sideFieldEffects.get(key);
    }
    


    // setters
    public void setSide(Side side) {
        this.side = side;
    }
    public void setEnemy(BattleParticipant enemy) {
        this.enemy = enemy;
    }
    public void setActive(Loomian active) {
        this.active = active;
    }
    public void setParty(List<Loomian> party) {
        this.party = party;
    }
    public void setSideFieldEffects(HashMap<String, SideFieldEffect> sideFieldEffects) {
        this.sideFieldEffects = sideFieldEffects;
    }


    // has
    public boolean hasSideFieldEffect(String key) {
        return sideFieldEffects.get(key) != null;
    }

}
