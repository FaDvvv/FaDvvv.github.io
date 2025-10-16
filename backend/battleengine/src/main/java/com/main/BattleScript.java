package com.main;

import java.util.ArrayList;
import java.util.List;

import com.main.Actions.MoveAction;
import com.main.Actions.SwitchAction;
import com.main.BattleContext.BattleContext;
import com.main.GameState.GameState;
import com.main.Loomian.Ability;
import com.main.Move.Move;

public class BattleScript {

    private BattleScript() {}

    static {}



    public static List<GameState> preTurn(GameState initialState) {
        List<GameState> outcomes = new ArrayList<>();

        outcomes.add(initialState);

        for (int i = 0; i < 2; i ++) outcomes = assignPossibleAbilities(outcomes, i);

        for (int i = 0; i < 2; i ++) outcomes = assignPossibleActions(outcomes, i);

        return outcomes;
    }


    private static List<GameState> assignPossibleAbilities(List<GameState> initialStates, int i) {
        List<GameState> outcomes = new ArrayList<>();

        for (GameState initialState : initialStates) {
            BattleContext iBc = new BattleContext(initialState, i);

            for (Ability ability : iBc.getUser().getLoom().getAbilities()) {
                GameState state = GameState.copy(initialState);
                BattleContext bc = new BattleContext(state, i);
                bc.getUser().getLoom().setAbility(ability);
                outcomes.add(state);
            }
        }
        return outcomes;
    }

    private static List<GameState> assignPossibleActions(List<GameState> initialStates, int i) {
        List<GameState> outcomes = new ArrayList<>();

        for (GameState initialState : initialStates) {
            BattleContext iBc = new BattleContext(initialState, i);

            if (iBc.getUser().canAct()) {

                if (iBc.getUser().canSwitch()) {

                    for (int l = 0; l < iBc.getUser().getParty().size(); l ++) {
                        if (iBc.getUser().canSwitchTo(i)) {

                            GameState state = GameState.copy(initialState);
                            BattleContext bc = new BattleContext(state, i);
                            SwitchAction action = new SwitchAction(i);
                            bc.getUser().getLoom().setAction(action);
                            outcomes.add(state);

                        }
                    }
                }

                if (iBc.getUser().canUseMove()) {

                    for (Move move : iBc.getUser().getLoom().getMoves()) {
                        if (iBc.getUser().canUseMove(move)) {

                            GameState state = GameState.copy(initialState);
                            BattleContext bc = new BattleContext(state, i);
                            MoveAction action = new MoveAction(move);
                            bc.getUser().getLoom().setAction(action);
                            outcomes.add(state);

                        }
                    }
                }

            } else {

            }
        }


        return outcomes;
    }
}
