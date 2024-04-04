import React, { useState } from 'react'
import { Accordion, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../../common/SiteLogo';
import headerLogo from '../../../assets/Images/siteLogo.png'
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { headerData } from '../../data/headerData';


const HeaderNavbar = ({activeTab, setActiveTab}) => {
    const [hover, setHover] = useState(false)
    // const [activeTab, setActiveTab] = useState(0);
    const [activeLink, setActiveLink] = useState();

    const handleTab = (item) => {
        setActiveTab(item.id);
    };
    const handleLink = (item) => {
        setActiveLink(item.id);
        setHover(false)
    };
    return (
        <Navbar expand={"xl"}>
            <Container>
                <Navbar.Brand href="/"><Logo src={headerLogo} maxWidth="100px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} ></Navbar.Toggle>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" >
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className='display_768 d-none d-xl-flex'>
                                {headerData.map((item, index) => (
                                    <div key={index}>
                                        <div onMouseEnter={item.menuType ? () => setHover(true) : () => setHover(false)} onMouseLeave={() => setHover(false)} className={item.menuType ? "hover_menu" : ""}>
                                            <Link to={item.link !== '' ? item.link : undefined} className={item.customClass}>
                                                <span onClick={() => handleTab(item)} className={`title_name ${activeTab === item.id && "active_tab"}`}>
                                                    {item.title}
                                                    {item.subMenu && <FiChevronDown className='ms-1' />}
                                                </span>
                                            </Link>
                                            {hover && <div className='display'>
                                                {item.subMenu && item.subMenu.map((ele, index) => (
                                                    <div key={index} className='hover_subtitle '>
                                                        {ele.subtitle}
                                                        {ele.subLinks && ele.subLinks.map((item) => {
                                                            return (
                                                                <>
                                                                    <Link to={item.path} className='text-decoration-none'>
                                                                        <p onClick={() => handleLink(item)} className={`subtitle_name ${activeLink === item.id && "active_Link"}`}>{item.subLinkName}</p>
                                                                    </Link>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                ))}
                                            </div>}

                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className='d-xl-none'>
                                {headerData && headerData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                item.subMenu ? (
                                                    <>

                                                        <Accordion defaultActiveKey="2" className='drops'>
                                                            <Accordion.Item eventKey={item.eventKey}>
                                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                                {item.subMenu && item.subMenu.map((ele, index) => (
                                                                    <Accordion.Body key={index}>
                                                                        <span className='subtitle_name'>
                                                                            <Accordion defaultActiveKey="2" className='drops'>
                                                                                <Accordion.Item eventKey={item.eventKey}>
                                                                                    <Accordion.Header>{ele.subtitle}</Accordion.Header>
                                                                                    <Accordion.Body>
                                                                                        {ele.subLinks && ele.subLinks.map((item, index) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <Link key={index} to={item.path} className='text-decoration-none'>
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
                                        </div>
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