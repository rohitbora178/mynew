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
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 40,
    maxWidth: 1200,
    margin: '0 auto',
  },
  memberCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f0f0f0',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
    },
  },
  memberImage: {
    width: '100%',
    height: 200,
    background: 'linear-gradient(45deg, #ff6b35, #ff9a56)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 64,
    color: '#fff',
  },
  memberContent: {
    padding: 24,
    textAlign: 'center',
  },
  memberName: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 8,
    color: '#333',
  },
  memberRole: {
    fontSize: 16,
    color: '#c62828',
    fontWeight: 500,
    marginBottom: 12,
  },
  memberDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 1.6,
    marginBottom: 16,
  },
  memberContact: {
    fontSize: 14,
    color: '#999',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  valuesSection: {
    backgroundColor: '#f8f9fa',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 30,
    maxWidth: 1000,
    margin: '0 auto',
  },
  valueCard: {
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 16,
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
    border: '1px solid #f0f0f0',
  },
  valueIcon: {
    fontSize: 48,
    marginBottom: 20,
    color: '#ff6b35',
  },
  valueTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
    color: '#333',
  },
  valueDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  statsSection: {
    backgroundColor: '#fff',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 40,
    maxWidth: 800,
    margin: '0 auto',
    textAlign: 'center',
  },
  statCard: {
    padding: 20,
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 800,
    color: '#c62828',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: 500,
  },
  activitiesSection: {
    backgroundColor: '#f8f9fa',
  },
  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30,
    maxWidth: 1200,
    margin: '0 auto',
  },
  activityCard: {
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 16,
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    border: '1px solid #f0f0f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    },
  },
  activityIcon: {
    fontSize: 48,
    marginBottom: 16,
    color: '#ff6b35',
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 12,
    color: '#333',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  socialWorkSection: {
    backgroundColor: '#fff',
  },
  socialWorkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 30,
    maxWidth: 1000,
    margin: '0 auto',
  },
  socialWorkCard: {
    padding: 30,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    textAlign: 'center',
    border: '2px solid #e9ecef',
    transition: 'all 0.3s ease',
    ':hover': {
      borderColor: '#ff6b35',
      backgroundColor: '#fff',
      transform: 'translateY(-3px)',
    },
  },
});

const Team: React.FC = () => {
  const classes = useStyles;

  const teamMembers = [
    {
      id: 1,
      name: 'राहुल शर्मा',
      role: 'अध्यक्ष',
      description: 'मंडळाचे नेतृत्व आणि संपूर्ण कार्यक्रमांचे नियोजन करतात.',
      phone: '📞 +91 98765 43210',
      email: '✉️ rahul@siddhivinayak.com',
      icon: '👨‍💼',
    },
    {
      id: 2,
      name: 'प्रिया पाटील',
      role: 'सचिव',
      description: 'प्रशासकीय कामे आणि दस्तऐवजीकरणाची जबाबदारी.',
      phone: '📞 +91 98765 43211',
      email: '✉️ priya@siddhivinayak.com',
      icon: '👩‍💼',
    },
    {
      id: 3,
      name: 'अमित कुमार',
      role: 'कोषाध्यक्ष',
      description: 'आर्थिक व्यवस्थापन आणि खर्चाचे हिशेब.',
      phone: '📞 +91 98765 43212',
      email: '✉️ amit@siddhivinayak.com',
      icon: '👨‍💻',
    },
    {
      id: 4,
      name: 'सुनीता देसाई',
      role: 'सांस्कृतिक सचिव',
      description: 'कलाकार संयोजन आणि सांस्कृतिक कार्यक्रमांचे आयोजन.',
      phone: '📞 +91 98765 43213',
      email: '✉️ sunita@siddhivinayak.com',
      icon: '👩‍🎨',
    },
    {
      id: 5,
      name: 'विकास जोशी',
      role: 'तांत्रिक सचिव',
      description: 'ध्वनि, प्रकाश आणि तांत्रिक व्यवस्थेची देखभाल.',
      phone: '📞 +91 98765 43214',
      email: '✉️ vikas@siddhivinayak.com',
      icon: '👨‍🔧',
    },
    {
      id: 6,
      name: 'अनिता वर्मा',
      role: 'सजावट प्रमुख',
      description: 'मंडप सजावट आणि कलात्मक डिझाइनची जबाबदारी.',
      phone: '📞 +91 98765 43215',
      email: '✉️ anita@siddhivinayak.com',
      icon: '👩‍🎨',
    },
    {
      id: 7,
      name: 'संदीप गुप्ता',
      role: 'सुरक्षा प्रमुख',
      description: 'कार्यक्रमादरम्यान सुरक्षा व्यवस्थेची देखभाल.',
      phone: '📞 +91 98765 43216',
      email: '✉️ sandeep@siddhivinayak.com',
      icon: '👮‍♂️',
    },
    {
      id: 8,
      name: 'मीरा रेड्डी',
      role: 'पर्यावरण सचिव',
      description: 'वृक्षारोपण आणि पर्यावरण संवर्धन कार्यक्रम.',
      phone: '📞 +91 98765 43217',
      email: '✉️ meera@siddhivinayak.com',
      icon: '🌱',
    },
  ];

  const organizationalValues = [
    {
      icon: '🙏',
      title: 'भक्ती आणि श्रद्धा',
      description: 'गणेशजीप्रती अटूट भक्ती आणि पारंपरिक मूल्यांचे पालन.',
    },
    {
      icon: '🤝',
      title: 'सामुदायिक एकता',
      description: 'समाजातील सर्व घटकांना एकत्र आणून ऐक्याची भावना निर्माण करणे.',
    },
    {
      icon: '🌿',
      title: 'पर्यावरण संवर्धन',
      description: 'निसर्गाचे संरक्षण आणि भावी पिढीसाठी हरित पर्यावरण.',
    },
    {
      icon: '📚',
      title: 'शिक्षण आणि विकास',
      description: 'युवकांच्या व्यक्तिमत्व विकासासाठी विविध उपक्रम.',
    },
  ];

  const organizationStats = [
    { number: '10+', label: 'वर्षांचा अनुभव' },
    { number: '50K+', label: 'भक्तांची सेवा' },
    { number: '25+', label: 'सक्रिय सदस्य' },
    { number: '500+', label: 'झाडे लावली' },
    { number: '15+', label: 'रक्तदान शिबिर' },
    { number: '3', label: 'पदयात्रा आयोजित' },
  ];

  const festivalActivities = [
    {
      icon: '🚶‍♂️',
      title: 'बेलापूर ते कोल्हार पदयात्रा',
      description: 'गणेशोत्सवाच्या निमित्ताने आयोजित केलेली धार्मिक पदयात्रा जिथे भक्त एकत्र येऊन गणपती बाप्पाची स्तुती करतात.',
    },
    {
      icon: '♟️',
      title: 'बुद्धिबळ स्पर्धा',
      description: 'युवकांच्या बौद्धिक विकासासाठी आयोजित केलेली बुद्धिबळ स्पर्धा. सर्व वयोगटातील सहभागीगण भाग घेऊ शकतात.',
    },
    {
      icon: '🩸',
      title: 'रक्तदान शिबिर',
      description: 'समाजसेवेच्या भावनेतून आयोजित केलेले रक्तदान शिबिर. आजपर्यंत 500+ युनिट रक्त संकलित केले.',
    },
    {
      icon: '🎭',
      title: 'गृहमंत्री खेळ',
      description: 'गणेशोत्सवातील पारंपरिक खेळ जिथे सहभागी गृहमंत्री बनून विविध प्रश्नांची उत्तरे देतात.',
    },
    {
      icon: '🍽️',
      title: 'आम्ही सारे खावय्ये',
      description: 'समुदायिक जेवणाचा कार्यक्रम जिथे सर्व भक्तगण एकत्र येऊन प्रसाद घेतात आणि एकमेकांशी संवाद साधतात.',
    },
    {
      icon: '🎪',
      title: 'सांस्कृतिक कार्यक्रम',
      description: 'नृत्य, संगीत, नाटक यासह विविध सांस्कृतिक कार्यक्रमांचे आयोजन गणेशोत्सवादरम्यान.',
    },
  ];

  const socialWorkInitiatives = [
    {
      icon: '🏥',
      title: 'निःशुल्क आरोग्य तपासणी',
      description: 'गरीब आणि वंचित घटकांसाठी मोफत आरोग्य तपासणी आणि औषध वितरण.',
    },
    {
      icon: '📚',
      title: 'शिक्षण सहाय्य',
      description: 'गरजू विद्यार्थ्यांना शिक्षणासाठी आर्थिक मदत आणि पुस्तके उपलब्ध करून देणे.',
    },
    {
      icon: '🌱',
      title: 'वृक्षारोपण मोहीम',
      description: 'पर्यावरण संवर्धनासाठी नियमित वृक्षारोपण आणि झाडांची काळजी घेणे.',
    },
    {
      icon: '🍲',
      title: 'अन्नदान',
      description: 'गरीब आणि भुकेल्यांना नियमित अन्न पुरवठा आणि गणेशोत्सवात मोफत भोजन.',
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>आमची टीम</h1>
          <p className={classes.heroSubtitle}>
            समर्पित आणि कुशल व्यक्तींची टीम जी गणेशोत्सवाला यशस्वी बनवते
          </p>
        </div>

        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>मुख्य पदाधिकारी</h2>
          <p className={classes.sectionSubtitle}>
            आमच्या मंडळाचे नेतृत्व करणाऱ्या अनुभवी आणि समर्पित व्यक्ती
          </p>
          <div className={classes.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={classes.memberCard}>
                <div className={classes.memberImage}>
                  {member.icon}
                </div>
                <div className={classes.memberContent}>
                  <h3 className={classes.memberName}>{member.name}</h3>
                  <div className={classes.memberRole}>{member.role}</div>
                  <p className={classes.memberDescription}>{member.description}</p>
                  <div className={classes.memberContact}>
                    <span>{member.phone}</span>
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.valuesSection}`}>
          <h2 className={classes.sectionTitle}>आमची मूल्ये</h2>
          <p className={classes.sectionSubtitle}>
            ज्या तत्त्वांवर आमचे संघटन उभे आहे
          </p>
          <div className={classes.valuesGrid}>
            {organizationalValues.map((value, index) => (
              <div key={index} className={classes.valueCard}>
                <div className={classes.valueIcon}>{value.icon}</div>
                <h3 className={classes.valueTitle}>{value.title}</h3>
                <p className={classes.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.statsSection}`}>
          <h2 className={classes.sectionTitle}>आमची कामगिरी</h2>
          <p className={classes.sectionSubtitle}>
            आकडेमोडीत पाहा आमचे यशस्वी कार्य
          </p>
          <div className={classes.statsGrid}>
            {organizationStats.map((stat, index) => (
              <div key={index} className={classes.statCard}>
                <div className={classes.statNumber}>{stat.number}</div>
                <div className={classes.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.activitiesSection}`}>
          <h2 className={classes.sectionTitle}>गणेशोत्सव कार्यक्रम</h2>
          <p className={classes.sectionSubtitle}>
            आमच्या गणेशोत्सवातील विविध कार्यक्रम आणि खेळ
          </p>
          <div className={classes.activitiesGrid}>
            {festivalActivities.map((activity, index) => (
              <div key={index} className={classes.activityCard}>
                <div className={classes.activityIcon}>{activity.icon}</div>
                <h3 className={classes.activityTitle}>{activity.title}</h3>
                <p className={classes.activityDescription}>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${classes.section} ${classes.socialWorkSection}`}>
          <h2 className={classes.sectionTitle}>समाजसेवा उपक्रम</h2>
          <p className={classes.sectionSubtitle}>
            समाजाच्या कल्याणासाठी आमचे योगदान
          </p>
          <div className={classes.socialWorkGrid}>
            {socialWorkInitiatives.map((initiative, index) => (
              <div key={index} className={classes.socialWorkCard}>
                <div className={classes.activityIcon}>{initiative.icon}</div>
                <h3 className={classes.activityTitle}>{initiative.title}</h3>
                <p className={classes.activityDescription}>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
