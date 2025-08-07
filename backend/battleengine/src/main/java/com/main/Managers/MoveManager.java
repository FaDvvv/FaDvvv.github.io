package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Move;

public class MoveManager {

    private static Map<String, Move> moveMap = new HashMap<>();
    
    static {
        moveMap = JsonFileReader.readMap("moves.json", Move.class);
    }

    private MoveManager () {}

    public static Move get(String s) {
        if (moveMap.get(s) == null) {System.err.println("Attempted to access null loomian \"" + s + "\"");}
        return moveMap.get(s);
    }
}
