import React, { useState, useEffect } from 'react';
import { Testimonial, CaseStudy } from '../../data/types';
import { testimonials, caseStudies } from '../../data/data';

const CustomerSuccess: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Customer Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our international deployments have transformed businesses worldwide
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{study.clientLogo}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                  <p className="text-gray-600">{study.client}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{study.description}</p>
              
              <div className="space-y-2 mb-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {result}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: {study.duration}</span>
                <span>Location: {study.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Client Testimonials
          </h2>
          
          <div className="relative">
            {/* Testimonial Content */}
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full transition-all duration-500 ease-in-out ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Client Info & Photo */}
                    <div className="text-center lg:text-left">
                      <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl mb-4">
                        {testimonial.image}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex items-center justify-center lg:justify-start mt-2">
                        <span className="text-2xl mr-2">{testimonial.companyLogo}</span>
                        <span className="text-gray-700 font-medium">{testimonial.company}</span>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="lg:col-span-2">
                      <blockquote className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Before/After Stats */}
                      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">{testimonial.stats.before}</div>
                          <div className="text-sm text-gray-600">Before</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{testimonial.stats.after}</div>
                          <div className="text-sm text-gray-600">After</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{testimonial.stats.improvement}</div>
                          <div className="text-sm text-gray-600">Improvement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Carousel Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Client Videos & Photos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-lg font-semibold">{testimonial.company} Case Study</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-4">
                    <span className="text-2xl">▶</span>
                  </button>
                </div>
                
                {/* Client Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{testimonial.companyLogo}</span>
                    <div>
                      <p className="font-semibold">{testimonial.company}</p>
                      <p className="text-sm opacity-90">International Deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;