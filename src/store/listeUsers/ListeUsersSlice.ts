import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IList {
  TUsers: any;
}

const getInitialState = () => {
  return {
    value: {
      TUsers: [],
    },
  };
};

const UsersSlice = createSlice({
  name: 'Users',
  initialState: getInitialState(),
  reducers: {
    updateUsers(state, action: PayloadAction<IList>) {
      state.value.TUsers = action.payload.TUsers;
    },
  },
});

export const { updateUsers } = UsersSlice.actions;
export const selectUser = (state: { User: { value: IList } }) =>
  state.User.value;
export default UsersSlice;
