
import React, { Component, CElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/shared/Layout";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Appointment from "./pages/Appointment";
import Feature from "./pages/Feature";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

function ChangeApp() {
var vss="About";
    const routeObjectArrar = [
        {
            path: "about-us",
            componentName: "About",
            componentPath:"/pages/About"
        }
    ]
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="index" element={<Home />}></Route>
                    {
                        routeObjectArrar.map((obj, index) => {
                            let DynamicComponent=require("."+obj.componentPath).default;
                            debugger;
                            return <Route path={obj.path} key={index}  element=<DynamicComponent key={obj.componentName}/>/>
                        })
                    }

                    <Route path="contact-us" element={<Contact />}></Route>
                    <Route path="service" element={<Service />}></Route>
                    <Route path="feature" element={<Feature />}></Route>
                    <Route path="appointment" element={<Appointment />}></Route>
                    <Route path="team" element={<Team />}></Route>
                    <Route path="testmonial" element={<Testimonial />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default ChangeApp;
