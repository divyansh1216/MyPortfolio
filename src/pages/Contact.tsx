import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    // For demonstration purposes, we'll simulate a successful submission
    // In a real application, you would use EmailJS or a backend API
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: false,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: '' }));
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white font-heading mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white font-heading">Send a Message</h2>
              
              {status.submitted && (
                <div className={`mb-6 p-4 rounded-md ${status.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary w-full"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "divyanshtailor36@gmail.com",
      link: "mailto:divyanshtailor36@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9680543635",
      link: "tel:+919680543635"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Rishabhdew, Udaipur, Rajasthan",
      link: "https://maps.google.com/?q=Udaipur,Rajasthan"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="lg:w-2/5"
    >
      <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white font-heading">Contact Information</h2>
        
        <p className="mb-8 text-dark-600 dark:text-dark-300">
          I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </p>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <a 
              key={index}
              href={detail.link}
              className="flex items-center space-x-4 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-medium text-dark-900 dark:text-white">{detail.title}</h3>
                <p>{detail.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4 text-dark-900 dark:text-white">Connect with me</h3>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/divyansh1216" label="GitHub" className="bg-dark-800 hover:bg-dark-700 text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/divyansh3635/" label="LinkedIn" className="bg-[#0A66C2] hover:bg-[#0958A8] text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </SocialLink>
          </div>
        </div>  
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, children, label, className }: { href: string; children: React.ReactNode; label: string; className: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${className}`}
    aria-label={label}
  >
    {children}
  </a>
);

export default Contact;