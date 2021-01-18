import React from 'react';

// Take in a phrase and separate the third word in an array

const logIn = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

const logOut = props => {

  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">logout here </h4>
    </div>
  );
};

export { logIn, logOut };
