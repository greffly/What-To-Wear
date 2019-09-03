import React from 'react';

const OccasionsContext = React.createContext({
  occasions: [],
  addOccasion: () => {},
  deleteOccasion: () => {},
  updateOccasion: () => {}
});

export default OccasionsContext;
