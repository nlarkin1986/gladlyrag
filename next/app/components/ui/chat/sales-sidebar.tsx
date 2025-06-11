"use client";

import { Card } from "../card";
import { Badge } from "../badge";
import { Button } from "../button";
import { 
  FileText, 
  Phone, 
  DollarSign, 
  Zap, 
  Users, 
  Target,
  TrendingUp,
  Award
} from "lucide-react";

export function SalesSidebar() {
  const quickLinks = [
    { icon: FileText, label: "Product Sheets", color: "text-blue-600" },
    { icon: DollarSign, label: "Pricing Guide", color: "text-green-600" },
    { icon: Phone, label: "Demo Scripts", color: "text-purple-600" },
    { icon: Zap, label: "Battle Cards", color: "text-orange-600" },
  ];

  const metrics = [
    { label: "Avg Deal Size", value: "$45K", trend: "+12%" },
    { label: "Win Rate", value: "68%", trend: "+5%" },
    { label: "Sales Cycle", value: "45 days", trend: "-8%" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      {/* Quick Access */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-gladly-green" />
          Quick Access
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {quickLinks.map((link, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              className="justify-start gap-2 hover:bg-gladly-green-light hover:border-gladly-green"
            >
              <link.icon className={`w-4 h-4 ${link.color}`} />
              <span className="text-xs">{link.label}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Key Metrics */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-gladly-green" />
          Key Metrics
        </h3>
        <div className="space-y-3">
          {metrics.map((metric, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{metric.value}</span>
                <Badge variant="secondary" className="text-xs bg-gladly-green-light text-gladly-green">
                  {metric.trend}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Products */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-gladly-green" />
          Top Products
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Sidekick Voice</span>
            <Badge className="bg-gladly-green text-white">HOT</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Gladly Platform</span>
            <Badge variant="secondary">Popular</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">AI Agent</span>
            <Badge variant="secondary">New</Badge>
          </div>
        </div>
      </Card>

      {/* Customer Insights */}
      <Card className="p-4 flex-1">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Users className="w-4 h-4 text-gladly-green" />
          Customer Insights
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• 87% report improved CSAT</p>
          <p>• 45% reduction in handle time</p>
          <p>• 3x agent productivity gains</p>
          <p>• ROI within 6 months</p>
        </div>
      </Card>
    </div>
  );
}