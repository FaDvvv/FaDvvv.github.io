package com.main.Move;

import java.util.ArrayList;
import java.util.List;

import com.main.Status;

public class StatusGroup {


    private List<Status> statuses = new ArrayList<>();
    private double chance;

    public StatusGroup() {

    }
    public StatusGroup(StatusGroup other) {
        for (Status status : other.statuses) this.statuses.add(Status.copy(status));
        this.chance = other.chance;
    }

    public static StatusGroup copy(StatusGroup other) {
        if (other == null) return null;
        return new StatusGroup(other);
    }

    

    // getters
    public List<Status> getStatuses() {
        return statuses;
    }
    public double getChance() {
        return chance;
    }



    // setters
    public void setStatuses(List<Status> statuses) {
        this.statuses = statuses;
    }
    public void setChance(double chance) {
        this.chance = chance;
    }   
}
