import React from 'react';
import { BiLogoLinkedin,BiLogoUpwork,BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi';


const SocialLinks = () => {

    const socialLinks = [
        {
            title:'Upwork',
            link:'https://www.upwork.com/agencies/wtechy/',
            icon: BiLogoUpwork
        },
        {
            title:'Facebook',
            link:'https://www.facebook.com/wtechy/',
            icon: BiLogoFacebook
        },
        {
            title:'Twitter',
            link:'https://twitter.com/w_techy',
            icon: BiLogoTwitter
        },
        {
            title:'Linkedin',
            link:'https://in.linkedin.com/company/wtechy',
            icon: BiLogoLinkedin
        },
        
    ];



    return (
        <ul className='socialMediaList'>
            {socialLinks.map((item, index) => (
                <li key={index}>
                    <a title={item.title} href={item.link}  target='_blank' rel='noreferrer'>
                        {item.icon && <item.icon />} {/* Render the icon component if it's provided */}
                    </a>
                </li>
            ))}
        </ul>
    );

};


export default SocialLinks;