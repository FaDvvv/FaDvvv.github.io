package com.main.Side;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import com.main.Loomian.Loomian;

public class Side {
    private Loomian active;
    private int activeI;
    private List<Loomian> party = new ArrayList<>();
    private HashMap<String, SideFieldEffect> sideFieldEffects = new HashMap<>();


    public Side() {

    }
    public Side(Side other) {
        this.active = Loomian.copy(active);
        this.activeI = other.activeI;

        this.party = other.party.stream()
            .map(Loomian::copy)
            .collect(Collectors.toList());
        
        for (String key : other.sideFieldEffects.keySet()) {
            this.sideFieldEffects.put(key, SideFieldEffect.copy(other.sideFieldEffects.get(key)));
        }
    }

    public static Side copy(Side other) {
        if (other == null) return null;
        return new Side(other);
    }



    // getters
    public Loomian getActive() {
        return active;
    }
    public int getActiveI() {
        return activeI;
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
    public void setActive(Loomian active) {
        this.active = active;
    }
    public void setActiveI(int activeI) {
        this.activeI = activeI;
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
