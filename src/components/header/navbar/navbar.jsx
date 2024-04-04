import React, { useState } from 'react'
import { Accordion, Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import Logo from '../../common/SiteLogo';
import headerLogo from '../../../assets/Images/siteLogo.png'
import Navigation from '../../navigation/Navigation';
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';



const headerData = [
    {
        title: "home",
        link: '/',
    },
    {
        title: "About Us",
        link: "about-agency",
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
        link: "",
        eventKey: "1",
        menuType: "submenu",
        subMenu: [
            {
                subtitle: "Services",
                subLinks: [
                    {
                        subLinkName: "search engine optimization",
                        path: "/searchEngine"
                    },
                    {
                        subLinkName: "social media optimization",
                        path: "/socialMedia"
                    },
                    {
                        subLinkName: "google ads management",
                        path: "/googleAds"
                    },
                    {
                        subLinkName: "content marketing",
                        path: "/contentMarket"
                    }
                ]
            },
            {
                subtitle: "Repair Online Reputation",
                subLinks: [
                    {
                        subLinkName: "Corporate",
                        path: "/repairCorporate"
                    },
                    {
                        subLinkName: "Personal",
                        path: "/repairPersonal"
                    },
                ]
            },
            {
                subtitle: "E-commerce Store Management",
                subLinks: [
                    {
                        subLinkName: "Amazon Store Management",
                        path: "/amazonStore"
                    },
                    {
                        subLinkName: "Ebay Store Management",
                        path: "/ebayStore"
                    },
                    {
                        subLinkName: "Shopify Store Management",
                        path: "/shopifyStore"
                    },
                    {
                        subLinkName: "Custom E-Commerce Store Management",
                        path: "/customECom"
                    },
                ]
            },
            {
                subtitle: "Online Reputation Marketing",
                subLinks: [
                    {
                        subLinkName: "Corporate",
                        path: "/onlineCorporate"
                    },
                    {
                        subLinkName: "Personal",
                        path: "/onlinePersonal"
                    },
                ]

            },
            {
                subtitle: "Website Development",
                subLinks: [
                    {
                        subLinkName: "WordPress Development",
                        path: "/wordpressDev"
                    },
                    {
                        subLinkName: "Shopify Development",
                        path: "/shopifyDev"
                    },
                ]

            },

        ]
    },
    {
        title: "Insights",
        link: "insights",
    },
    {
        title: "Portfolio",
        link: "portfolio",
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
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" >
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className='display_768 d-none d-xl-flex'>
                                {headerData.map((item, index) => (
                                    <div className={item.menuType ? "hover_menu" : ""}>
                                        <Link to={item.link !== '' ? item.link : undefined} className={item.customClass}>
                                            <span className='title_name'>
                                                {item.title}
                                                {item.subMenu && <FiChevronDown />}
                                            </span>
                                        </Link>

                                        <div className='display'>
                                            {item.subMenu && item.subMenu.map((ele) => (
                                                <div className='hover_subtitle '>
                                                    {ele.subtitle}
                                                    {ele.subLinks && ele.subLinks.map((item) => {
                                                        return (
                                                            <>
                                                                <Link to={item.path} className='text-decoration-none'>
                                                                    <p className='subtitle_name'>{item.subLinkName}</p>
                                                                </Link>
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
                                                                            <Accordion defaultActiveKey="2" className='drops'>
                                                                                <Accordion.Item eventKey={item.eventKey}>
                                                                                    <Accordion.Header>{ele.subtitle}</Accordion.Header>
                                                                                    <Accordion.Body>
                                                                                        {ele.subLinks && ele.subLinks.map((item) => {
                                                                                            return (
                                                                                                <>
                                                                                                <Link to={item.path} className='text-decoration-none'>
                                                                                                    <p className='subtitle_name_small'>{item.subLinkName}</p>
                                                                                                    </Link>
                                                                                                </>
                                                                                            )
                                                                                        })}
                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>


                                                                        </span>
                                                                    </Accordion.Body>
                                                                ))}

                                                            </Accordion.Item>

                                                        </Accordion>
                                                    </>
                                                )
                                                    :
                                                    <Link className='text-decoration-none' to={item.link !== '' ? item.link : undefined}>

                                                        <div className='subtitle_name'>{item.title}</div>
                                                    </Link>
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