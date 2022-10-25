import React from "react";
import '../bootstrap.min.css'
import '../Pages/HelloThere.css'
import picture from '../images/PHOTO-2022-06-20-15-05-41.png'

function ErrorPage() {
    return (

        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"><span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>

                <div className='image'>
                    <img src={picture} alt="Logo"/>
                </div>
                <a href="/" className="btn btn-primary">Go Home</a>
            </div>
        </div>
    )
}

export default ErrorPage