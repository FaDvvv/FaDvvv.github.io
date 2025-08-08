package com.main.Move;

import java.util.ArrayList;
import java.util.List;

import com.main.Loomian.MinorStatus;

public class MinorStatusGroup {


    private List<MinorStatus> minorStatuses = new ArrayList<>();
    private double chance;
    private boolean applyAll;

    public MinorStatusGroup() {

    }
    public MinorStatusGroup(MinorStatusGroup other) {
        for (MinorStatus status : other.minorStatuses) this.minorStatuses.add(MinorStatus.copy(status));
        this.chance = other.chance;
        this.applyAll = other.applyAll;
    }

    public static MinorStatusGroup copy(MinorStatusGroup other) {
        if (other == null) return null;
        return new MinorStatusGroup(other);
    }

    

    // getters
    public List<MinorStatus> getMinorStatuses() {
        return minorStatuses;
    }
    public double getChance() {
        return chance;
    }
    public boolean applyAll() {
        return applyAll;
    }



    // setters
    public void setMinorStatuses(List<MinorStatus> minorStatuses) {
        this.minorStatuses = minorStatuses;
    }
    public void setChance(double chance) {
        this.chance = chance;
    }
    public void setApplyAll(boolean applyAll) {
        this.applyAll = applyAll;
    }
}
