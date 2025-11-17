import { Post } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, TrendingUp, MessageCircle, FileText } from 'lucide-react';

interface PostStatsProps {
  posts: Post[];
}

export function PostStats({ posts }: PostStatsProps) {
  const totalPosts = posts.length;
  const totalViews = posts.reduce((sum, post) => sum + post.views_count, 0);
  const averageEngagement =
    posts.reduce((sum, post) => sum + (post.engagement_rate || 0), 0) /
    (posts.length || 1);
  const totalInteractions = posts.reduce(
    (sum, post) =>
      sum + post.reactions_count + post.comments_count + post.forwards_count,
    0
  );

  const stats = [
    {
      title: "Total Posts",
      value: totalPosts.toLocaleString(),
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Views",
      value: totalViews.toLocaleString(),
      icon: Eye,
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
      title: "Total Interactions",
      value: totalInteractions.toLocaleString(),
      icon: MessageCircle,
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
