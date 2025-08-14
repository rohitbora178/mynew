/* eslint-disable */

import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { useNavigate } from 'react-router-dom';

const useStyles = mergeStyleSets({
  footer: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  column: {
    flex: '1 1 200px',
    minWidth: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
    color: '#00b2ff',
  },
  link: {
    display: 'block',
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      color: '#00b2ff',
      textDecoration: 'underline',
      transform: 'translateX(5px)',
    },
  },
  contact: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 6,
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#00b2ff',
    },
  },
  bottomBar: {
    textAlign: 'center',
    borderTop: '1px solid #333',
    paddingTop: 20,
    color: '#777',
    fontSize: 13,
  },
  socialSection: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1px solid #333',
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 15,
    color: '#00b2ff',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 20px',
    backgroundColor: '#333',
    borderRadius: 25,
    textDecoration: 'none',
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    },
  },
  facebookLink: {
    ':hover': {
      backgroundColor: '#1877f2',
      boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)',
    },
  },
  instagramLink: {
    ':hover': {
      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      boxShadow: '0 4px 12px rgba(225, 48, 108, 0.3)',
    },
  },
  facebookIcon: {
    fontSize: 18,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handlePhoneCall = () => {
    window.open('tel:+919766599007', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:siddhivinayakyuvamanch@gmail.com', '_self');
  };

  const handleMapsLocation = () => {
    window.open('https://maps.google.com/?q=Belapur,Maharashtra', '_blank');
  };

  const handleFacebookLink = () => {
    window.open('https://www.facebook.com/siddhivinayak.yuva.manch.2025', '_blank');
  };

  const handleInstagramLink = () => {
    window.open('https://www.instagram.com/siddhivinayakyuvamanch/', '_blank');
  };

  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.column}>
          <div className={classes.title}>आमच्या सेवा</div>
          <a className={classes.link} onClick={() => handleNavigation('/services')}>गणेशोत्सव आयोजन</a>
          <a className={classes.link} onClick={() => handleNavigation('/services')}>सांस्कृतिक कार्यक्रम</a>
          <a className={classes.link} onClick={() => handleNavigation('/services')}>छायाचित्रण व व्हिडिओ</a>
          <a className={classes.link} onClick={() => handleNavigation('/services')}>स्मरणिका व अल्बम</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>गॅलरी</div>
          <a className={classes.link} onClick={() => handleNavigation('/gallery')}>फोटो गॅलरी</a>
          <a className={classes.link} onClick={() => handleNavigation('/gallery')}>व्हिडिओ गॅलरी</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>मंडळाबद्दल</div>
          <a className={classes.link} onClick={() => handleNavigation('/about')}>इतिहास</a>
          <a className={classes.link} onClick={() => handleNavigation('/contact')}>संपर्क करा</a>
          <a className={classes.link} onClick={() => handleNavigation('/team')}>कार्यकारी मंडळ</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>संपर्क</div>
          <div className={classes.contact} onClick={handleMapsLocation}>📍 बेलापूर, महाराष्ट्र</div>
          <div className={classes.contact} onClick={handlePhoneCall}>📞 +91 9766599007</div>
          <div className={classes.contact} onClick={handleEmail}>📧 siddhivinayakyuvamanch@gmail.com</div>
        </div>

        <div className={classes.socialSection}>
          <div className={classes.socialTitle}>आमच्याशी जुडा</div>
          <div className={classes.socialLinks}>
            <div className={`${classes.socialLink} ${classes.facebookLink}`} onClick={handleFacebookLink}>
              <span className={classes.facebookIcon}>📘</span>
              Facebook वर फॉलो करा
            </div>
            <div className={`${classes.socialLink} ${classes.instagramLink}`} onClick={handleInstagramLink}>
              <span className={classes.facebookIcon}>📷</span>
              Instagram वर फॉलो करा
            </div>
          </div>
        </div>
      </div>

      <div className={classes.bottomBar}>
        © {new Date().getFullYear()} सिद्धिविनायक युवा मंच. सर्व हक्क राखीव.
      </div>
    </footer>
  );
};

export default Footer;
