import React, { useState } from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  root: {
    backgroundColor: '#fff',
    color: '#333',
  },
  hero: {
    background: 'linear-gradient(135deg, #4a90e2, #357abd)',
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
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 20,
    color: '#c62828',
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 60,
    maxWidth: 800,
    margin: '0 auto 60px auto',
    textAlign: 'center',
  },
  eventsContainer: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  eventsTabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 50,
    gap: 20,
  },
  tab: {
    padding: '12px 24px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    borderRadius: 25,
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 500,
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  activeTab: {
    backgroundColor: '#c62828',
    color: '#fff',
    ':hover': {
      backgroundColor: '#a01f1f',
    },
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: 30,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
    },
  },
  eventImage: {
    width: '100%',
    height: 200,
    background: 'linear-gradient(45deg, #ff6b35, #ff9a56)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    color: '#fff',
  },
  eventContent: {
    padding: 24,
  },
  eventDate: {
    fontSize: 14,
    color: '#c62828',
    fontWeight: 600,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 12,
    color: '#333',
    lineHeight: 24,
  },
  eventDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  eventLocation: {
    fontSize: 14,
    color: '#999',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  eventStatus: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 600,
    marginTop: 12,
  },
  statusUpcoming: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  statusCompleted: {
    backgroundColor: '#e8f5e8',
    color: '#388e3c',
  },
  statusOngoing: {
    backgroundColor: '#fff3e0',
    color: '#f57c00',
  },
  timelineSection: {
    backgroundColor: '#f8f9fa',
  },
  timeline: {
    maxWidth: 800,
    margin: '0 auto',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 2,
      backgroundColor: '#c62828',
      transform: 'translateX(-50%)',
    },
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  timelineContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '45%',
    position: 'relative',
  },
  timelineLeft: {
    marginRight: 'auto',
    textAlign: 'right',
  },
  timelineRight: {
    marginLeft: 'auto',
    textAlign: 'left',
  },
  timelineDot: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 16,
    height: 16,
    backgroundColor: '#c62828',
    borderRadius: '50%',
    zIndex: 2,
  },
});

const Events: React.FC = () => {
  const classes = useStyles;
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'ongoing'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'गणेशोत्सव 2025 - तयारी बैठक',
      date: '15 ऑगस्ट 2025',
      description: 'यावर्षीच्या गणेशोत्सवासाठी नियोजन आणि तयारीची चर्चा',
      location: '📍 मंडळ कार्यालय, बेलापूर',
      status: 'upcoming',
      icon: '📋',
    },
    {
      id: 2,
      title: 'वृक्षारोपण मोहीम',
      date: '22 ऑगस्ट 2025',
      description: '100 झाडे लावण्याचा उपक्रम - पर्यावरण संवर्धनासाठी',
      location: '📍 सेक्टर 15, बेलापूर',
      status: 'upcoming',
      icon: '🌱',
    },
    {
      id: 3,
      title: 'गणेश चतुर्थी महोत्सव',
      date: '29 ऑगस्ट 2025',
      description: 'मुख्य गणेशोत्सवाचा प्रारंभ - 11 दिवसीय महोत्सव',
      location: '📍 मुख्य मंडप, बेलापूर',
      status: 'upcoming',
      icon: '🎪',
    },
    {
      id: 4,
      title: 'बाल कलावंत स्पर्धा',
      date: '2 सप्टेंबर 2025',
      description: 'मुलांसाठी नृत्य, गायन आणि चित्रकला स्पर्धा',
      location: '📍 सांस्कृतिक केंद्र',
      status: 'upcoming',
      icon: '🎭',
    },
  ];

  const ongoingEvents = [
    {
      id: 5,
      title: 'स्वच्छता अभियान',
      date: 'चालू आहे',
      description: 'दररोज सकाळी परिसर स्वच्छतेचे काम',
      location: '📍 संपूर्ण बेलापूर',
      status: 'ongoing',
      icon: '🧹',
    },
  ];

  const pastEvents = [
    {
      id: 6,
      title: 'गणेशोत्सव 2024',
      date: '7-17 सप्टेंबर 2024',
      description: 'यशस्वी गणेशोत्सव - 50,000+ भक्तांची उपस्थिती',
      location: '📍 मुख्य मंडप, बेलापूर',
      status: 'completed',
      icon: '🎉',
    },
    {
      id: 7,
      title: 'शाळा भेट कार्यक्रम',
      date: '15 जानेवारी 2024',
      description: 'स्थानिक शाळांमध्ये पर्यावरण जागरूकता कार्यक्रम',
      location: '📍 विविध शाळा',
      status: 'completed',
      icon: '🏫',
    },
    {
      id: 8,
      title: 'वृक्षारोपण मोहीम 2024',
      date: '22 एप्रिल 2024',
      description: '500 झाडे लावली - पृथ्वी दिनाच्या निमित्ताने',
      location: '📍 सेक्टर 11, बेलापूर',
      status: 'completed',
      icon: '🌳',
    },
  ];

  const timelineEvents = [
    { year: '2024', event: 'गणेशोत्सव 2024 - 50,000+ भक्त', side: 'left' },
    { year: '2023', event: 'वृक्षारोपण मोहीम - 300 झाडे', side: 'right' },
    { year: '2022', event: 'कोविड काळातील डिजिटल उत्सव', side: 'left' },
    { year: '2021', event: 'मंडळाची स्थापना आणि पहिला उत्सव', side: 'right' },
  ];

  const getCurrentEvents = () => {
    switch (activeTab) {
      case 'upcoming':
        return upcomingEvents;
      case 'ongoing':
        return ongoingEvents;
      case 'past':
        return pastEvents;
      default:
        return upcomingEvents;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'upcoming':
        return classes.statusUpcoming;
      case 'ongoing':
        return classes.statusOngoing;
      case 'completed':
        return classes.statusCompleted;
      default:
        return classes.statusUpcoming;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'आगामी';
      case 'ongoing':
        return 'चालू आहे';
      case 'completed':
        return 'संपन्न';
      default:
        return 'आगामी';
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>कार्यक्रम आणि उपक्रम</h1>
          <p className={classes.heroSubtitle}>
            आमच्या मंडळाच्या विविध कार्यक्रमांची संपूर्ण माहिती
          </p>
        </div>

        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>कार्यक्रमांचे विभाग</h2>
          <div className={classes.eventsContainer}>
            <div className={classes.eventsTabs}>
              <button
                className={`${classes.tab} ${activeTab === 'upcoming' ? classes.activeTab : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                आगामी कार्यक्रम
              </button>
              <button
                className={`${classes.tab} ${activeTab === 'ongoing' ? classes.activeTab : ''}`}
                onClick={() => setActiveTab('ongoing')}
              >
                चालू उपक्रम
              </button>
              <button
                className={`${classes.tab} ${activeTab === 'past' ? classes.activeTab : ''}`}
                onClick={() => setActiveTab('past')}
              >
                मागील कार्यक्रम
              </button>
            </div>

            <div className={classes.eventsGrid}>
              {getCurrentEvents().map((event) => (
                <div key={event.id} className={classes.eventCard}>
                  <div className={classes.eventImage}>
                    {event.icon}
                  </div>
                  <div className={classes.eventContent}>
                    <div className={classes.eventDate}>{event.date}</div>
                    <h3 className={classes.eventTitle}>{event.title}</h3>
                    <p className={classes.eventDescription}>{event.description}</p>
                    <div className={classes.eventLocation}>{event.location}</div>
                    <span className={`${classes.eventStatus} ${getStatusClass(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${classes.section} ${classes.timelineSection}`}>
          <h2 className={classes.sectionTitle}>आमचा प्रवास</h2>
          <p className={classes.sectionSubtitle}>
            मंडळाच्या स्थापनेपासून आजपर्यंतचा इतिहास
          </p>
          <div className={classes.timeline}>
            {timelineEvents.map((item, index) => (
              <div key={index} className={classes.timelineItem}>
                <div 
                  className={`${classes.timelineContent} ${
                    item.side === 'left' ? classes.timelineLeft : classes.timelineRight
                  }`}
                >
                  <h4 style={{ color: '#c62828', fontSize: 18, marginBottom: 8 }}>{item.year}</h4>
                  <p style={{ margin: 0, color: '#666' }}>{item.event}</p>
                </div>
                <div className={classes.timelineDot}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
