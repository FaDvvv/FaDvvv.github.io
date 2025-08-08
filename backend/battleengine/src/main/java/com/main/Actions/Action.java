package com.main.Actions;

import java.util.List;

import com.main.GameState.GameState;

public class Action {

    private String type;
    private int priority;

    public Action(String type, int priority) {
        this.type = type;
        this.priority = priority;
    }



    public static Action copy(Action other) {
        if (other ==  null) return null;
        
        else if (other instanceof ForfeitAction) {
            return new ForfeitAction((ForfeitAction) other);
        }
        else if (other instanceof MoveAction) {
            return new MoveAction((MoveAction) other);
        }
        else if (other instanceof SwitchAction) {
            return new SwitchAction((SwitchAction) other);
        }
        else if (other instanceof NullAction) {
            return new NullAction((NullAction) other);
        }
        else {
            return null;
        }
    }



    // getter
    public String getType() {
        return type;
    }
    public int getPriority() {
        return 0;
    }

    // setters



    public List<GameState> act(GameState initiailState, int i) {
        System.err.println("kill yourself");
        return null;
    } 
}
