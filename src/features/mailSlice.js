import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false
  },
  reducers: {
      OpenSendMessage:(state) => {
      state.sendMessageIsOpen = true;
    },
      CloseSendMessage: state => {
      state.sendMessageIsOpen = false;
    },  
  },
})

export const { OpenSendMessage, CloseSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
