import React from 'react';

import './ContactDetail.scss';

// A simple container for displaying a contact detail
export default function ContactDetail(props) {
  const {contact, details} = props;

  return (
    <div className="contact-detail">
      <p>{contact}</p>
      <p>{details}</p>
    </div>
  );
}