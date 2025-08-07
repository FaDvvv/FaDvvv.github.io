package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Status;

public class StatusManager {

    private static Map<String, Status> statusMap = new HashMap<>();
    
    static {
        statusMap = JsonFileReader.readMap("statuses.json", Status.class);
    }

    private StatusManager () {}

    public static Status get(String s) {
        if (statusMap.get(s) == null) {System.err.println("Attempted to access null loomian \"" + s + "\"");}
        return statusMap.get(s);
    }
}
