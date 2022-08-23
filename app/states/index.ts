export const STATES: Record<string, string> = {
    IDLE: "IDLE",
    FETCHING: "FETCHING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    ERROR: "ERROR",
}

export const EVENTS: Record<string, string> = {
    FETCH: "FETCH",
    RESOLVE: "RESOLVE",
    REJECT: "REJECT",
}    

export const initialState = STATES.IDLE;

const stateMachine = {
    initial: initialState,
    states: {
      [STATES.IDLE]: { on: { [EVENTS.FETCH]: STATES.FETCHING } },
      [STATES.FETCHING]: {
        on: {
          [EVENTS.RESOLVE]: STATES.FULFILLED,
          [EVENTS.REJECT]: STATES.REJECTED,
        }
      },
      [STATES.FULFILLED]: { on: { [EVENTS.FETCH]: STATES.FETCHING } },
      [STATES.REJECTED]: { on: { [EVENTS.FETCH]: STATES.FETCHING } },
    }
  }
