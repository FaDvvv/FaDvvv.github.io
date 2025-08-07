package com.main.Actions;

public class SwitchAction extends Action {

    private int switchTarget;

    public SwitchAction(int switchTarget) {
        super("switch", 10);
        this.switchTarget = switchTarget;
    }
    public SwitchAction(SwitchAction other) {
        super("switch", 10);
        this.switchTarget = other.switchTarget;
  
    }

    // static copy is in Action.java

    // getters
    public int getSwitchTarget() {
        return switchTarget;
    }

    // setters
    public void setSwitchTarget(int switchTarget) {
        this.switchTarget = switchTarget;
    }
}
