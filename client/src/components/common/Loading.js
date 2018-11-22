import React from 'react';

const Loading = () => {
  return (
    <div>
      <p className="flow-text">Listening to Streams</p>
      <div className="progress lime lighten-3">
        <div className="indeterminate pink accent-1" />
      </div>
    </div>
  );
};

export default Loading;
