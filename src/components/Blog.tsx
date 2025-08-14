import React, { useState } from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  root: {
    backgroundColor: '#fff',
    color: '#333',
  },
  hero: {
    background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
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
  blogContainer: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  blogFilters: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 50,
    gap: 15,
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    borderRadius: 20,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  activeFilter: {
    backgroundColor: '#c62828',
    color: '#fff',
    ':hover': {
      backgroundColor: '#a01f1f',
    },
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: 30,
  },
  blogCard: {
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
  blogImage: {
    width: '100%',
    height: 200,
    background: 'linear-gradient(45deg, #ff6b35, #ff9a56)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    color: '#fff',
  },
  blogContent: {
    padding: 24,
  },
  blogCategory: {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 12,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
    color: '#333',
    lineHeight: 1.4,
  },
  blogExcerpt: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  blogMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 12,
    color: '#999',
  },
  readMoreBtn: {
    color: '#c62828',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 14,
    ':hover': {
      textDecoration: 'underline',
    },
  },
  featuredSection: {
    backgroundColor: '#f8f9fa',
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: 40,
    maxWidth: 1200,
    margin: '0 auto',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  featuredPost: {
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 250,
    background: 'linear-gradient(45deg, #c62828, #e57373)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 64,
    color: '#fff',
  },
  featuredContent: {
    padding: 30,
  },
  featuredTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 15,
    color: '#333',
  },
  featuredExcerpt: {
    fontSize: 16,
    color: '#666',
    lineHeight: 1.6,
    marginBottom: 20,
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  sidebarCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 15,
    color: '#333',
  },
  recentPostsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  recentPost: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  recentPostImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    background: 'linear-gradient(45deg, #4caf50, #81c784)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#fff',
    flexShrink: 0,
  },
  recentPostContent: {
    flex: 1,
  },
  recentPostTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#333',
    marginBottom: 4,
    lineHeight: 1.3,
  },
  recentPostDate: {
    fontSize: 12,
    color: '#999',
    lineHeight: 38,
  },
});

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  icon: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const classes = useStyles;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'गणेशोत्सव 2025 च्या तयारीला सुरुवात',
      excerpt: 'यावर्षीच्या गणेशोत्सवासाठी आम्ही नवीन योजना आणि उपक्रमांची तयारी करत आहोत. इको-फ्रेंडली उत्सवाला प्राधान्य देत आहोत.',
      category: 'उत्सव',
      date: '10 ऑगस्ट 2025',
      author: 'राहुल शर्मा',
      icon: '🎪',
      featured: true,
    },
    {
      id: 2,
      title: 'वृक्षारोपण मोहीम: 500 झाडांचे लक्ष्य',
      excerpt: 'या वर्षी आम्ही 500 झाडे लावण्याचे लक्ष्य ठेवले आहे. आपल्या सहकार्याने हे शक्य होईल.',
      category: 'पर्यावरण',
      date: '5 ऑगस्ट 2025',
      author: 'मीरा रेड्डी',
      icon: '🌱',
    },
    {
      id: 3,
      title: 'युवा सहभागासाठी नवीन उपक्रम',
      excerpt: 'तरुणांना मंडळाच्या कामात सहभागी करून घेण्यासाठी आम्ही विविध स्पर्धा आणि कार्यशाळा आयोजित करत आहोत.',
      category: 'युवा',
      date: '28 जुलै 2025',
      author: 'प्रिया पाटील',
      icon: '👥',
    },
    {
      id: 4,
      title: 'डिजिटल इंडियाच्या दिशेने आमची पावले',
      excerpt: 'मंडळाच्या सर्व कामकाजात डिजिटल तंत्रज्ञानाचा वापर करून आम्ही आधुनिक बनत आहोत.',
      category: 'तंत्रज्ञान',
      date: '20 जुलै 2025',
      author: 'विकास जोशी',
      icon: '💻',
    },
    {
      id: 5,
      title: 'सामुदायिक सेवेचे महत्व',
      excerpt: 'समाजसेवा हे आमच्या मंडळाचे मुख्य उद्दिष्ट आहे. आम्ही विविध सामाजिक कार्यांमध्ये सहभागी होतो.',
      category: 'समाजसेवा',
      date: '15 जुलै 2025',
      author: 'सुनीता देसाई',
      icon: '🤝',
    },
    {
      id: 6,
      title: 'गणेशोत्सव 2024 चे यशस्वी समारोप',
      excerpt: 'मागील वर्षीचा गणेशोत्सव अत्यंत यशस्वी ठरला. 50,000 पेक्षा जास्त भक्तांनी सहभाग घेतला.',
      category: 'उत्सव',
      date: '10 जुलै 2025',
      author: 'अमित कुमार',
      icon: '🎉',
    },
  ];

  const categories = ['all', 'उत्सव', 'पर्यावरण', 'युवा', 'तंत्रज्ञान', 'समाजसेवा'];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === activeFilter && !post.featured);

  const featuredPost = blogPosts.find(post => post.featured);

  const recentPosts = blogPosts.slice(0, 4);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'उत्सव': '#ff6b35',
      'पर्यावरण': '#4caf50',
      'युवा': '#2196f3',
      'तंत्रज्ञान': '#9c27b0',
      'समाजसेवा': '#ff9800',
    };
    return colors[category] || '#1976d2';
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>बातम्या आणि अपडेट्स</h1>
          <p className={classes.heroSubtitle}>
            मंडळाच्या नवीनतम बातम्या, कार्यक्रम आणि सामाजिक उपक्रमांची माहिती
          </p>
        </div>

        {featuredPost && (
          <div className={`${classes.section} ${classes.featuredSection}`}>
            <h2 className={classes.sectionTitle}>मुख्य बातमी</h2>
            <div className={classes.featuredGrid}>
              <div className={classes.featuredPost}>
                <div className={classes.featuredImage}>
                  {featuredPost.icon}
                </div>
                <div className={classes.featuredContent}>
                  <span 
                    className={classes.blogCategory}
                    style={{ backgroundColor: `${getCategoryColor(featuredPost.category)}20`, color: getCategoryColor(featuredPost.category) }}
                  >
                    {featuredPost.category}
                  </span>
                  <h3 className={classes.featuredTitle}>{featuredPost.title}</h3>
                  <p className={classes.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <div className={classes.blogMeta}>
                    <span>लेखक: {featuredPost.author}</span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>

              <div className={classes.sidebar}>
                <div className={classes.sidebarCard}>
                  <h3 className={classes.sidebarTitle}>अलीकडील पोस्ट्स</h3>
                  <div className={classes.recentPostsList}>
                    {recentPosts.map((post) => (
                      <div key={post.id} className={classes.recentPost}>
                        <div className={classes.recentPostImage}>
                          {post.icon}
                        </div>
                        <div className={classes.recentPostContent}>
                          <div className={classes.recentPostTitle}>{post.title}</div>
                          <div className={classes.recentPostDate}>{post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>सर्व बातम्या</h2>
          <div className={classes.blogContainer}>
            <div className={classes.blogFilters}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${classes.filterButton} ${activeFilter === category ? classes.activeFilter : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category === 'all' ? 'सर्व' : category}
                </button>
              ))}
            </div>

            <div className={classes.blogGrid}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={classes.blogCard}>
                  <div className={classes.blogImage}>
                    {post.icon}
                  </div>
                  <div className={classes.blogContent}>
                    <span 
                      className={classes.blogCategory}
                      style={{ backgroundColor: `${getCategoryColor(post.category)}20`, color: getCategoryColor(post.category) }}
                    >
                      {post.category}
                    </span>
                    <h3 className={classes.blogTitle}>{post.title}</h3>
                    <p className={classes.blogExcerpt}>{post.excerpt}</p>
                    <div className={classes.blogMeta}>
                      <div>
                        <div>लेखक: {post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <a href="#" className={classes.readMoreBtn}>अधिक वाचा</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
