package com.main;

import java.io.File;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class JsonFileReader {
    
    private static final Gson gson = new Gson();


    // list
    public static <T> List<T> readList(String filePath, Class<T> clazz) {
        try {
            File file = new File("res/" + filePath);
            String json = Files.readString(file.toPath());

            Type type = TypeToken.getParameterized(List.class, clazz).getType();
            return gson.fromJson(json, type);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse JSON file: " + filePath, e);
        }
    }


    // map
    public static <T> Map<String, T> readMap(String filePath, Class<T> clazz) {
        try {
            File file = new File("res/" + filePath);

            String json = Files.readString(file.toPath());
            Type type = TypeToken.getParameterized(Map.class, String.class, clazz).getType();
            return gson.fromJson(json, type);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse JSON file: " + filePath, e);
        }
    }



    // map < list >
    public static <T> Map<String, List<T>> readNestedList(String filePath, Class<T> clazz) {
        try {
            File file = new File("res/" + filePath);
            String json = Files.readString(file.toPath());

            Type listType = TypeToken.getParameterized(List.class, clazz).getType();
            Type mapType = TypeToken.getParameterized(Map.class, String.class, listType).getType();

            return gson.fromJson(json, mapType);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse JSON file: " + filePath, e);
        }
    }



    // map < map >
    public static <T> Map<String, Map<String, T>> readNestedMap(String filePath, Class<T> clazz) {
        try {
            File file = new File("res/" + filePath);
            String json = Files.readString(file.toPath());

            Type innerMapType = TypeToken.getParameterized(Map.class, String.class, clazz).getType();
            Type outerMapType = TypeToken.getParameterized(Map.class, String.class, innerMapType).getType();

            return gson.fromJson(json, outerMapType);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse nested JSON file: " + filePath, e);
        }
    }
}
