import { useState } from 'react';
import { 
  ExternalLink, Play, Star, Download, Users, 
  TrendingUp, Globe, Smartphone, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'healthcare',
      title: 'HealthCare Pro',
      description: 'A comprehensive healthcare management platform with AI-powered diagnostics and patient monitoring system.',
      longDescription: 'Revolutionizing patient care with real-time monitoring, AI diagnostics, and seamless integration with hospital systems. Increased patient engagement by 300% and reduced administrative workload by 45%.',
      tech: ['Flutter', 'AI/ML', 'Firebase', 'Node.js', 'TensorFlow'],
      rating: 4.9,
      downloads: '50K+',
      impact: '40% faster diagnosis',
      image: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.healthcare',
      features: [
        'AI Diagnostic Assistant',
        'Telemedicine Integration',
        'Patient Record Management',
        'Medication Tracker',
        'Emergency Alert System'
      ]
    },
    {
      id: 2,
      category: 'ecommerce',
      title: 'ShopNex',
      description: 'Advanced e-commerce platform with AR try-on features and AI-based recommendations.',
      longDescription: 'Transforming online shopping with augmented reality, personalized recommendations, and seamless checkout. Increased conversion rates by 65% and average order value by 40%.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebGL', 'Redis'],
      rating: 4.8,
      downloads: '100K+',
      impact: '65% conversion increase',
      image: 'bg-gradient-to-br from-purple-100 to-pink-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.shopnex',
      features: [
        'AR Virtual Try-On',
        'AI Recommendations',
        'Real-time Inventory',
        'Multi-vendor Support',
        'Advanced Analytics'
      ]
    },
    {
      id: 3,
      category: 'fashion',
      title: 'Style AI',
      description: 'AI-powered fashion recommendation engine with virtual wardrobe and styling assistant.',
      longDescription: 'Personalized fashion recommendations using machine learning algorithms. Users experience a 50% reduction in shopping time and 35% increase in outfit satisfaction.',
      tech: ['Python', 'TensorFlow', 'React Native', 'Firebase', 'OpenCV'],
      rating: 4.7,
      downloads: '75K+',
      impact: '50% time saved',
      image: 'bg-gradient-to-br from-green-100 to-emerald-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.styleai',
      features: [
        'Personal Stylist AI',
        'Virtual Wardrobe',
        'Outfit Generator',
        'Trend Analysis',
        'Social Sharing'
      ]
    },
    {
      id: 4,
      category: 'hospitality',
      title: 'HotelSync',
      description: 'Complete hotel management system with IoT integration and guest experience enhancement.',
      longDescription: 'Streamlining hotel operations with IoT room controls, automated check-in/out, and personalized guest services. Increased guest satisfaction by 45% and operational efficiency by 60%.',
      tech: ['Kotlin', 'Spring Boot', 'AWS', 'IoT', 'PostgreSQL'],
      rating: 4.9,
      downloads: '25K+',
      impact: '60% efficiency gain',
      image: 'bg-gradient-to-br from-orange-100 to-red-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.hotelsync',
      features: [
        'IoT Room Controls',
        'Mobile Check-in',
        'Guest Experience',
        'Inventory Management',
        'Analytics Dashboard'
      ]
    },
    {
      id: 5,
      category: 'education',
      title: 'Learnify',
      description: 'Interactive e-learning platform with VR classrooms and AI tutoring system.',
      longDescription: 'Immersive learning experience with virtual classrooms, interactive lessons, and personalized learning paths. Improved student engagement by 200% and knowledge retention by 55%.',
      tech: ['Flutter', 'WebRTC', 'GraphQL', 'Three.js', 'MongoDB'],
      rating: 4.8,
      downloads: '150K+',
      impact: '200% engagement boost',
      image: 'bg-gradient-to-br from-cyan-100 to-blue-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.learnify',
      features: [
        'VR Classrooms',
        'AI Tutor',
        'Interactive Lessons',
        'Progress Tracking',
        'Collaborative Tools'
      ]
    },
    {
      id: 6,
      category: 'finance',
      title: 'FinTrack Pro',
      description: 'Personal finance management app with blockchain security and investment insights.',
      longDescription: 'Secure financial management with blockchain encryption, smart budgeting tools, and AI-powered investment recommendations. Helped users save 30% more and make better investment decisions.',
      tech: ['React Native', 'Blockchain', 'Node.js', 'Machine Learning', 'SQLite'],
      rating: 4.9,
      downloads: '80K+',
      impact: '30% more savings',
      image: 'bg-gradient-to-br from-indigo-100 to-purple-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.fintrack',
      features: [
        'Blockchain Security',
        'AI Budgeting',
        'Investment Insights',
        'Expense Tracking',
        'Tax Planning'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'healthcare', label: 'Healthcare', count: 1 },
    { id: 'ecommerce', label: 'E-commerce', count: 1 },
    { id: 'fashion', label: 'Fashion', count: 1 },
    { id: 'hospitality', label: 'Hospitality', count: 1 },
    { id: 'education', label: 'Education', count: 1 },
    { id: 'finance', label: 'Finance', count: 1 }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const stats = [
    { icon: <Download className="w-6 h-6" />, value: '500K+', label: 'Total Downloads' },
    { icon: <Users className="w-6 h-6" />, value: '200+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '4.8', label: 'Average Rating' },
    { icon: <Globe className="w-6 h-6" />, value: '15+', label: 'Countries Served' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Awards Won' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Discover how we've transformed ideas into successful digital products across various industries. 
                Each project showcases our commitment to innovation, quality, and client success.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    activeFilter === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Portfolio Grid */}
          <div className="space-y-16">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Side - Visuals */}
                    <div className="p-8">
                      <div className={`h-64 rounded-2xl ${item.image} relative overflow-hidden mb-6`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-8xl font-bold text-white/20">{item.title.charAt(0)}</div>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold text-gray-900">{item.rating}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="font-semibold text-gray-900">{item.downloads} Downloads</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {item.tech.map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Smartphone className="w-5 h-5 text-primary" />
                            <span className="text-sm text-gray-600">Mobile App</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-gray-600">{item.impact}</span>
                          </div>
                        </div>
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                        >
                          <Play className="w-5 h-5" />
                          <span>View on Play Store</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="p-8 lg:border-l lg:border-gray-200">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{item.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Project Impact</h4>
                        <p className="text-gray-600">{item.longDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Let's build something amazing together. View our complete portfolio on Google Play.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://play.google.com/store/apps/dev?id=6756875694075191085"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3"
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span>View All Projects</span>
                  </motion.a>
                  <motion.a
                    href="https://appsait.com/contact-us/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3"
                  >
                    <span>Get in Touch</span>
                    <span className="text-2xl">→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;