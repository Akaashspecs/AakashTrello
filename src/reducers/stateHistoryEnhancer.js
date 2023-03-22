import * as types from "../constants/ActionTypes";

const stateHistoryEnhancer = (reducer) => {
  const initialState = {
    currentState: reducer(undefined, {}),
  };

  return (state = initialState, action) => {
    const { currentState } = state;
    switch (action.type) {
      default:
        const newCurrentState = reducer(currentState, action);
        if (currentState === newCurrentState) {
          return state;
        }
        if (currentState) {
          return {
            currentState: newCurrentState,
          };
        }
        return {
          currentState: newCurrentState,
        };
    }
  };
};

export default stateHistoryEnhancer;
