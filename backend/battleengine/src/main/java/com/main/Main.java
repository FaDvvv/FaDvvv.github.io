package com.main;

import com.main.Managers.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        ItemManager.get("milkshake");
        MinorStatusManager.get("provoke");
        MoveManager.get("accelerate");
        SpeciesManager.get("embit");
        StatusManager.get("poison");

    }
}