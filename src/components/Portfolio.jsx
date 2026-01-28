import { useState } from 'react';
import { ExternalLink, Play, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
  {
  id: 1,
  category: 'healthcare',
  title: 'HealthCare',
  description:
    'A next-generation AI-powered healthcare app designed to make health management smarter and simpler. With an elegant Flutter interface and secure Firebase backend, it delivers intelligent diagnostics and seamless care—right at your fingertips. 🩺🤖',
  tech: ['Flutter', 'AI', 'Firebase'],
  rating: 4.9,
  image: 'https://i.ibb.co/ZmY4YpN/healthcare.png', // REAL LINK
  link: 'https://play.google.com/store/apps/details?id=com.appsait.healthcare'
},

    {
      id: 2,
      category: 'ecommerce',
      title: 'ShopNex',
      description: "ShopNex brings the future of online shopping to life with immersive AR try-on technology. Powered by React, Node.js, and MongoDB, it creates a fast, interactive, and visually engaging e-commerce experience that boosts confidence before every purchase. 🚀🛍️",
      tech: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      image: 'bg-gradient-to-br from-purple-100 to-pink-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.shopnex'
    },
    {
      id: 3,
      category: 'fashion',
      title: 'Style AI',
      description: 'Style AI is an AI-driven fashion recommendation platform that analyzes trends and user preferences to deliver personalized outfit suggestions. Powered by Python, TensorFlow, and React Native, it makes styling smarter, faster, and more intuitive. 👚✨',
      tech: ['Python', 'TensorFlow', 'React Native'],
      rating: 4.7,
      image: 'bg-gradient-to-br from-green-100 to-emerald-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.styleai'
    },
    {
      id: 4,
      category: 'hospitality',
      title: 'HotelSync',
      description: 'HotelSync is an innovative hotel management system that integrates IoT technology to streamline operations, enhance guest satisfaction, and automate daily tasks. Powered by Kotlin, Spring Boot, and AWS, it brings efficiency and intelligence to every aspect of hospitality. 🏨✨',
      tech: ['Kotlin', 'Spring Boot', 'AWS'],
      rating: 4.9,
      image: 'bg-gradient-to-br from-orange-100 to-red-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.hotelsync'
    },
    {
      id: 5,
      category: 'education',
      title: 'Learnify',
      description: 'LearnVR is an interactive e-learning platform that brings education to life with VR classrooms, allowing students to engage in immersive, hands-on learning experiences. Built with advanced technologies, it transforms traditional learning into a fully interactive and engaging virtual environment. 🎓🖥️',
      tech: ['Flutter', 'WebRTC', 'GraphQL'],
      rating: 4.8,
      image: 'bg-gradient-to-br from-cyan-100 to-blue-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.learnify'
    },
    {
      id: 6,
      category: 'finance',
      title: 'FinTrack Pro',
      description:'FinBlock is an innovative personal finance app that uses blockchain technology to provide secure, transparent, and efficient money management. It empowers users to track expenses, manage budgets, and make smarter financial decisions effortlessly.💰🔗',
      tech: ['React Native', 'Blockchain', 'Node.js'],
      rating: 4.9,
      image: 'bg-gradient-to-br from-indigo-100 to-purple-100',
      link: 'https://play.google.com/store/apps/details?id=com.appsait.fintrack'
    }
  ];

  const categories = ['all', 'healthcare', 'ecommerce', 'fashion', 'hospitality', 'education', 'finance'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed ideas into successful digital products across industries.
            </p>
          </div>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow h-full flex flex-col">

                  {/* Image/Color Placeholder */}
                  <div className={`h-48 ${item.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/20">{item.title.charAt(0)}</div>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900">{item.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary capitalize">{item.category}</span>
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-700 hover:text-primary"
                      >
                        <span className="font-semibold">View Project</span>
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="https://play.google.com/store/apps/dev?id=6756875694075191085"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Play className="w-6 h-6" />
              <span>View All Projects on Play Store</span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;
