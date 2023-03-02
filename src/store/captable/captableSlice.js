import { createSlice } from "@reduxjs/toolkit";

export const captableSlice = createSlice({
  name: "captable",
  initialState: {
    setupDone: false,
    tokenDetailsModal: false,
    roundDetailsModal: false,
    teamDetailsModal: false,
  },
  reducers: {
    showTokenDetails: (state) => {
      state.tokenDetailsModal = true;
      state.roundDetailsModal = false;
    },

    showRoundDetails: (state) => {
      state.tokenDetailsModal = false;
      state.roundDetailsModal = true;
    },

    showTeamDetails: (state) => {
      console.log("show team detail");
      state.teamDetailsModal = true;
      state.tokenDetailsModal = false;
      state.roundDetailsModal = false;
    },

    closeModals: (state) => {
      state.tokenDetailsModal = false;
      state.roundDetailsModal = false;
    },
  },
});

export const {
  showTokenDetails,
  showRoundDetails,
  showTeamDetails,
  closeModals,
} = captableSlice.actions;
export default captableSlice;
