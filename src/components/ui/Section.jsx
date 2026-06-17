/* ============================================
   SECTION COMPONENT
   Reusable section wrapper with alternating backgrounds
   ============================================ */

import React from 'react';
import './Section.css';

const Section = ({ 
  children, 
  className = '',
  variant = 'white',
  id
}) => {
  return (
    <section
      id={id}
      className={`section section-${variant} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
