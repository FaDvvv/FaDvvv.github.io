package com.main.Managers;

import java.util.HashMap;
import java.util.Map;

import com.main.JsonFileReader;
import com.main.Item;

public class ItemManager {

    private static Map<String, Item> itemMap = new HashMap<>();
    
    static {
        itemMap = JsonFileReader.readMap("items.json", Item.class);
    }

    private ItemManager () {}

    public static Item get(String s) {
        if (itemMap.get(s) == null) {System.err.println("Attempted to access null loomian \"" + s + "\"");}
        return itemMap.get(s);
    }
}
