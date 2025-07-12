
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Users, Gift, Star, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

















































const Index = () => {
 
 
 
 
  const features = [
    {
      icon: <Gift className="h-8 w-8 text-emerald-600" />,
      title: "Earn Points",
      description: "Get points with every purchase, eco-friendly action, and special events. Earn extra for writing reviews, sharing on social media, and celebrating your birthday with us. Every dollar spent brings you closer to amazing rewards."
    },
    {
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      title: "Exclusive Rewards",
      description: "Redeem your points for discounts on future purchases, free sustainable items, early access to new collections, and VIP-only experiences. Unlock special gifts and limited-edition products available only to members."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Refer Friends",
      description: "Invite friends to join Apparel and earn bonus points when they sign up and make their first purchase. The more friends you refer, the more you earn—plus, your friends get a welcome bonus too!"
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "Tier Benefits",
      description: "Climb through our Green, Silver, Gold, and Platinum tiers to unlock exclusive perks: faster point earning, free shipping, birthday surprises, priority support, VIP styling sessions, and access to members-only events."
    }
  ];
  

  const stats = [
    { number: "50K+", label: "Happy Members" },
    { number: "2M+", label: "Points Earned" },
    { number: "95%", label: "Eco-Friendly" },
    { number: "24/7", label: "Support" }
  ];

  return (
    
    
    
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-beige-200/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-6 w-6 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Sustainable Fashion</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Style that
                <span className="gradient-text block">Rewards</span>
                <span className="gradient-text">You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join Apparel's exclusive rewards program and earn points with every sustainable choice. 
                Get rewarded for looking good while doing good for the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button className="btn-primary text-white group">
                    Join the Movement
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button className="btn-secondary">
                    How it Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm text-gray-600">Eco-Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">Locally Made</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-600">Community Driven</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="glass-card rounded-3xl p-8 hover-lift">
                <img
                  src="https://i.pinimg.com/736x/71/5e/2b/715e2b633187ddc5d112d222eb61e78d.jpg"
                  alt="Young person wearing sustainable fashion"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-pulse-slow">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">1,250</p>
                  <p className="text-sm text-gray-600">Points Earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Apparel Rewards</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our rewards program is designed to celebrate your sustainable choices while giving you amazing benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-0 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1d3152] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of eco-conscious fashion lovers who are already earning rewards with every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join Now - It's Free!
                </Button>
              </Link>
              <Link to="/rewards">
                <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300">
                  Explore Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
