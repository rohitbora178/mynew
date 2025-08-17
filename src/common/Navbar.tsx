/* eslint-disable */

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Stack,
  IconButton,
  Panel,
  Link,
  mergeStyleSets,
} from '@fluentui/react';
import { initializeIcons } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg'
initializeIcons();

const colors = {
  navbarBg: '#1e1e2f',
  linkDefault: '#61dafb',
  linkHover: '#21a1f1',
  panelBg: '#292b3e',
  textPrimary: '#ffffff',
  brandColor: '#f54291',
};

const styles = mergeStyleSets({
  navbar: {
    background: 'rgba(30,30,47,0.85)',
    color: colors.textPrimary,
    padding: '0 32px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 24px rgba(79,140,255,0.10)',
    backdropFilter: 'blur(8px)',
    borderRadius: '0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    transition: 'background 0.3s',
  },
  logoImage: {
    height: 48,
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(245,66,145,0.10)',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.07) rotate(-2deg)',
    },
  },
  navLinks: {
    display: 'flex',
    gap: 40,
  },
  panelLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 24,
  },
  link: {
    color: colors.linkDefault,
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: 0.5,
    position: 'relative',
    transition: 'color 0.2s',
    selectors: {
      ':hover': {
        color: colors.linkHover,
        textDecoration: 'none',
      },
      '::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: 3,
        background: 'linear-gradient(90deg, #03df20ff 0%, #e9ec12ff 100%)',
        borderRadius: 2,
        transition: 'width 0.3s',
        position: 'absolute',
        left: 0,
        bottom: -6,
      },
      ':hover::after': {
        width: '100%',
      },
    },
  },
  hamburgerButton: {
    color: colors.textPrimary,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.brandColor,
    userSelect: 'none',
    letterSpacing: 1.2,
  },
});

const MOBILE_BREAKPOINT = 600;

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (navigate: ReturnType<typeof useNavigate>, path: string) => {
    navigate(path);
    if (isPanelOpen) {
      setIsPanelOpen(false);
    }
  };
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const wasMobile = useRef(isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (wasMobile.current && !mobile && isPanelOpen) {
        setIsPanelOpen(false);
      }
      wasMobile.current = mobile;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isPanelOpen]);

  const navItems = (
    <>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/')}>
        होम
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/about')}>
        आमच्याबद्दल
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/services')}>
        सेवा
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/events')}>
        कार्यक्रम
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/team')}>
        टीम
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/blog')}>
        बातम्या
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/contact')}>
        संपर्क
      </Link>
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logoImage}
          onClick={() => navigate('/')}  
        />

        {!isMobile ? (
          <Stack horizontal className={styles.navLinks}>
            {navItems}
          </Stack>
        ) : (
          <IconButton
            iconProps={{ iconName: 'GlobalNavButton' }}
            ariaLabel="Open menu"
            onClick={() => setIsPanelOpen(true)}
            className={styles.hamburgerButton}
          />
        )}
      </nav>

      <Panel
        isOpen={isPanelOpen}
        onDismiss={() => setIsPanelOpen(false)}
        closeButtonAriaLabel="Close"
        headerText=""
        isLightDismiss
        styles={{
          main: { backgroundColor: colors.panelBg },
          headerText: { color: colors.textPrimary, fontWeight: 'bold' },
          closeButton: {
            color: colors.navbarBg,
            selectors: {
              ':hover': {
                color: colors.linkHover,
              },
            },
          },
        }}
      >
        <Stack className={styles.panelLinks}>{navItems}</Stack>
      </Panel>
    </>
  );
};

export default Navbar;
