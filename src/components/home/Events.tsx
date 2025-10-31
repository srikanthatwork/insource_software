import React from 'react';

const Events: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Tech Icons */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-16 h-16 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30 flex items-center justify-center">
            <span className="text-2xl">🎤</span>
          </div>
        </div>
        
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30 flex items-center justify-center">
            <span className="text-xl">💻</span>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-14 h-14 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
            <span className="text-xl">🌐</span>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-red-500/20 rounded-lg backdrop-blur-sm border border-red-400/30 flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>

        {/* Animated Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        {/* Overview Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Overview</h2>
            <p className="text-xl text-gray-200 text-center leading-relaxed">
              Access webinars, conferences, and workshops for enterprise software insights, 
              networking, and trends. Connect with industry leaders and stay ahead in the 
              ever-evolving tech landscape.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Webinars Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Webinars</h3>
              <p className="text-gray-200">
                Live and recorded sessions with industry experts and thought leaders
              </p>
            </div>
          </div>

          {/* Conferences Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Conferences</h3>
              <p className="text-gray-200">
                Major industry events featuring keynote speakers and networking opportunities
              </p>
            </div>
          </div>

          {/* Workshops Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Workshops</h3>
              <p className="text-gray-200">
                Hands-on training sessions and practical skill development workshops
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;