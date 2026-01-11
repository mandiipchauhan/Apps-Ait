import { useState } from 'react';
import { 
  Code2, Smartphone, Megaphone, CheckCircle, Users, 
  Zap, Shield, Globe, BarChart, Palette, Cloud, 
  Database, Cpu, SmartphoneCharging, Eye
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
 
      icon: <Code2 className="w-8 h-8" />,
      title: "Digital Transformation & Product Engineering",
      category: "engineering",
      description: "Transform your business with comprehensive end-to-end digital solutions, streamlining operations, enhancing efficiency, and driving growth in the modern digital landscape",
      features: [
        "Product Innovation & Strategy",
        "Custom Application Development",
        "UI/UX Design & Research",
        "Legacy System Modernization",
        "Cloud Migration Services",
        "API Development & Integration"
      ],
      technologies: ["React.js", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      color: "from-blue-500 to-cyan-500"
    },
    {
    
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobility Solutions",
      category: "mobility",
      description: "Build mobile experiences that connect with your users like never before. Combining smooth functionality with engaging design, your app can delight users, enhance interaction, and create lasting impact.",
      features: [
        "Mobile-First Design Strategy",
        "Native iOS & Android Development",
        "Cross-Platform Apps (Flutter/React Native)",
        "Progressive Web Apps (PWA)",
        "App Store Optimization",
        "Mobile App Maintenance"
      ],
      technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "App Store Connect"],
      color: "from-purple-500 to-pink-500"
    },
    {
 
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      category: "marketing",
      description: "Boost your online presence and drive growth by leveraging targeted strategies that increase visibility, engage your audience, and convert interest into tangible results. With the right approach, your brand can stand out in the digital landscape, attract loyal customers, and achieve measurable business success",
      features: [
        "Personal Branding & Social Media Marketing",
        "PPC Campaigns (Facebook Ads, Google Ads)",
        "SEO & Content Marketing",
        "Social Media Management",
        "Email Marketing Automation",
        "Analytics & Performance Tracking"
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Canva"],
      color: "from-green-500 to-emerald-500"
    },
    {
  
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance & Testing",
      category: "qa",
      description: "Ensure your platform performs flawlessly and delivers a seamless user experience at every touchpoint. By prioritizing speed, reliability, and intuitive design, you create an environment where users can effortlessly engage, explore, and achieve their goals—turning every interaction into a positive, lasting impression",
      features: [
        "Custom Software QA Testing",
        "E-learning Platform Testing",
        "Performance & Load Testing",
        "Security & Penetration Testing",
        "Automated Testing Solutions",
        "Manual & Exploratory Testing"
      ],
      technologies: ["Selenium", "Jest", "Cypress", "JMeter", "Postman", "BrowserStack"],
      color: "from-orange-500 to-red-500"
    },
    {
     
      icon: <Users className="w-8 h-8" />,
      title: "Affordable Management Services",
      category: "management",
      description: " Expand your team’s capabilities with expert management support that drives productivity and efficiency. From overseeing daily operations to providing strategic guidance, our professionals help you scale confidently while keeping your team aligned, motivated, and performing at its best.",
      features: [
        "Dedicated Team Management",
        "Expert Administrative Support",
        "Project Management Office (PMO)",
        "Agile & Scrum Implementation",
        "Resource Planning & Allocation",
        "Vendor Management"
      ],
      technologies: ["Jira", "Asana", "Slack", "Trello", "Microsoft Teams", "Confluence"],
      color: "from-indigo-500 to-blue-500"
    },
    {
   
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      category: "ai",
      description: "Leverage artificial intelligence to create smarter, more efficient solutions that drive innovation and growth. By harnessing advanced AI technologies, you can automate processes, gain actionable insights, and make data-driven decisions that enhance performance, reduce costs, and unlock new opportunities.",
      features: [
        "AI-Powered Applications",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbots & Virtual Assistants"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "spaCy", "FastAPI", "MLflow"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'qa', label: 'Quality Assurance' },
    { id: 'management', label: 'Management' },
    { id: 'ai', label: 'AI & ML' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const processSteps = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Discovery",
      description: "We analyze your requirements and define project scope"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Create wireframes, prototypes, and user experience flows"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development",
      description: "Agile development with regular milestones and updates"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Testing",
      description: "Comprehensive QA testing and bug fixing"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deployment",
      description: "Seamless deployment to production environments"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                End-to-end digital solutions to transform your business. From concept to launch and beyond, 
                we provide comprehensive services to bring your vision to life.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A transparent, collaborative approach ensuring quality at every step
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {processSteps.map((step, index) => (
              // <FadeIn key={index} delay={index * 0.1}>
               <FadeIn key={step.id} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-primary/20 mb-4">0{index + 1}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our wide range of services tailored to your business needs
              </p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Services */}
          <div className="space-y-8">
            {filteredServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                          <p className="text-gray-600 text-lg">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold"
                        >
                          Get Quote
                        </motion.button>
                        <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-10 opacity-90">
                Let's discuss how we can help you achieve your digital goals. Book a free consultation today.
              </p>
              <motion.a
                href="https://appsait.com/contact-us/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg"
              >
                <span>Book Free Consultation</span>
                <span className="text-2xl">→</span>
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;