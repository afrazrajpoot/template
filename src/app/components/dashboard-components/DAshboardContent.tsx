import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  Users,
  FileText,
  Send,
  CreditCard,
  BarChart3,
  Settings,
  HelpCircle,
  Star,
  Plus,
  Zap,
  Clock,
  CheckCircle,
  TrendingUp,
  Activity,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const DashboardContent = () => {
  const actionCards = [
    {
      id: 1,
      title: "Create Workflow",
      description: "Set up automation",
      iconColor: "purple",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Manage Team Members",
      description: "View all Team Members",
      iconColor: "blue",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "White-Label Settings",
      description: "Customize branding",
      iconColor: "yellow",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  const platformStats = [
    { name: "LinkedIn", value: 160 },
    { name: "Instagram", value: 62 },
    { name: "Reels", value: 25 },
  ];

  const activities = [
    {
      id: 1,
      title: "Acme Corp · Q1 Social Campaign",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      title: "Acme Corp · Q1 Social Campaign",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 3,
      title: "TechStart Inc · Product Launch",
      time: "5 hours ago",
      status: "pending",
    },
  ];

  return (
    <div className="px-8 py-6 bg-[#fafafa] min-h-screen">
      <div className="max-w-full pr-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Team Members Card */}
          <Card className="rounded-2xl p-6 shadow-[0_4px_20px_rgba(124,58,237,0.15)] border border-[#7c3aed]/20 bg-gradient-to-br from-[#7c3aed]/5 via-[#a78bfa]/10 to-[#c4b5fd]/5">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white flex items-center justify-center shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm text-[#7c3aed] border border-[#7c3aed]/30">
                  Active
                </div>
              </div>

              <div className="mb-2">
                <div className="text-sm text-[#666] mb-2">
                  Active Team Members
                </div>
                <div className="text-[40px] font-bold text-[#1a1a1a] mb-1">
                  9
                </div>
                <div className="text-sm text-[#777] mb-4">
                  9 of 10 seats used
                </div>
              </div>

              <div className="h-2 bg-white/50 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full shadow-[0_1px_4px_rgba(124,58,237,0.4)]"
                  style={{ width: "90%" }}
                />
              </div>

              <Button
                variant="link"
                className="text-[#7c3aed] text-sm font-semibold no-underline p-0 h-auto hover:text-[#a78bfa] hover:no-underline hover:shadow-[0_0_8px_rgba(124,58,237,0.3)] transition-all duration-200"
              >
                Add More Team Members →
              </Button>
            </CardContent>
          </Card>

          {/* Posts Generated Card */}
          <Card className="rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0f0f0] bg-white">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#d1fae5] text-[#10b981] flex items-center justify-center text-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <Badge className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d1fae5] text-[#059669] hover:bg-[#d1fae5] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +23%
                </Badge>
              </div>
              <div className="text-sm text-[#737373] mb-2">Posts Generated</div>
              <div className="text-[40px] font-bold text-[#1a1a1a] mb-3">
                247
              </div>
              <div className="text-sm text-[#a3a3a3] mb-4">
                89 posts this week
              </div>
              <div className="flex gap-3 mt-4">
                {platformStats.map((platform, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-[#f9fafb] p-3 rounded-lg text-center"
                  >
                    <div className="text-xs text-[#737373] mb-1">
                      {platform.name}
                    </div>
                    <div className="text-lg font-bold text-[#1a1a1a]">
                      {platform.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Approvals Card */}
          <Card className="rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0f0f0] bg-white">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#fef3c7] text-[#f59e0b] flex items-center justify-center text-2xl">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
              <div className="text-sm text-[#737373] mb-2">
                Pending Approvals
              </div>
              <div className="text-[40px] font-bold text-[#1a1a1a] mb-3">
                18
              </div>
              <div className="text-sm text-[#a3a3a3] mb-6">
                Keep up the great work!
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex flex-col">
                  <div className="text-xs text-[#737373] mb-1">
                    Avg. per day
                  </div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">
                    8.2 posts
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-[#737373] mb-1">Most active</div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">
                    Weekdays
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {actionCards.map((card) => (
            <Card
              key={card.id}
              className="rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0f0f0] bg-white flex items-center gap-4 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            >
              <CardContent className="p-0 flex items-center gap-4 w-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                    card.iconColor === "purple"
                      ? "bg-[#ede9fe] text-[#7c3aed]"
                      : card.iconColor === "blue"
                      ? "bg-[#dbeafe] text-[#3b82f6]"
                      : "bg-[#fef3c7] text-[#f59e0b]"
                  }`}
                >
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#737373]">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity & Upgrade Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Recent Activity Section */}
          <Card className="rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0f0f0] bg-white">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                    Recent Activity
                  </h2>
                  <p className="text-sm text-[#737373]">
                    Your latest content generations
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-[#1a1a1a] text-sm font-semibold no-underline p-0 h-auto hover:text-[#7c3aed] hover:no-underline"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>

              <div className="flex flex-col gap-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 bg-[#fafafa] rounded-xl hover:bg-[#f5f5f5] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                          activity.status === "completed"
                            ? "bg-[#ede9fe] border-[#7c3aed]"
                            : "bg-[#fef3c7] border-[#f59e0b]"
                        }`}
                      >
                        {activity.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-[#7c3aed]" />
                        ) : (
                          <Clock className="w-5 h-5 text-[#f59e0b]" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-xs text-[#a3a3a3]">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                        activity.status === "completed"
                          ? "bg-[#d1fae5] text-[#059669] hover:bg-[#d1fae5]"
                          : "bg-[#fed7aa] text-[#ea580c] hover:bg-[#fed7aa]"
                      }`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Card */}
          <Card className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-2xl p-8 text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] border-0">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Star className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold mb-3">Upgrade to Pro</h2>
              <p className="text-sm leading-relaxed opacity-95 mb-6">
                Get unlimited credits and advanced features to supercharge your
                content creation
              </p>

              <div className="flex flex-col gap-3 mb-7">
                {[
                  "Unlimited generations",
                  "Advanced analytics",
                  "Priority support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-3.5 bg-white text-[#7c3aed] hover:bg-white/90 border-none rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                View Plans
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
