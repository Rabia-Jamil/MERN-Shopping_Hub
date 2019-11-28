import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="row">
        <div className="col-md-5">
          <ul style={{ listStyle: "none" }}>
            <li><a href="contactus">Contact Us</a></li>
            <li><a href="about">About</a></li>
          </ul>
          <p className="text-center">Copyright &copy; {new Date().getFullYear()} Shopping Hub</p>
        </div>

        <div className="col-md-5" id="social-networks">
          <p>Follow Us</p>
          <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
          <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
          <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
          <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
          <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
        </div>
      </div>
    </footer>
  );
};
