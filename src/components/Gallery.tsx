import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  root: {
    backgroundColor: '#fff',
    color: '#333',
  },
  hero: {
    background: 'linear-gradient(135deg, #8e24aa, #ba68c8)',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 800,
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 24,
    fontWeight: 300,
    maxWidth: 800,
    margin: '0 auto',
  },
  section: {
    padding: '80px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 20,
    color: '#c62828',
  },
  sectionSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 60,
    maxWidth: 800,
    margin: '0 auto 60px auto',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
    maxWidth: 1200,
    margin: '0 auto',
  },
  galleryItem: {
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  galleryImage: {
    width: '100%',
    height: 250,
    background: 'linear-gradient(45deg, #ff6b35, #ff9a56)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    color: '#fff',
  },
  placeholder: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#666',
    fontSize: 18,
  },
});

const Gallery: React.FC = () => {
  const classes = useStyles;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>फोटो गॅलरी</h1>
          <p className={classes.heroSubtitle}>
            आमच्या गणेशोत्सव आणि सामाजिक कार्यक्रमांच्या आठवणी
          </p>
        </div>

        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>गणेशोत्सव 2024</h2>
          <p className={classes.sectionSubtitle}>
            मागील वर्षीच्या गणेशोत्सवाच्या सुंदर क्षणांचे चित्र
          </p>
          <div className={classes.galleryGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={classes.galleryItem}>
                <div className={classes.galleryImage}>
                  📸
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>सामाजिक कार्यक्रम</h2>
          <p className={classes.sectionSubtitle}>
            रक्तदान, वृक्षारोपण आणि इतर समाजसेवा कार्यक्रम
          </p>
          <div className={classes.galleryGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={classes.galleryItem}>
                <div className={classes.galleryImage}>
                  🤝
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.placeholder}>
          <p>🔄 गॅलरी लवकरच अपडेट होईल...</p>
          <p>अधिक फोटो आणि व्हिडिओसाठी संपर्क साधा</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
