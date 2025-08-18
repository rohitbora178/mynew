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
    lineHeight: 24,
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
      name: 'गोपाळ जोशी',
      role: 'अध्यक्ष',
      description: 'मंडळाचे नेतृत्व आणि संपूर्ण कार्यक्रमांचे नियोजन करतात. त्यांच्या मार्गदर्शनाखाली मंडळाने अनेक सामाजिक, सांस्कृतिक आणि धार्मिक उपक्रम यशस्वीपणे राबवले आहेत. गोपाळ जोशी हे संघटन कौशल्य, पारदर्शकता आणि सर्वसमावेशक नेतृत्वासाठी ओळखले जातात.',
      phone: '📞 +91 98765 43210',
      email: '✉️ gopal@siddhivinayak.com',
      icon: '👨‍💼',
    },
    {
      id: 13,
      name: 'विकी मुथा',
      role: 'सदस्य',
      description: 'मंडळासाठी सामूहिक किराणा खरेदी आणि वाहतूक व्यवस्थेत विकी मुथा यांचे मोलाचे योगदान आहे. ते नेहमी आवश्यक वस्तू वेळेत आणि योग्य ठिकाणी पोहोचवतात व मंडळाच्या कार्यात सहकार्य करतात.',
         phone: '📞 +91 9766599007',
      email: '✉️ vicky@siddhivinayak.com',
      icon: '🛒',
    },
    {
      id: 2,
      name: 'रोहित बोरा',
      role: 'सदस्य',
      description: 'तांत्रिक व्यवस्थापन आणि डिजिटल प्लॅटफॉर्मची देखभाल. मंडळाच्या वेबसाईट, सोशल मीडिया आणि ऑनलाइन उपस्थिती वाढवण्यासाठी सतत नवनवीन तंत्रज्ञानाचा वापर करतात. रोहित बोरा हे नवकल्पना आणि डिजिटल सक्षमीकरणाचे प्रतीक आहेत.',
      phone: '📞 +91 8308913884',
      email: '✉️ rohit@siddhivinayak.com',
      icon: '�‍�',
    },
    {
      id: 4,
      name: 'संतोष ताथेड',
      role: 'सदस्य',
      description: 'सुरक्षा व्यवस्था आणि कार्यक्रम व्यवस्थापनासोबतच संतोष ताथेड हे मंडळातील अधिकाधिक सदस्यांना विविध खेळांमध्ये सहभागी होण्यासाठी प्रोत्साहित करतात. ते आमच्या ग्रुपमध्ये खेळाडूंची नावे गोळा करतात आणि स्पर्धांचे आयोजन सुलभ करतात. तसेच, मंडळाच्या सजावटीसाठी लागणाऱ्या साहित्याच्या व्यवस्थेतही ते नेहमी मदत करतात.',
      phone: '📞 +91 98765 43213',
      email: '✉️ santosh@siddhivinayak.com',
      icon: '�‍♂️',
    },
    {
      id: 5,
      name: 'संदीप जाधव',
      role: 'सदस्य',
      description: 'लॉजिस्टिक्स आणि सामग्री व्यवस्थापन. कार्यक्रमासाठी आवश्यक सर्व सामग्री वेळेत आणि योग्य प्रकारे उपलब्ध करून देण्याची जबाबदारी सांभाळतात. संदीप जाधव हे कार्यक्षम आणि नियोजनबद्ध व्यवस्थापनासाठी प्रसिद्ध आहेत.',
      phone: '📞 +91 98765 43214',
      email: '✉️ sandeep@siddhivinayak.com',
      icon: '👨‍🔧',
    },
    {
      id: 6,
      name: 'शशिकांत तेलोरे',
      role: 'सदस्य',
      description: 'सजावट आणि कलात्मक डिझाइनची जबाबदारी. मंडळाच्या सर्व कार्यक्रमांना आकर्षक आणि सर्जनशील रूप देण्यासाठी शशिकांत तेलोरे यांचे योगदान मोठे आहे. ते नेहमी नवीन डिझाइन आणि सजावटीचे प्रयोग करतात.',
      phone: '📞 +91 98765 43215',
      email: '✉️ shashikant@siddhivinayak.com',
      icon: '�‍🎨',
    },
    {
      id: 7,
      name: 'विष्णुकांत लखोटीया',
      role: 'सदस्य',
      description: 'आर्थिक नियोजन आणि खर्च व्यवस्थापन. मंडळाच्या सर्व आर्थिक व्यवहारांची पारदर्शकता आणि शिस्तबद्धता राखण्याचे काम करतात. विष्णुकांत लखोटीया हे विश्वासार्ह आणि प्रामाणिक आर्थिक व्यवस्थापक आहेत.',
      phone: '📞 +91 98765 43216',
      email: '✉️ vishnukant@siddhivinayak.com',
      icon: '👨‍💼',
    },
    {
      id: 8,
      name: 'विजय शिंदे',
      role: 'सदस्य',
      description: 'समुदायिक संपर्क आणि बाह्य संबंध. मंडळाच्या विविध उपक्रमांमध्ये समाजातील सर्व घटकांना जोडण्याचे आणि बाह्य संस्थांशी समन्वय साधण्याचे काम करतात. विजय शिंदे हे संवादकौशल्य आणि सार्वजनिक संबंधांसाठी ओळखले जातात.',
      phone: '📞 +91 98765 43217',
      email: '✉️ vijay@siddhivinayak.com',
      icon: '🤝',
    },
    {
      id: 9,
      name: 'मंगेश चव्हाण',
      role: 'सदस्य',
      description: 'कार्यक्रम संयोजन आणि वेळापत्रक व्यवस्थापन. सर्व कार्यक्रम वेळेत आणि सुरळीत पार पडावेत यासाठी मंगेश चव्हाण यांचे नियोजन महत्त्वाचे आहे. ते वेळेचे काटेकोर पालन करतात.',
      phone: '📞 +91 98765 43218',
      email: '✉️ mangesh@siddhivinayak.com',
      icon: '�',
    },
    {
      id: 10,
      name: 'राजेश सुर्यावंशी',
      role: 'सदस्य',
      description: 'प्रचार आणि माध्यम संपर्क. मंडळाच्या उपक्रमांची माहिती समाजापर्यंत पोहोचवण्यासाठी आणि माध्यमांशी संवाद साधण्यासाठी राजेश सुर्यावंशी यांची भूमिका महत्त्वाची आहे. ते सोशल मीडिया आणि स्थानिक माध्यमांमध्ये मंडळाचे प्रतिनिधित्व करतात.',
      phone: '📞 +91 98765 43219',
      email: '✉️ rajesh@siddhivinayak.com',
      icon: '📢',
    },
    {
      id: 11,
      name: 'सुनिल कदम',
      role: 'सदस्य',
      description: 'युवा कार्यक्रम आणि खेळ संयोजन. मंडळातील युवकांना प्रेरित करण्यासाठी आणि त्यांच्यासाठी विविध खेळ व उपक्रम आयोजित करण्याचे काम करतात. सुनिल कदम हे उत्साही आणि प्रेरणादायी युवा नेते आहेत.',
      phone: '📞 +91 98765 43220',
      email: '✉️ sunil@siddhivinayak.com',
      icon: '⚽',
    },
    {
      id: 12,
      name: 'सुरज कुमावत',
      role: 'सदस्य',
      description: 'स्वयंसेवक संघटना आणि सहकार्य. मंडळाच्या सर्व उपक्रमांमध्ये स्वयंसेवकांचे संघटन, प्रशिक्षण आणि समन्वय साधण्याचे काम करतात. सुरज कुमावत हे सहकार्य आणि टीमवर्कसाठी प्रसिद्ध आहेत.',
      phone: '📞 +91 98765 43221',
      email: '✉️ suraj@siddhivinayak.com',
      icon: '🙋‍♂️',
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
    {
      icon: '🌟',
      title: 'नेतृत्व आणि प्रेरणा',
      description: 'युवकांना नेतृत्वगुण आणि सामाजिक प्रेरणा देणे.',
    },
    {
      icon: '👐',
      title: 'सेवा आणि सहकार्य',
      description: 'समाजासाठी निस्वार्थ सेवा आणि परस्पर सहकार्य.',
    },
    {
      icon: '⚖️',
      title: 'पारदर्शकता आणि प्रामाणिकपणा',
      description: 'सर्व कामात पारदर्शकता आणि प्रामाणिकपणा राखणे.',
    },
    {
      icon: '🎉',
      title: 'सांस्कृतिक जतन',
      description: 'परंपरा, कला आणि संस्कृतीचे जतन व संवर्धन.',
    },
    {
      icon: '🤗',
      title: 'समावेशिता',
      description: 'प्रत्येक सदस्याचा सन्मान आणि सर्वांना समान संधी देणे.',
    },
  ];

  const organizationStats = [
    { number: '13+', label: 'वर्षांचा अनुभव (2011 पासून)' },
    { number: '50K+', label: 'भक्तांची सेवा' },
    { number: '50+', label: 'सक्रिय सदस्य' },
    { number: '500+', label: 'झाडे लावली' },
    { number: '10+', label: 'रक्तदान शिबिर' },
    { number: '20+', label: 'मुलांच्या स्पर्धा' },
  ];

  const festivalActivities = [
    {
      icon: '🚶‍♂️',
      title: 'बेलापूर ते कोल्हार पदयात्रा',
      description: 'गणेशोत्सवाच्या निमित्ताने आयोजित केलेली धार्मिक पदयात्रा जिथे भक्त एकत्र येऊन गणपती बाप्पाची स्तुती करतात.',
    },
    {
      icon: '🎵',
      title: 'संगीत खुर्ची स्पर्धा',
      description: 'लहान मुलांसाठी आयोजित केलेली संगीत खुर्ची स्पर्धा. मुले संगीताच्या तालावर नाचतात आणि आनंद घेतात.',
    },
    {
      icon: '🎨',
      title: 'चित्रकला स्पर्धा',
      description: 'मुलांच्या कलाकुशलतेला वाव देणारी चित्रकला स्पर्धा. गणेश आणि इतर विषयांवर सुंदर चित्रे काढतात.',
    },
    {
      icon: '💃',
      title: 'नृत्य स्पर्धा',
      description: 'लहान मुलांसाठी नृत्य स्पर्धा जिथे ते त्यांची नृत्य कलाकुशलता दाखवतात.',
    },
    {
      icon: '�',
      title: 'भाषण स्पर्धा',
      description: 'मुलांच्या वक्तृत्व कौशल्याला वाव देणारी भाषण स्पर्धा. गणेशजी आणि सामाजिक विषयांवर भाषण.',
    },
    {
      icon: '🌸',
      title: 'रांगोळी स्पर्धा',
      description: 'पारंपरिक रांगोळी कलेची स्पर्धा जिथे सुंदर आणि रंगीबेरंगी रांगोळ्या काढल्या जातात.',
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
      icon: '🎤',
      title: 'भजन संध्या',
      description: 'गणेशोत्सवाच्या काळात भक्तिमय वातावरण निर्माण करणारी भजन संध्या, जिथे स्थानिक कलाकार आणि भक्त सहभागी होतात.',
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
    {
      icon: '👩‍💼',
      title: 'महिला सक्षमीकरण',
      description: 'महिलांना स्वावलंबी बनवण्यासाठी विविध कार्यक्रम आणि व्याख्यानांचे आयोजन.',
    },
    {
      icon: '🤝',
      title: 'समाजिक समस्या निवारण',
      description: 'स्थानिक लोकांच्या समस्यांचे निराकरण आणि त्यांना योग्य मार्गदर्शन.',
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
