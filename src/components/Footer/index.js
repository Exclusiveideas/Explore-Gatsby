import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { FooterContainer, SocialIcon, SocialIconlink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                    EXPLORE
                </SocialLogo>
                <WebsiteRight> EXPLORE &copy; {new Date().getFullYear()}</WebsiteRight>
                <SocialIcons>
                    <SocialIconlink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconlink>
                    <SocialIconlink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconlink>
                    <SocialIconlink href="/" target="_blank" aria-label="Youtube" >
                        <FaYoutube />
                    </SocialIconlink>
                    <SocialIconlink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconlink>
                    <SocialIconlink href="/" target="_blank" aria-label="Linkedln">
                        <FaLinkedinIn />
                    </SocialIconlink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer