package com.main;

import java.util.ArrayList;
import java.util.List;

import com.main.GameState.GameState;
import com.main.Loomian.Loomian;
import com.main.Loomian.Set;
import com.main.Side.Side;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Set garlashOffenseSet = Manager.getSet("garlash", "offense");
        Loomian garlash = new Loomian(garlashOffenseSet);

        List<Loomian> party = new ArrayList<>();
        for (int i = 0; i < 7; i ++) party.add(Loomian.copy(garlash));

        Side side = new Side();
        side.setParty(party);
        side.setActiveI(0);
        side.setActive(side.getPartyMember(0));

        GameState gameState = new GameState();
        
        gameState.setChance(1);
        for (int i = 0; i < 2; i ++) gameState.getSides().add(side);

    }


    public static void pythonCallTest() {
        System.out.println("received python call");
    }
}