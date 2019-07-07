import * as TodoListType from './type';

export function addItem(){
  return {
    type: TodoListType.ADD_ITEM,
    payload: { done: false, isEditing: false }
  }
}

export function changeEditStatus(index) {
  return {
    type: TodoListType.CHANGE_EDIT_STATUS,
    payload: index
  }
}

export function editItem(index, newLabel){
  return {
    type: TodoListType.EDIT_ITEM,
    payload: {
      index, newLabel
    }
  }
}

export function deleteItem(index) {
  return {
    type: TodoListType.DELETE_ITEM,
    payload: index
  }
}

export function changeStatus(index){
  return {
    type: TodoListType.CHANGE_STATUS,
    payload: index
  }
}

export function editCreateLabel(label){
  return {
    type: TodoListType.EDIT_CREATE_LABEL,
    payload: label
  }
}

export function resetCreateLabel(label){
  return {
    type: TodoListType.RESET_CREATE_LABEL,
    payload: null
  }
}