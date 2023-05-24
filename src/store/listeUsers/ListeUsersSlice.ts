import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IList {
  TUsers: any;
}

const getInitialState = (): { value: IList } => {
  return {
    value: {
      TUsers: [],
    },
  };
};

const UsersSlice = createSlice({
  name: 'users',
  initialState: getInitialState(),
  reducers: {
    updateUsers(state, action: PayloadAction<IList>) {
      state.value.TUsers = action.payload.TUsers;
    },
  },
});

export const { updateUsers } = UsersSlice.actions;

export default UsersSlice;
export const selectUser = (state: { User: { value: IList } }) =>
  state.User.value;
export const selectUsers = (state: { User: { value: IList } }) =>
  state.User.value;
