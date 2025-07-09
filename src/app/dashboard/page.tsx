import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  DollarSign,
  Plus,
  BarChart3,
  Calendar,
  Settings
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Tweets',
      value: '2,350',
      change: '+20.1%',
      icon: MessageSquare,
      color: 'text-blue-600',
    },
    {
      title: 'Followers',
      value: '12,234',
      change: '+15.3%',
      icon: Users,
      color: 'text-green-600',
    },
    {
      title: 'Engagement',
      value: '89.2%',
      change: '+7.2%',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
    {
      title: 'Revenue',
      value: '$3,456',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-yellow-600',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here&apos;s what&apos;s happening with your tweets.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Tweet
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Chart Card */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Tweet Performance</CardTitle>
              <CardDescription>
                Your tweet engagement over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Chart will be implemented in Phase 5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest tweet interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'New follower', user: '@johndoe', time: '2 min ago' },
                  { action: 'Tweet liked', user: '@janedoe', time: '5 min ago' },
                  { action: 'Tweet retweeted', user: '@bobsmith', time: '10 min ago' },
                  { action: 'New comment', user: '@alice', time: '15 min ago' },
                  { action: 'Tweet shared', user: '@charlie', time: '20 min ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span>Create Tweet</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Schedule Tweet</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Goals</CardTitle>
            <CardDescription>
              Track your progress towards monthly targets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Tweets Posted</span>
                <span>23/30</span>
              </div>
              <Progress value={76} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Engagement Rate</span>
                <span>89/95%</span>
              </div>
              <Progress value={94} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>New Followers</span>
                <span>156/200</span>
              </div>
              <Progress value={78} />
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
