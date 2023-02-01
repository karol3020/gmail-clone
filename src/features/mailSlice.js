import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false
  },
  reducers: {
    selecteMail: (state, action) => {
      state.selectedMail = action.payload;
    },
      OpenSendMessage:(state) => {
      state.sendMessageIsOpen = true;
    },
      CloseSendMessage: state => {
      state.sendMessageIsOpen = false;
    },  
  },
})

export const { selecteMail, OpenSendMessage, CloseSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selecteOpenMail= (state) => state.mail.selectedMail;

export default mailSlice.reducer;
