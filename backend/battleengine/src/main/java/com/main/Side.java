package com.main;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class Side {
    private Loomian active;
    private List<Loomian> party = new ArrayList<>();
    private HashMap<String, SideFieldEffect> sideFieldEffects = new HashMap<>();


    public Side() {

    }
    public Side(Side other) {
        this.active = Loomian.copy(active);

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
}
