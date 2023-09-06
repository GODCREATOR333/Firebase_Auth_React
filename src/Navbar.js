import React, { useEffect, useState } from 'react'
import "./navbarstyles.css";


function NavBar() {

    const [show, handleShow] = useState(false)

    function transitionNavBar(event) {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);


    return (
        <div className={(`navbar ${show && "navbar_black"}`)}>
            <div className='navbar_content'>

                <img onScroll={transitionNavBar} className='navbar_logo_transparent '
                    src="https://www.transparentpng.com/thumb/google-logo/google-fit-logo-images-free-download-hearted-JqvNhh.png"
                    alt='netflix logo transparent' />

                <img className='navbar_avatar'
                    src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png"
                    alt="netflix avatar" />


            </div>
        </div>
    )
}

export default NavBar;