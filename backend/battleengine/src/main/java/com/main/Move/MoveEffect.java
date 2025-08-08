package com.main.Move;


public class MoveEffect {

    private StatModifierGroup statModifiers;
    private StatusGroup status;
    private MinorStatusGroup minorStatus;

    public MoveEffect() {

    }
    public MoveEffect(MoveEffect other) {
        this.statModifiers = StatModifierGroup.copy(other.statModifiers);
        this.status = StatusGroup.copy(other.status);
        this.minorStatus = MinorStatusGroup.copy(other.minorStatus);
    }

    public static MoveEffect copy(MoveEffect other) {
        if (other == null) return null;
        return new MoveEffect();
    }



    // getters
    public StatModifierGroup getStatModifiers() {
        return statModifiers;
    }
    public StatusGroup getStatus() {
        return status;
    }
    public MinorStatusGroup getMinorStatus() {
        return minorStatus;
    }


    // setters
    public void setStatModifiers(StatModifierGroup statModifiers) {
        this.statModifiers = statModifiers;
    }
    public void setStatus(StatusGroup status) {
        this.status = status;
    }
    public void setMinorStatus(MinorStatusGroup minorStatus) {
        this.minorStatus = minorStatus;
    }
}
