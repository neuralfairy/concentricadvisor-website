"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ArrowRight, Check, Star, Zap, Crown } from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      icon: <Zap className="h-6 w-6" />,
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 1,000 contacts",
        "5 email campaigns per month",
        "Basic automation workflows",
        "Email templates library",
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      icon: <Star className="h-6 w-6" />,
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "Up to 10,000 contacts",
        "Unlimited email campaigns",
        "Advanced automation workflows",
        "A/B testing",
        "Lead scoring",
        "Advanced analytics",
        "CRM integrations",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      icon: <Crown className="h-6 w-6" />,
      monthlyPrice: 199,
      annualPrice: 165,
      features: [
        "Unlimited contacts",
        "Unlimited campaigns",
        "Custom automation workflows",
        "Advanced A/B testing",
        "AI-powered optimization",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "SSO & advanced security",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E3] to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-[#E63946] text-white hover:bg-[#E63946]/90 mb-4">Simple Pricing</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for
            <span className="text-[#E63946]"> Your Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our free trial, then choose a plan that scales with your business. No hidden fees, cancel
            anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-[#E63946]" />
            <span className={`text-lg ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Annual</span>
            {isAnnual && <Badge className="bg-green-100 text-green-800 ml-2">Save 20%</Badge>}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-[#E63946] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#E63946] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? "bg-[#E63946] text-white" : "bg-[#E63946]/10 text-[#E63946]"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-gray-500">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-1">Billed annually (${plan.annualPrice * 12})</p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#E63946] hover:bg-[#E63946]/90 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All plans come with a 14-day free trial. No credit card required to get started.",
              },
              {
                question: "What happens if I exceed my contact limit?",
                answer:
                  "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll temporarily pause new contact additions until the next billing cycle.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer:
                  "Our Enterprise plan can be customized to meet your specific needs, including custom integrations, dedicated support, and volume discounts.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E63946] to-[#E63946]/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses using iEMA to automate and optimize their email marketing.
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
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
