package com.main;

import java.io.File;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class JsonFileReader {
    
    private static final Gson gson = new Gson();

    public static <T> Map<String, T> readMap(String filePath, Class<T> clazz) {
        try {
            Path path = Paths.get(filePath);

            File file = new File("res/" + filePath);

            String json = Files.readString(file.toPath());
            Type type = TypeToken.getParameterized(Map.class, String.class, clazz).getType();
            return gson.fromJson(json, type);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read or parse JSON file: " + filePath, e);
        }
    }
}
