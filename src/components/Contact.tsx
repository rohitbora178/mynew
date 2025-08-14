import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  banner: {
    background: 'linear-gradient(to right, #c62828, #8e0000)', // Red tone for Ganpati theme
    color: '#fff',
    padding: '100px 20px 60px',
    textAlign: 'center',
  },
  bannerHeading: {
    fontSize: 44,
    fontWeight: 800,
    marginBottom: 10,
  },
  bannerSubheading: {
    fontSize: 20,
    fontWeight: 400,
    maxWidth: 700,
    margin: '0 auto',
  },
  container: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  formCard: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 16,
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  input: {
    padding: '14px 18px',
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid #ccc',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#c62828',
      boxShadow: '0 0 0 3px rgba(198,40,40,0.2)',
    },
  },
  textarea: {
    resize: 'vertical',
    minHeight: 120,
    fontFamily: "'Nunito Sans', sans-serif",
  },
  button: {
    backgroundColor: '#c62828',
    color: '#fff',
    padding: '14px 20px',
    fontSize: 16,
    fontWeight: 600,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#8e0000',
    },
  },
  success: {
    textAlign: 'center',
    color: '#28a745',
    fontWeight: 600,
  },
  infoSection: {
    backgroundColor: '#f8f9fa',
    padding: '60px 20px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 40,
    maxWidth: 1200,
    margin: '0 auto',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  infoIcon: {
    fontSize: 48,
    marginBottom: 20,
    color: '#c62828',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 28,
  },
  mapSection: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  mapTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 40,
    color: '#c62828',
  },
  mapPlaceholder: {
    height: 400,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#666',
    maxWidth: 800,
    margin: '0 auto',
  },
});

const Contact: React.FC = () => {
  const classes = useStyles;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!');
    // Reset form fields if needed
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Header/Banner */}
      <div className={classes.banner}>
        <h1 className={classes.bannerHeading}>संपर्क साधा</h1>
        <p className={classes.bannerSubheading}>
          तुम्ही कार्यक्रमासाठी, सूचना किंवा शुभेच्छांसाठी आमच्याशी संपर्क करू शकता. आम्हाला तुमचं मनापासून स्वागत आहे!
        </p>
      </div>

      {/* Contact Form */}
      <div className={classes.container}>
        <form className={classes.formCard} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="तुमचं नाव"
            required
            className={classes.input}
          />
          <input
            type="email"
            placeholder="तुमचा ई-मेल"
            required
            className={classes.input}
          />
          <input
            type="tel"
            placeholder="तुमचा फोन नंबर"
            className={classes.input}
          />
          <textarea
            placeholder="तुमचा संदेश"
            required
            className={`${classes.input} ${classes.textarea}`}
          />
          <button type="submit" className={classes.button}>
            संदेश पाठवा
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className={classes.infoSection}>
        <div className={classes.infoGrid}>
          <div className={classes.infoCard}>
            <div className={classes.infoIcon}>📍</div>
            <h3 className={classes.infoTitle}>आमचा पत्ता</h3>
            <p className={classes.infoText}>
              सिद्धिविनायक युवा मंच<br />
              सेक्टर 15, बेलापूर<br />
              नवी मुंबई - 400614<br />
              महाराष्ट्र, भारत
            </p>
          </div>
          
          <div className={classes.infoCard}>
            <div className={classes.infoIcon}>📞</div>
            <h3 className={classes.infoTitle}>फोन नंबर</h3>
            <p className={classes.infoText}>
              मुख्य कार्यालय: +91 98765 43210<br />
              अध्यक्ष: +91 98765 43211<br />
              सचिव: +91 98765 43212<br />
              आपत्कालीन: +91 98765 43213
            </p>
          </div>
          
          <div className={classes.infoCard}>
            <div className={classes.infoIcon}>✉️</div>
            <h3 className={classes.infoTitle}>ई-मेल</h3>
            <p className={classes.infoText}>
              मुख्य: info@siddhivinayak.com<br />
              कार्यक्रम: events@siddhivinayak.com<br />
              सदस्यत्व: membership@siddhivinayak.com<br />
              सहकार्य: support@siddhivinayak.com
            </p>
          </div>
          
          <div className={classes.infoCard}>
            <div className={classes.infoIcon}>🕐</div>
            <h3 className={classes.infoTitle}>कार्यालयीन वेळ</h3>
            <p className={classes.infoText}>
              सोमवार - शुक्रवार: 10:00 - 18:00<br />
              शनिवार: 10:00 - 16:00<br />
              रविवार: बंद<br />
              गणेशोत्सवात: 24/7
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={classes.mapSection}>
        <h2 className={classes.mapTitle}>आमचे स्थान</h2>
        <div className={classes.mapPlaceholder}>
          🗺️ इंटरऍक्टिव्ह नकाशा येथे दिसेल
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
