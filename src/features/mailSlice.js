import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    selectedMail:null,
    sendMessageIsOPen : false,
  },
  reducers: {
    selectedMail : ( state , action )=>{
       state.selectedMail = action.payload
    },
    openSendMessage: state => {
      state.sendMessageIsOPen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOPen = false;
    },
  },
});

export const { openSendMessage , closeSendMessage} = mailSlice.actions;
export const selectMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOPen = (state) => state.mail.sendMessageIsOPen;


export default mailSlice.reducer;