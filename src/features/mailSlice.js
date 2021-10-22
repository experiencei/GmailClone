import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    sendMessageIsOPen : false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOPen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOPen = false;
    },
  },
});

export const { openSendMessage , closeSendMessage} = mailSlice.actions;

export const selectMail = (state) => state.mail.value;


export default mailSlice.reducer;