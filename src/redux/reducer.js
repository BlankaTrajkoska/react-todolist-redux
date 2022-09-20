import * as actions from "./actionTypes";
let nextId = 2;

function reducer(
  state = [
    { id: 1, task: "Walk the dog", done: false },
    { id: 2, task: "Water the flower", done: true },
  ],
  action
) {
  switch (action.type) {
    case actions.ITEM_ADDED:
      return [
        ...state,
        {
          id: ++nextId,
          task: action.payload.task,
          done: false,
        },
      ];
    case actions.ITEM_CLICKED:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case actions.ITEM_DELETED:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
export default reducer;
