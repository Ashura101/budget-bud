import {store} from '@/store';

function getAccessToken() {
  const token = store.getState()?.user?.token;
  return token;
}

function getUserId() {
  let userId = store.getState().user?.id;
  return userId;
}

function getUserName() {
  let userName = store.getState()?.user.firstName + ' ' + user.lastName;
  return userName;
}

function getUserType() {
  let userType = store.getState().user?.userRole;
  return userType;
}

export const AuthHelper = {getAccessToken, getUserId, getUserName, getUserType};
