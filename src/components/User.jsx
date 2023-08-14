import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired,
};
