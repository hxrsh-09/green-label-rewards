
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Star, Gift, Users, TrendingUp, Award, Calendar, ShoppingBag, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const recentActivities = [
    { icon: <ShoppingBag className="h-4 w-4" />, text: "Earned 25 points from purchase", date: "2 days ago" },
    { icon: <Users className="h-4 w-4" />, text: "Friend joined through your referral", date: "1 week ago" },
    { icon: <Gift className="h-4 w-4" />, text: "Redeemed 500 points for tote bag", date: "2 weeks ago" },
    { icon: <Star className="h-4 w-4" />, text: "Reached Silver tier!", date: "3 weeks ago" }
  ];

  const nextTierProgress = Math.min((user.points / 2500) * 100, 100);
  const pointsToNext = Math.max(2500 - user.points, 0);

  return (
    <div className="min-h-screen pt-20 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-emerald-600/10 to-beige-200/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
                  <p className="text-gray-600">Ready to earn more rewards today?</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold gradient-text">{user.points}</div>
                <div className="text-sm text-gray-600">Total Points</div>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  {user.tier} Member
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Points</p>
                  <p className="text-2xl font-bold text-emerald-600">{user.points}</p>
                </div>
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Tier</p>
                  <p className="text-2xl font-bold text-gray-900">{user.tier}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Referrals</p>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rewards Claimed</p>
                  <p className="text-2xl font-bold text-purple-600">7</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Progress to Next Tier */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-emerald-600" />
                <span>Progress to Gold Tier</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Current: {user.points} points</span>
                <span>Goal: 2,500 points</span>
              </div>
              <Progress value={nextTierProgress} className="h-3" />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {pointsToNext > 0 ? (
                    <>You need <span className="font-semibold text-emerald-600">{pointsToNext} more points</span> to reach Gold tier!</>
                  ) : (
                    <span className="font-semibold text-emerald-600">Congratulations! You've reached Gold tier!</span>
                  )}
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-2">Gold Tier Benefits:</h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• 1.5x points on all purchases</li>
                  <li>• Priority customer service</li>
                  <li>• Quarterly surprise box</li>
                  <li>• Exclusive collection previews</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                    <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="btn-primary h-16 text-lg">
              <ShoppingBag className="h-6 w-6 mr-3" />
              Browse Rewards
            </Button>
            <Button className="btn-secondary h-16 text-lg">
              <Users className="h-6 w-6 mr-3" />
              Refer a Friend
            </Button>
            <Button className="btn-secondary h-16 text-lg">
              <Calendar className="h-6 w-6 mr-3" />
              View History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
