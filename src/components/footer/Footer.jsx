import React from 'react';
import Contacts from './Contacts';
import Twitter from './Twitter';
import Instagram from './Instagram';


function Footer() {
  return(
    <section className="flex">
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-around;
          background-color: #9fa845;
          color: white;
          padding-top: 2%;
          background-color:#616429;

        }
            `}</style>
      <Instagram />
      <Contacts />
      <Twitter />
    </section>
  );
}

export default Footer;
