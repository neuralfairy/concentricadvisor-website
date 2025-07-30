"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Target,
  Zap,
  Users,
  BarChart3,
  Split,
  Filter,
  Clock,
  Brain,
  Workflow,
  CheckCircle,
} from "lucide-react"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("drip-campaigns")

  const features = [
    {
      id: "drip-campaigns",
      title: "Drip Campaigns",
      icon: <Mail className="h-6 w-6" />,
      description: "Automated email sequences that nurture leads over time",
      benefits: [
        "Visual drag-and-drop campaign builder",
        "Trigger-based automation",
        "Personalized content delivery",
        "Multi-path customer journeys",
      ],
    },
    {
      id: "lead-scoring",
      title: "Lead Scoring",
      icon: <Target className="h-6 w-6" />,
      description: "AI-powered lead qualification and prioritization",
      benefits: [
        "Behavioral scoring algorithms",
        "Demographic data integration",
        "Real-time score updates",
        "Sales team notifications",
      ],
    },
    {
      id: "ab-testing",
      title: "A/B Testing",
      icon: <Split className="h-6 w-6" />,
      description: "Optimize campaigns with statistical significance",
      benefits: [
        "Subject line optimization",
        "Content variation testing",
        "Send time experiments",
        "Automated winner selection",
      ],
    },
    {
      id: "segmentation",
      title: "Segmentation",
      icon: <Filter className="h-6 w-6" />,
      description: "Precise audience targeting for maximum relevance",
      benefits: ["Dynamic list segmentation", "Behavioral triggers", "Custom field filtering", "Real-time updates"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E3] to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-[#E63946] text-white hover:bg-[#E63946]/90 mb-4">Platform Features</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-[#E63946]"> Scale Email Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From automated drip campaigns to AI-powered lead scoring, iEMA provides all the tools you need to create,
            optimize, and scale your email marketing efforts.
          </p>
          <Button size="lg" className="bg-[#E63946] hover:bg-[#E63946]/90 text-white">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center gap-2 data-[state=active]:bg-[#E63946] data-[state=active]:text-white"
                >
                  {feature.icon}
                  <span className="hidden sm:inline">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                      </div>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-[#E63946] hover:bg-[#E63946]/90 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <Card className="border-0 shadow-2xl">
                      <CardContent className="p-8">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{feature.title} Dashboard</h3>
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </div>
                          <div className="h-48 bg-gradient-to-br from-[#E63946]/10 to-[#E63946]/5 rounded-lg flex items-center justify-center">
                            <div className="text-center space-y-2">
                              {feature.icon}
                              <p className="text-sm text-gray-500">Interactive {feature.title} Interface</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#FFF3E3] p-3 rounded-lg text-center">
                              <div className="text-xl font-bold text-[#E63946]">94%</div>
                              <div className="text-xs text-gray-600">Success Rate</div>
                            </div>
                            <div className="bg-[#FFF3E3] p-3 rounded-lg text-center">
                              <div className="text-xl font-bold text-[#E63946]">2.3x</div>
                              <div className="text-xs text-gray-600">ROI Increase</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600">Powered by AI and built for scale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-[#E63946]" />,
                title: "AI Optimization",
                description:
                  "Machine learning algorithms optimize send times, subject lines, and content for maximum engagement.",
              },
              {
                icon: <Workflow className="h-8 w-8 text-[#E63946]" />,
                title: "Workflow Automation",
                description: "Create complex, multi-step workflows that respond to customer behavior in real-time.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-[#E63946]" />,
                title: "Advanced Analytics",
                description: "Deep insights into campaign performance, customer behavior, and ROI metrics.",
              },
              {
                icon: <Clock className="h-8 w-8 text-[#E63946]" />,
                title: "Send Time Optimization",
                description: "AI determines the optimal send time for each individual recipient.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#E63946]" />,
                title: "Customer Journey Mapping",
                description: "Visualize and optimize the complete customer experience across all touchpoints.",
              },
              {
                icon: <Zap className="h-8 w-8 text-[#E63946]" />,
                title: "Real-time Personalization",
                description: "Dynamic content that adapts based on recipient behavior and preferences.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E63946] to-[#E63946]/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see how iEMA can transform your email marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#E63946] hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#E63946] bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
