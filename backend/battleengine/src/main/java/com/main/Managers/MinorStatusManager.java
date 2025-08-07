package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.MinorStatus;

public class MinorStatusManager {

    private static Map<String, MinorStatus> minorStatusMap = new HashMap<>();
    
    static {
        minorStatusMap = JsonFileReader.readMap("minorStatuses.json", MinorStatus.class);
    }

    private MinorStatusManager () {}

    public static MinorStatus get(String s) {
        if (minorStatusMap.get(s) == null) {System.err.println("Attempted to access null loomian \"" + s + "\"");}
        return minorStatusMap.get(s);
    }
}
