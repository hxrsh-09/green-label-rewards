
import React, { useState } from 'react';
import { Gift, Star, Crown, Zap, Heart, Users, ShoppingBag, Percent } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Rewards', icon: <Gift className="h-4 w-4" /> },
    { id: 'discounts', name: 'Discounts', icon: <Percent className="h-4 w-4" /> },
    { id: 'products', name: 'Free Items', icon: <ShoppingBag className="h-4 w-4" /> },
    { id: 'experiences', name: 'Experiences', icon: <Star className="h-4 w-4" /> },
    { id: 'vip', name: 'VIP Access', icon: <Crown className="h-4 w-4" /> }
  ];

  const rewards = [
    {
      id: 1,
      title: '10% Off Your Order',
      description: 'Get 10% discount on your entire order',
      points: 250,
      category: 'discounts',
      tier: 'Green',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: 2,
      title: 'Free EcoStyle Tote Bag',
      description: 'Sustainable canvas tote bag with EcoStyle logo',
      points: 500,
      category: 'products',
      tier: 'Green',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      popular: true
    },
    {
      id: 3,
      title: '20% Off Your Order',
      description: 'Get 20% discount on your entire order',
      points: 750,
      category: 'discounts',
      tier: 'Silver',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: 4,
      title: 'VIP Styling Session',
      description: 'One-on-one virtual styling session with our fashion experts',
      points: 1000,
      category: 'experiences',
      tier: 'Silver',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      popular: true
    },
    {
      id: 5,
      title: 'Free Sustainable T-Shirt',
      description: 'Choose any t-shirt from our organic cotton collection',
      points: 1250,
      category: 'products',
      tier: 'Silver',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: 6,
      title: '30% Off Your Order',
      description: 'Get 30% discount on your entire order',
      points: 1500,
      category: 'discounts',
      tier: 'Gold',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: 7,
      title: 'Exclusive Collection Access',
      description: 'Early access to limited edition collections',
      points: 2000,
      category: 'vip',
      tier: 'Gold',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      popular: true
    },
    {
      id: 8,
      title: 'Free Complete Outfit',
      description: 'Choose any complete outfit from our current collection',
      points: 2500,
      category: 'products',
      tier: 'Gold',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: 9,
      title: 'VIP Fashion Show Invite',
      description: 'Exclusive invitation to our seasonal fashion shows',
      points: 3000,
      category: 'vip',
      tier: 'Platinum',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      popular: true
    }
  ];

  const filteredRewards = selectedCategory === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Green': return 'bg-green-100 text-green-800';
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Gold': return 'bg-yellow-100 text-yellow-800';
      case 'Platinum': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-beige-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Rewards</span> Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover amazing rewards waiting for you. From exclusive discounts to VIP experiences, 
            there's something special for every EcoStyle member.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Sustainable Rewards</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Member Exclusive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Instant Redemption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-emerald-600 text-white shadow-lg' 
                    : 'hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRewards.map((reward, index) => (
              <Card 
                key={reward.id} 
                className="glass-card border-0 hover-lift animate-fade-in overflow-hidden group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {reward.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getTierColor(reward.tier)}>
                      {reward.tier} Tier
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Gift className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">{reward.points} pts</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {reward.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {reward.description}
                  </p>
                  <Button className="w-full btn-primary group">
                    Redeem Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-400">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">How to Redeem</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Reward</h3>
                <p className="text-white/90">Browse our catalog and pick your favorite reward</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Redemption</h3>
                <p className="text-white/90">Click redeem and your points are automatically deducted</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy Your Reward</h3>
                <p className="text-white/90">Get your discount code or item delivery confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
