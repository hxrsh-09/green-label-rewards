
import React from 'react';
import { UserPlus, ShoppingBag, Users, Gift, Star, Trophy, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-emerald-600" />,
      title: "Sign Up for Free",
      description: "Create your EcoStyle account in under 30 seconds. No fees, no commitments.",
      points: "Welcome Bonus: 100 points"
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-emerald-600" />,
      title: "Shop & Earn Points",
      description: "Earn 1 point for every $1 spent on our sustainable fashion collection.",
      points: "Earn: 1 point = $1 spent"
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: "Refer Friends",
      description: "Invite friends to join and earn bonus points when they make their first purchase.",
      points: "Bonus: 500 points per referral"
    },
    {
      icon: <Gift className="h-12 w-12 text-emerald-600" />,
      title: "Redeem Rewards",
      description: "Use your points for discounts, free items, exclusive access, and more.",
      points: "Start redeeming at 250 points"
    }
  ];

  const tiers = [
    {
      name: "Green",
      icon: <Star className="h-8 w-8 text-gray-400" />,
      requirement: "0 - 999 points",
      benefits: ["1x points on purchases", "Birthday discount", "Early sale access"],
      color: "gray"
    },
    {
      name: "Silver",
      icon: <Star className="h-8 w-8 text-gray-500" />,
      requirement: "1,000 - 2,499 points",
      benefits: ["1.25x points on purchases", "Free shipping", "Exclusive member events"],
      color: "gray"
    },
    {
      name: "Gold",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      requirement: "2,500 - 4,999 points",
      benefits: ["1.5x points on purchases", "Priority customer service", "Quarterly surprise box"],
      color: "yellow"
    },
    {
      name: "Platinum",
      icon: <Trophy className="h-8 w-8 text-emerald-600" />,
      requirement: "5,000+ points",
      benefits: ["2x points on purchases", "VIP styling sessions", "Limited edition access"],
      color: "emerald"
    }
  ];

  const earnMethods = [
    { action: "Sign up", points: 100 },
    { action: "First purchase", points: 200 },
    { action: "Write a review", points: 50 },
    { action: "Share on social media", points: 25 },
    { action: "Refer a friend", points: 500 },
    { action: "Birthday month", points: 100 },
    { action: "Follow on Instagram", points: 25 },
    { action: "Newsletter signup", points: 50 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-beige-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How <span className="gradient-text">EcoStyle Rewards</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our simple 4-step system makes it easy to start earning rewards for your sustainable fashion choices.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass-card border-0 hover-lift animate-fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      {step.icon}
                    </div>
                    <div className="bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-beige-100 text-beige-800 text-sm font-medium px-3 py-2 rounded-full">
                      {step.points}
                    </div>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Methods */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ways to <span className="gradient-text">Earn Points</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple opportunities to rack up points and unlock amazing rewards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnMethods.map((method, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{method.action}</span>
                  <span className="text-emerald-600 font-bold text-lg">+{method.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier System */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Membership <span className="gradient-text">Tiers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock exclusive benefits as you progress through our tier system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <Card key={index} className={`glass-card border-0 hover-lift animate-fade-in relative overflow-hidden ${tier.color === 'emerald' ? 'ring-2 ring-emerald-400' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {tier.color === 'emerald' && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 text-center ${tier.color === 'emerald' ? 'pt-16' : ''}`}>
                  <div className={`${tier.color === 'emerald' ? 'bg-emerald-100' : tier.color === 'yellow' ? 'bg-yellow-100' : 'bg-gray-100'} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.requirement}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join EcoStyle Rewards today and start earning points with your very first purchase.
          </p>
          <Link to="/login">
            <Button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join Now & Get 100 Points Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
