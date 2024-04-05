import React, { useState } from 'react'
import { Accordion, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../../common/SiteLogo';
import headerLogo from '../../../assets/Images/siteLogo.png'
import { FiChevronDown } from "react-icons/fi";
import { headerData } from '../../data/headerData';
import { useNavigate } from 'react-router-dom';

const HeaderNavbar = ({ activeTab, setActiveTab }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);
    const [activeLink, setActiveLink] = useState();
    const [serviceTab, setServiceTab] = useState(false)

    const handleTab = (items) => {
        setActiveTab(items.id);
        setServiceTab(false);
        navigate(`${items.link !== '' ? items.link : undefined}`)
        setShow(false)
    };
    const handleLink = (item, items) => {
        setActiveLink(item.id);
        setHover(false)
        setShow(false)
        navigate(`${item.path}`)
        if (item.key === true) {
            setServiceTab(true)
        } else {
            setServiceTab(false)
        }
    };

    const toggleOffCanvas = () => {
        setShow((show) => !show);
    };

    return (
        <Navbar expand={"xl"}>
            <Container>
                <Navbar.Brand href="/"><Logo src={headerLogo} maxWidth="100px" /></Navbar.Brand>
                <Navbar.Toggle onClick={toggleOffCanvas} aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                    show={show}
                    onHide={toggleOffCanvas}
                    id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" >
                    <Offcanvas.Header show={show} closeButton />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className='display_768 d-none d-xl-flex'>
                                {headerData.map((items, index) => (
                                    <div key={index}>
                                        <div onMouseEnter={items.menuType ? () => setHover(true) : () => setHover(false)} onMouseLeave={() => setHover(false)} className={items.menuType ? "hover_menu" : ""}>
                                            <p onClick={() => handleTab(items)}
                                                className={items.customClass || `title_name ${serviceTab ? (serviceTab && items.ServiceClass) : (activeTab === items.id && "active_tab")}`}>
                                                {items.title}
                                                {items.subMenu && <FiChevronDown className='ms-1' />}
                                            </p>
                                            {hover && <div className='display'>
                                                {items.subMenu && items.subMenu.map((ele, index) => (
                                                    <div key={index} className='hover_subtitle '>
                                                        {ele.subtitle}
                                                        {ele.subLinks && ele.subLinks.map((item) => (
                                                            <p onClick={() => handleLink(item, items)} className={`subtitle_name ${activeLink === item.id && "active_Link"}`}>{item.subLinkName}</p>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='d-xl-none'>
                                {headerData && headerData.map((items, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                items.subMenu ? (
                                                    <Accordion className='drops'>
                                                        <Accordion.Item eventKey={items.eventKey}>
                                                            <Accordion.Header>{items.title}</Accordion.Header>
                                                            {items.subMenu && items.subMenu.map((ele, index) => (
                                                                <Accordion.Body key={index}>
                                                                    <Accordion className='drops'>
                                                                        <Accordion.Item eventKey={items.eventKey}>
                                                                            <Accordion.Header>{ele.subtitle}</Accordion.Header>
                                                                            <Accordion.Body>
                                                                                {ele.subLinks && ele.subLinks.map((item, index) => (
                                                                                    <div key={index}>
                                                                                        <p onClick={() => handleLink(item)} className='subtitle_name_small'>{item.subLinkName}</p>
                                                                                    </div>
                                                                                ))}
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                </Accordion.Body>
                                                            ))}
                                                        </Accordion.Item>
                                                    </Accordion>
                                                )
                                                    :
                                                    <p onClick={() => handleTab(items)} className='subtitle_name'>{items.title}</p>
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
