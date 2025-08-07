package com.main;

import com.main.Managers.SpeciesManager;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        System.out.println(SpeciesManager.get("embit").getName());
        System.out.println(SpeciesManager.get("embit").getHeight());
        System.out.println(SpeciesManager.get("embit").getWeight());
        System.out.println(SpeciesManager.get("embit").getBaseAbilities());
        System.out.println(SpeciesManager.get("embit").getBaseTypes());
        System.out.println(SpeciesManager.get("embit").getBaseStats());

    }
}