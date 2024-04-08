import React, { useState } from 'react'
import { Accordion, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../../common/SiteLogo';
import headerLogo from '../../../assets/Images/siteLogo.png'
import { FiChevronDown } from "react-icons/fi";
import { headerData } from '../../data/headerData';
import { useNavigate,NavLink } from 'react-router-dom';

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
            <Logo src={headerLogo} maxWidth="100px" />
            <Navbar.Toggle onClick={toggleOffCanvas} aria-controls={`offcanvasNavbar-expand-xl`} />

            <Navbar.Offcanvas
                show={show}
                onHide={toggleOffCanvas}
                id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end" >

                <Offcanvas.Header show={show} closeButton />

                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1">
                        <ul className='d-none d-xl-flex desktopMenu navList'>
                            {headerData.map((navItem, index) => (
                                <li key={index} className='navItemWrap' onMouseEnter={navItem.menuType ? () => setHover(true) : () => setHover(false)} onMouseLeave={() => setHover(false)}>
                                    <NavLink to={navItem.link} className={`navItem mb-0 ${navItem?.customClass}`}>
                                            {navItem.title}
                                            {navItem.subMenu && <FiChevronDown className='fs-large' />}
                                    </NavLink>
                                    { (navItem.subMenu && hover) &&
                                            <div className='display megaMenuWrapper'>
                                                {navItem.subMenu && navItem.subMenu.map((subMenu, index) => (
                                                    <div key={index} className='menuWrap '>
                                                        <h6 className='title-sm fw-semibold fontInter' >{subMenu.subtitle}</h6>
                                                        <ul>
                                                            {subMenu.subLinks && subMenu.subLinks.map((item) => (
                                                                <li>
                                                                    <p onClick={() => handleLink(item, navItem)} className={`itemLink ${activeLink === item.id && "active_Link"}`}>{item.subLinkName}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                    
                                </li>
                            ))}
                        </ul>
                        <div className='d-xl-none mobileMenu'>
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
        </Navbar>
    )
}

export default HeaderNavbar
