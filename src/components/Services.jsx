import { Code2, Smartphone, Megaphone, CheckCircle, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Services = () => {
  const services = [
    {
      id:1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Digital Transformation & Product Engineering",
      description:  "Our skilled designers have a knack for creating apps that look elegant, simple, and unique. We use User Testing and Usability Hub to enable developers to conduct usability testing with real users. They can observe how users interact with their app prototypes and identify areas for improvement in the UI/UX design.",
      color: "from-blue-500 to-cyan-500",
      features: ["Product Innovation", "Custom Development", "UI/UX Design"]
    },
    {
       id: 2,
      icon: <Code2 className="w-8 h-8" />,
      title: "App Development",
      description:
        "Whether fixing an existing app or starting the app development from scratch, our expert team of developers has all the tools to make your app successful. Our team will closely work with you, know your needs, and help you develop user-friendly and intuitive apps that sync with your purpose.",
      color: "from-blue-500 to-cyan-500",
       features: ["Existing App Fixing", "Development from Scratch", "User-Friendly Apps"],
    },
    {
      id:3,
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your brand visibility and reach the right audience with powerful digital marketing strategies using SEO, PPC, and social media marketing. These channels drive organic traffic, instant visibility, strong customer engagement, and measurable business growth.",
      color: "from-green-500 to-emerald-500",
      features: ["Personal Branding", "PPC Campaigns", "SEO & SMM"]
    },
    {id:4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance & Testing",
      description:  'As we know how important it is to deliver perfect digital solutions, we go above and beyond to make sure that every aspect of your digital lifestyle meets the highest standards. Our meticulous testing protocols, performance assessments, and security audits are in place to ensure a seamless user experience.',
      color: "from-orange-500 to-red-500",
      features: ["Custom QA", "E-learning Testing", "Performance Testing"]
    },
    {
      id:5,
      icon: <Users className="w-8 h-8" />,
      title: "Affordable Management Services",
      description: "Cost-effective management solutions that provide dedicated team handling, expert administrative support, and efficient project coordination to ensure smooth operations and better productivity.",
      color: "from-indigo-500 to-blue-500",
      features: ["Team Management", "Admin Support", "Project Management"]
    },
    {
      id:6,
      icon: <Shield className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Our AI-powered solutions leverage advanced machine learning and intelligent automation to enhance business efficiency and decision-making. We build smart systems that analyze data, optimize processes, and deliver personalized experiences, helping organizations innovate faster and achieve scalable growth.",
      color: "from-cyan-500 to-blue-500",
      features: ["AI Integration", "Machine Learning", "Automation"]
    }
  ];
 return(
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-primary">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end services to transform your business in the digital landscape.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group h-full flex flex-col"
              whileHover={-10  }
            >
              <FadeIn delay={index * 0.1}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px]">{service.title}</h3>

                {/* Description */}
                
                
              <p className="text-gray-600 mb-6 min-h-[72px]">
                {service.description}
               </p>
                {/* Features */}
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 text-primary font-semibold flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-sm">→</span>
                  </div>
                </motion.button>
              </FadeIn>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;