import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  root: {
    padding: '80px 20px',
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
    backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      zIndex: 1,
    },
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 1300,
    margin: '0 auto',
  },
  heading: {
    fontSize: 48,
    fontWeight: 900,
    marginBottom: 20,
    color: '#c62828',
    letterSpacing: 2,
    textShadow: '2px 2px 8px #ffd70055',
  },
  banner: {
    background: 'linear-gradient(90deg, #ffd700 0%, #fffbe7 100%)',
    color: '#c62828',
    borderRadius: 18,
    padding: '32px 24px',
    marginBottom: 40,
    boxShadow: '0 4px 24px rgba(255, 215, 0, 0.13)',
    fontSize: 24,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    justifyContent: 'center',
  },
  timeline: {
    margin: '60px auto 40px auto',
    maxWidth: 900,
    borderLeft: '4px solid #ffd700',
    paddingLeft: 32,
    position: 'relative',
  },
  timelineItem: {
    marginBottom: 36,
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: -44,
    top: 0,
    width: 28,
    height: 28,
    background: '#ffd700',
    borderRadius: '50%',
    border: '3px solid #c62828',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    color: '#c62828',
    fontWeight: 900,
    boxShadow: '0 2px 8px #ffd70055',
  },
  highlightsSection: {
    margin: '60px auto 40px auto',
    maxWidth: 1100,
    background: 'rgba(255, 215, 0, 0.08)',
    borderRadius: 16,
    padding: 32,
    boxShadow: '0 4px 24px rgba(255, 215, 0, 0.09)',
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 32,
    marginTop: 18,
  },
  highlightCard: {
    background: '#fff',
    borderRadius: 12,
    padding: 20,
    boxShadow: '0 2px 8px #ffd70022',
    textAlign: 'center',
    border: '1px solid #ffe082',
  },
  highlightIcon: {
    fontSize: 36,
    marginBottom: 10,
    color: '#c62828',
  },
  ctaSection: {
    margin: '60px auto 0 auto',
    maxWidth: 700,
    background: 'linear-gradient(90deg, #ffd700 0%, #fffbe7 100%)',
    borderRadius: 18,
    padding: '32px 24px',
    boxShadow: '0 4px 24px rgba(255, 215, 0, 0.13)',
    textAlign: 'center',
    color: '#c62828',
    fontWeight: 700,
    fontSize: 22,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 40,
    maxWidth: 800,
    margin: '0 auto 40px auto',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 40,
    paddingTop: 20,
    maxWidth: 1200,
    margin: '0 auto',
  },
  card: {
    padding: 24,
    backgroundColor: '#fdf6f0',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    textAlign: 'left',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: '#c62828',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
});

const About: React.FC = () => {
  const classes = useStyles;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.contentWrapper}>
          {/* Welcome Banner */}
          <div className={classes.banner}>
            <span role="img" aria-label="ganesha">🪔</span>
            <span>आपले स्वागत आहे! सिद्धिविनायक युवा मंच, बेलापूर</span>
            <span role="img" aria-label="ganesha">🌺</span>
          </div>
          <h1 className={classes.heading}>मंडळाबद्दल</h1>
          <p className={classes.subheading}>
            सिद्धिविनायक युवा मंच हे अहमदनगर जिल्ह्यातील बेलापूर येथील एक अग्रगण्य गणेश मंडळ असून, सामाजिक बांधिलकी, सांस्कृतिक कार्यक्रम आणि भक्तिमय गणेशोत्सवाचे आयोजन हे आमचे प्रमुख उद्दिष्ट आहे. आमचा रजिस्ट्रेशन नंबर: <b>NK. MH/595/2011/AH</b>
          </p>

          {/* Timeline Section */}
          <div className={classes.timeline}>
            <div className={classes.timelineItem}>
              <div className={classes.timelineDot}>2011</div>
              <div><b>स्थापना:</b> मंडळाची स्थापना आणि पहिला गणेशोत्सव.</div>
            </div>
            <div className={classes.timelineItem}>
              <div className={classes.timelineDot}>2014</div>
              <div><b>पहिली वृक्षारोपण मोहीम:</b> सामाजिक उपक्रमांची सुरुवात.</div>
            </div>
            <div className={classes.timelineItem}>
              <div className={classes.timelineDot}>2017</div>
              <div><b>महिला सक्षमीकरण:</b> महिला व्याख्यानमालेचे आयोजन.</div>
            </div>
            <div className={classes.timelineItem}>
              <div className={classes.timelineDot}>2020</div>
              <div><b>डिजिटल गणेशोत्सव:</b> ऑनलाईन कार्यक्रम आणि डिजिटल सहभाग.</div>
            </div>
            <div className={classes.timelineItem}>
              <div className={classes.timelineDot}>2024</div>
              <div><b>500+ झाडे लावली:</b> हरित उपक्रमात मोठी भर.</div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className={classes.highlightsSection}>
            <h2 style={{ color: '#c62828', fontWeight: 800, marginBottom: 18 }}>आमच्या प्रमुख वैशिष्ट्ये</h2>
            <div className={classes.highlightsGrid}>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🌳</div>
                <div>500+ झाडे लावली</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>👥</div>
                <div>50+ सक्रिय सदस्य</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🎉</div>
                <div>13+ वर्षांचा अनुभव</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🏆</div>
                <div>20+ मुलांच्या स्पर्धा</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🩸</div>
                <div>10+ रक्तदान शिबिर</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🌿</div>
                <div>पर्यावरणपूरक उपक्रम</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>📚</div>
                <div>शैक्षणिक मदत व मार्गदर्शन</div>
              </div>
              <div className={classes.highlightCard}>
                <div className={classes.highlightIcon}>🤝</div>
                <div>समाजसेवा आणि एकात्मता</div>
              </div>
            </div>
          </div>

          {/* Existing Content Cards */}
          <div className={classes.contentGrid}>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>आमचे ध्येय</h3>
              <p className={classes.cardText}>
                समाजात भक्ती, संस्कृती आणि ऐक्याची भावना निर्माण करणे आणि गणेशोत्सवाच्या माध्यमातून सकारात्मक ऊर्जा पसरवणे.
              </p>
            </div>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>आमची दृष्टिकोन</h3>
              <p className={classes.cardText}>
                युवा पिढीला एकत्र आणणारे, सामाजिक उपक्रमांना चालना देणारे आणि प्रेरणादायी उपक्रम राबवणारे मंडळ बनणे.
              </p>
            </div>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>आमच्या मूल्यांची शिदोरी</h3>
              <p className={classes.cardText}>
                भक्ती, पारदर्शकता, समाजसेवा आणि एकात्मता ही आमच्या कार्यपद्धतीची मूलभूत तत्त्वे आहेत.
              </p>
            </div>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>आमचा इतिहास</h3>
              <p className={classes.cardText}>
                2011 मध्ये स्थापन झालेले हे मंडळ आज बेलापूर परिसरातील सर्वात मोठे आणि सक्रिय मंडळ बनले आहे. रजिस्ट्रेशन नंबर NK. MH/595/2011/AH सह नोंदणीकृत आमचे मंडळ 13 वर्षांपासून निरंतर सेवेत आहे.
              </p>
            </div>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>सामाजिक जबाबदारी</h3>
              <p className={classes.cardText}>
                शिक्षण, आरोग्य, पर्यावरण आणि सामाजिक न्यायासाठी आम्ही नियमित उपक्रम राबवतो. महिला सक्षमीकरणासाठी विशेष व्याख्यानमालेचे आयोजन.
              </p>
            </div>
            <div className={classes.card}>
              <h3 className={classes.cardTitle}>भविष्याची योजना</h3>
              <p className={classes.cardText}>
                डिजिटल युगात पारंपरिक मूल्यांना जपून, आधुनिक तंत्रज्ञानाचा वापर करत समाजसेवा करणे.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className={classes.ctaSection}>
            <span role="img" aria-label="join">🙏</span> आमच्या सेवाभावी कार्यात सहभागी व्हा! <span role="img" aria-label="tree">🌳</span> <br />
            <span style={{ fontSize: 18, fontWeight: 400 }}>संपर्क: <b>rohit@siddhivinayak.com</b> | <b>+91 9766599007</b></span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
