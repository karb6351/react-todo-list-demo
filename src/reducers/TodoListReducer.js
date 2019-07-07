import * as TodoListType from '../actions/todoList/type';

const initState = {
  list: [],
  createLabel: ''
};

export default function(state = initState, { type, payload }) {
  switch (type) {
    case TodoListType.ADD_ITEM:
      return {
        ...state,
        list: [...state.list, {...payload, label: state.createLabel}]
      };
    case TodoListType.CHANGE_EDIT_STATUS:
      return {
        ...state,
        list: state.list.map((item, index) => index === payload ? {...item, isEditing: !item.isEditing} : item)
      };
    case TodoListType.EDIT_ITEM:
      return {
        ...state,
        list: state.list.map((item, index) => index === payload.index ? {...item, label: payload.newLabel} : item)
      };
    case TodoListType.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item, index) => index !== payload)
      };
    case TodoListType.CHANGE_STATUS:
      return {
        ...state,
        list: state.list.map((item, index) => index === payload ? {...item, done: !item.done} : item)
      };
    case TodoListType.EDIT_CREATE_LABEL:
      return {
        ...state,
        createLabel: payload,
      };
    case TodoListType.RESET_CREATE_LABEL:
      return {
        ...state,
        createLabel: '',
      };
    default:
      return state;
  }
}