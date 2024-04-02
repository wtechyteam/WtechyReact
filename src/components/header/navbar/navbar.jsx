import React, { useState } from 'react'
import { Accordion, Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import Logo from '../../common/siteLogo/logo';
import headerLogo from '../../../assets/Images/siteLogo.png'
import Navigation from '../../navigation/Navigation';
import { FiChevronDown } from "react-icons/fi";



const headerData = [
    {
        title: "home",
        link: '/',
    },
    {
        title: "About Us",
        link: "/service",
        eventKey: "0",
        // menuType: "submenu",
        // subMenu: [
        //     {
        //         subtitle: "service-1",
        //         link: "/ser1"
        //     },
        //     {
        //         subtitle: "service-2",
        //         link: "/ser2"
        //     },
        //     {
        //         subtitle: "service-3",
        //         link: "/ser3"
        //     },
        //     {
        //         subtitle: "service-4",
        //         link: "/ser4"
        //     },
        // ]
    },
    {
        title: "Services",
        link: "/",
        eventKey: "1",
        menuType: "submenu",
        subMenu: [
            {
                subtitle: "services",
                link: "/cont",
                subLinks: [
                    {
                        subLinkName: "search engine optimization",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "social media optimization",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "google ads management",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "content marketing",
                        path: "/gdg"
                    }
                ]
            },
            {
                subtitle: "Repair Online Reputation",
                link: "/conts",
                subLinks: [
                    {
                        subLinkName: "Corporate",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Personal",
                        path: "/gdg"
                    },
                ]
            },
            {
                subtitle: "E-commerce Store Management",
                link: "/conts",
                subLinks: [
                    {
                        subLinkName: "Amazon Store Management",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Ebay Store Management",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Shopify Store Management",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Custom E-Commerce Store Management",
                        path: "/gdg"
                    },
                ]
            },
            {
                subtitle: "Online Reputation Marketing",
                link: "/conts",
                subLinks: [
                    {
                        subLinkName: "Corporate",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Personal",
                        path: "/gdg"
                    },
                ]

            },
            {
                subtitle: "Website Development",
                link: "/conts",
                subLinks: [
                    {
                        subLinkName: "WordPress Development",
                        path: "/gdg"
                    },
                    {
                        subLinkName: "Shopify Development",
                        path: "/gdg"
                    },
                ]

            },

        ]
    },
    {
        title: "Insights",
        link: "/",
    },
    {
        title: "Portfolio",
        link: "/",
        eventKey: "2",
        
    },
    {
        title: "Top Work Marketplaces",
        link: "top-work-marketplaces",
    },
    {
        title: "Careers",
        link: "careers",
    },
    {
        title: "Contact",
        link: "contact",
        customClass: "headerBtn"
    }
]

const HeaderNavbar = () => {

    return (
        <Navbar expand={"xl"}>
            <Container>
                <Navbar.Brand href="/"><Logo src={headerLogo} maxWidth="100px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-xl`}  aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" >
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className='display_768 d-none d-xl-flex'>
                                {headerData.map((item, index) => (
                                    <div className={item.menuType ? "hover_menu title_name" : "title_name"}>
                                        <span className={item.customClass}>{item.title}</span>
                                        {item.subMenu && <FiChevronDown/>}
                                        <div className='display'>
                                            {item.subMenu && item.subMenu.map((ele) => (
                                                <div className='hover_subtitle '>
                                                    {ele.subtitle}
                                                    {ele.subLinks && ele.subLinks.map((item) => {
                                                        return (
                                                            <>
                                                                <p className='subtitle_name'>{item.subLinkName}</p>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='d-xl-none'>
                                {headerData && headerData.map((item, index) => {
                                    return (
                                        <>
                                            {
                                                item.subMenu ? (
                                                    <>

                                                        <Accordion defaultActiveKey="2" className='drops'>
                                                            <Accordion.Item eventKey={item.eventKey}>
                                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                                {item.subMenu && item.subMenu.map((ele) => (
                                                                    <Accordion.Body>
                                                                        <span className='subtitle_name'>
                                                                            {ele.subtitle}
                                                                            {ele.subLinks && ele.subLinks.map((item) => {
                                                                                return (
                                                                                    <>
                                                                                        <p className='subtitle_name_small'>{item.subLinkName}</p>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </span>
                                                                    </Accordion.Body>
                                                                ))}

                                                            </Accordion.Item>

                                                        </Accordion>
                                                    </>
                                                )
                                                    :
                                                    <div className='subtitle_name'>{item.title}</div>
                                            }
                                        </>
                                    )
                                }


                                )}

                            </div>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar