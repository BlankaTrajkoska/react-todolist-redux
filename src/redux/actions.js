import * as actions from "./actionTypes";

export const itemAdded = (task) => ({
  type: actions.ITEM_ADDED,
  payload: {
    task,
  },
});

export const itemDeleted = (id) => ({
  type: actions.ITEM_DELETED,
  payload: {
    id,
  },
});

export const itemClicked = (id) => ({
  type: actions.ITEM_CLICKED,
  payload: {
    id,
  },
});
