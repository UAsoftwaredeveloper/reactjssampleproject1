import React from 'react'

export default function Top() {
    return (
        <> {/* Topbar Start */}
            <div className="container-fluid py-2 d-none d-lg-flex">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small className="me-3"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                            <small className="me-3"><i className="fa fa-clock me-2" />Mon-Sat 09am-5pm, Sun Closed</small>
                        </div>
                        <nav className="breadcrumb mb-0">
                            <a className="breadcrumb-item small text-body" href="#">Career</a>
                            <a className="breadcrumb-item small text-body" href="#">Support</a>
                            <a className="breadcrumb-item small text-body" href="#">Terms</a>
                            <a className="breadcrumb-item small text-body" href="#">FAQs</a>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* <!-- Brand Start --> */}
            <div className="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
                <div className="container pb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <i className="bi bi-telephone-inbound fs-2" />
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Call Now</h5>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                        <a href="index.html" className="h1 text-white mb-0">Lab<span className="text-dark">sky</span></a>
                        <div className="d-flex">
                            <i className="bi bi-envelope fs-2" />
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Mail Now</h5>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Brand End --> */}


        </>
    )
}
