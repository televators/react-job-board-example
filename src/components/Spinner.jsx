import React from 'react';
import { PulseLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
  textAlign: 'center',
};

const Spinner = ( { loading } ) => {
  return (
    <PulseLoader
      color='#4338ca'
      loading={ loading }
      cssOverride={ override }
    />
  );
}

export default Spinner;
