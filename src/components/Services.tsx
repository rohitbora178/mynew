import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';
import image1 from '../images/image 1.jpg';
import image2 from '../images/image 2.jpg';
import image3 from '../images/image 3.jpg';
import image4 from '../images/image 4.jpg';
import image5 from '../images/image 5.jpg';

const useStyles = mergeStyleSets({
  root: {
    backgroundColor: '#fff',
    color: '#333',
  },
  hero: {
    background: 'linear-gradient(135deg, #ff6b35, #ff9a56)',
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
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 40,
    maxWidth: 1200,
    margin: '0 auto',
  },
  serviceCard: {
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f0f0f0',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
    },
  },
  serviceIcon: {
    fontSize: 48,
    marginBottom: 20,
    color: '#ff6b35',
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 15,
    color: '#333',
  },
  serviceDescription: {
    fontSize: 16,
    lineHeight: 1.6,
    color: '#666',
    marginBottom: 20,
  },
  serviceFeatures: {
    textAlign: 'left',
    fontSize: 14,
    color: '#777',
  },
  gallerySection: {
    backgroundColor: '#f8f9fa',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20,
    maxWidth: 1200,
    margin: '0 auto',
  },
  galleryItem: {
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  galleryImage: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
  },
  pricingSection: {
    backgroundColor: '#fff',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 30,
    maxWidth: 1000,
    margin: '0 auto',
  },
  pricingCard: {
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    border: '2px solid #f0f0f0',
    textAlign: 'center',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      borderColor: '#ff6b35',
    },
  },
  pricingTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
    color: '#333',
  },
  pricingPrice: {
    fontSize: 32,
    fontWeight: 800,
    color: '#ff6b35',
    marginBottom: 20,
  },
  pricingFeatures: {
    textAlign: 'left',
    fontSize: 14,
    color: '#666',
    lineHeight: 1.8,
  },
});

const Services: React.FC = () => {
  const classes = useStyles;

  const services = [
    {
      icon: '🎪',
      title: 'गणेशोत्सव आयोजन',
      description: 'संपूर्ण गणेशोत्सवाचे व्यावसायिक आयोजन आम्ही करतो.',
      features: [
        '• मंडप निर्मिती आणि सजावट',
        '• ध्वनि व प्रकाश व्यवस्था',
        '• सांस्कृतिक कार्यक्रम आयोजन',
        '• सुरक्षा व्यवस्था',
      ],
    },
    {
      icon: '📸',
      title: 'छायाचित्रण सेवा',
      description: 'गणेशोत्सवाच्या प्रत्येक क्षणाचे व्यावसायिक छायाचित्रण.',
      features: [
        '• HD व 4K व्हिडिओग्राफी',
        '• ड्रोन छायाचित्रण',
        '• लाईव्ह स्ट्रीमिंग',
        '• फोटो एडिटिंग सेवा',
      ],
    },
    {
      icon: '🎨',
      title: 'कलात्मक सजावट',
      description: 'पारंपरिक आणि आधुनिक कलाकृतींचा अप्रतिम मेळ.',
      features: [
        '• थीम आधारित डिझाइन',
        '• फुलांची सजावट',
        '• LED डिस्प्ले',
        '• इको-फ्रेंडली मटेरियल',
      ],
    },
    {
      icon: '🎵',
      title: 'सांस्कृतिक कार्यक्रम',
      description: 'भक्तिगीते, नृत्य आणि नाटकांचे आयोजन.',
      features: [
        '• स्थानिक कलाकारांना प्रोत्साहन',
        '• शास्त्रीय संगीत कार्यक्रम',
        '• बाल कलावंतांचे सादरीकरण',
        '• इंटरैक्टिव्ह कार्यक्रम',
      ],
    },
    {
      icon: '📚',
      title: 'स्मरणिका निर्मिती',
      description: 'गणेशोत्सवाच्या आठवणींची सुंदर स्मरणिका.',
      features: [
        '• डिजिटल आणि प्रिंट अल्बम',
        '• पर्सनलाइज्ड डिझाइन',
        '• हाय क्वालिटी प्रिंटिंग',
        '• ऑनलाइन शेअरिंग',
      ],
    },
    {
      icon: '🌱',
      title: 'पर्यावरण संवर्धन',
      description: 'इको-फ्रेंडली गणेशोत्सवाचे आयोजन.',
      features: [
        '• मातीच्या गणेशमूर्तींचा वापर',
        '• नैसर्गिक रंगांची सजावट',
        '• कचरा व्यवस्थापन',
        '• वृक्षारोपण मोहीम',
      ],
    },
  ];

  const galleryImages = [image1, image2, image3, image4, image5];

  const pricingPlans = [
    {
      title: 'बेसिक पॅकेज',
      price: '₹25,000',
      features: [
        '• छोटे मंडप निर्मिती',
        '• बेसिक सजावट',
        '• फोटोग्राफी (4 तास)',
        '• सरळ ध्वनि व्यवस्था',
        '• डिजिटल अल्बम',
      ],
    },
    {
      title: 'स्टँडर्ड पॅकेज',
      price: '₹50,000',
      features: [
        '• मध्यम मंडप निर्मिती',
        '• थीम आधारित सजावट',
        '• फोटो + व्हिडिओग्राफी',
        '• उन्नत ध्वनि व्यवस्था',
        '• लाइव्ह स्ट्रीमिंग',
        '• फिजिकल अल्बम',
      ],
    },
    {
      title: 'प्रीमियम पॅकेज',
      price: '₹1,00,000',
      features: [
        '• मोठे मंडप निर्मिती',
        '• लक्झरी सजावट',
        '• संपूर्ण कव्हरेज',
        '• प्रोफेशनल लाइटिंग',
        '• सांस्कृतिक कार्यक्रम',
        '• कस्टम स्मरणिका',
      ],
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>आमच्या सेवा</h1>
          <p className={classes.heroSubtitle}>
            गणेशोत्सवाच्या प्रत्येक क्षणाला यादगार बनवण्यासाठी आम्ही आहोत तुमच्या सेवेत
          </p>
        </div>

        <div className={`${classes.section}`}>
          <h2 className={classes.sectionTitle}>आमच्या मुख्य सेवा</h2>
          <p className={classes.sectionSubtitle}>
            गणेशोत्सवापासून ते वृक्षारोपणापर्यंत - आम्ही प्रत्येक सेवेत उत्कृष्टता आणतो
          </p>
          <div className={classes.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={classes.serviceCard}>
                <div className={classes.serviceIcon}>{service.icon}</div>
                <h3 className={classes.serviceTitle}>{service.title}</h3>
                <p className={classes.serviceDescription}>{service.description}</p>
                <div className={classes.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.gallerySection}`}>
          <h2 className={classes.sectionTitle}>आमचे कार्याचे नमुने</h2>
          <p className={classes.sectionSubtitle}>
            मागील वर्षांतील काही उत्कृष्ट क्षणांची झलक
          </p>
          <div className={classes.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div key={index} className={classes.galleryItem}>
                <img 
                  src={image} 
                  alt={`गणेशोत्सव छायाचित्र ${index + 1}`} 
                  className={classes.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.pricingSection}`}>
          <h2 className={classes.sectionTitle}>आमचे पॅकेजेस</h2>
          <p className={classes.sectionSubtitle}>
            तुमच्या गरजेनुसार आणि बजेटनुसार योग्य पॅकेज निवडा
          </p>
          <div className={classes.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={classes.pricingCard}>
                <h3 className={classes.pricingTitle}>{plan.title}</h3>
                <div className={classes.pricingPrice}>{plan.price}</div>
                <div className={classes.pricingFeatures}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} style={{lineHeight: 1.8}}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
