import { createSlice } from "@reduxjs/toolkit";

export const captableSlice = createSlice({
  name: "captable",
  initialState: {
    setupDone: true,
    tokenDetailsModal: false,
    roundDetailsModal: false,
    teamDetailsModal: false,
    advisoryDetailsModal: false,
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
      state.teamDetailsModal = true;
      state.tokenDetailsModal = false;
      state.roundDetailsModal = false;
    },

    showAdvisoryDetails: (state) => {
      state.teamDetailsModal = false;
      state.tokenDetailsModal = false;
      state.roundDetailsModal = false;
      state.advisoryDetailsModal = true;
    },

    closeModals: (state) => {
      state.tokenDetailsModal = false;
      state.roundDetailsModal = false;
      state.teamDetailsModal = false;
      state.advisoryDetailsModal = false;
    },
  },
});

export const {
  showTokenDetails,
  showRoundDetails,
  showTeamDetails,
  showAdvisoryDetails,
  closeModals,
} = captableSlice.actions;
export default captableSlice;
