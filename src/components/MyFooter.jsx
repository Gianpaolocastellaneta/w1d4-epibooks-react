import React from "react"

const Footer = () => <footer className="page-footer font-small bg-secondary bg-gradient pt-4 mt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-white">
                <h5 className="text-uppercase">EpiBooks.React Library online since 2010.</h5>
                <p>   Established in 2010, Book Haven has been a cornerstone for literary enthusiasts. Our collection spans all genres,
                    offering timeless classics and contemporary masterpieces. Visit us to explore a world of stories and knowledge.
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />


            <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Service</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Shops</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Work with us</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright Milano Piazza Cavour 1

    </div>

</footer>

export default Footer