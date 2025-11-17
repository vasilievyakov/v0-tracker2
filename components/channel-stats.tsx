import { Channel } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Activity, Hash } from 'lucide-react';

interface ChannelStatsProps {
  channels: Channel[];
}

export function ChannelStats({ channels }: ChannelStatsProps) {
  const totalChannels = channels.length;
  const totalSubscribers = channels.reduce(
    (sum, channel) => sum + channel.subscribers_count,
    0
  );
  const averageEngagement =
    channels.reduce(
      (sum, channel) => sum + (channel.engagement_rate || 0),
      0
    ) / (channels.length || 1);
  const activeChannels = channels.filter(
    (channel) =>
      channel.last_post_date &&
      new Date(channel.last_post_date) >
        new Date(Date.now() - 24 * 60 * 60 * 1000)
  ).length;

  const stats = [
    {
      title: "Total Channels",
      value: totalChannels.toLocaleString(),
      icon: Hash,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Subscribers",
      value: totalSubscribers.toLocaleString(),
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Avg Engagement",
      value: `${averageEngagement.toFixed(1)}%`,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Active (24h)",
      value: activeChannels.toLocaleString(),
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              {stat.title}
            </CardTitle>
            <div className={`rounded-lg p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {stat.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
