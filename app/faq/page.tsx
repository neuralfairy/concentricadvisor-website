"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create my first email campaign?",
          answer:
            "Creating your first campaign is easy! After signing up, navigate to the 'Campaigns' section, click 'Create New Campaign', choose your template, customize your content, select your audience, and hit send. Our step-by-step wizard guides you through the entire process.",
        },
        {
          question: "What's included in the free trial?",
          answer:
            "Our 14-day free trial includes access to all features in the Professional plan: unlimited campaigns, up to 1,000 contacts, automation workflows, A/B testing, and priority support. No credit card required to start.",
        },
        {
          question: "How long does it take to set up iEMA?",
          answer:
            "Most users are up and running within 5-10 minutes. The setup process includes connecting your email domain, importing contacts, and creating your first campaign template.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What automation workflows are available?",
          answer:
            "iEMA offers pre-built workflows for welcome series, abandoned cart recovery, lead nurturing, re-engagement campaigns, and more. You can also create custom workflows using our visual drag-and-drop builder.",
        },
        {
          question: "How does the AI optimization work?",
          answer:
            "Our AI analyzes your audience behavior, engagement patterns, and campaign performance to optimize send times, subject lines, and content. It continuously learns from your data to improve results over time.",
        },
        {
          question: "Can I segment my email lists?",
          answer:
            "Yes! You can create dynamic segments based on demographics, behavior, engagement history, purchase data, and custom fields. Segments update automatically as your contacts' data changes.",
        },
      ],
    },
    {
      category: "Integrations",
      questions: [
        {
          question: "Which CRM systems do you integrate with?",
          answer:
            "iEMA integrates with 50+ platforms including Salesforce, HubSpot, Pipedrive, Zoho, ActiveCampaign, and many more. We also support Zapier for connecting with 1,000+ additional apps.",
        },
        {
          question: "How do I connect my e-commerce platform?",
          answer:
            "We have native integrations with Shopify, WooCommerce, Magento, and BigCommerce. Simply install our app from your platform's app store and follow the connection wizard.",
        },
        {
          question: "Can I sync data in real-time?",
          answer:
            "Yes, most integrations support real-time data sync. Contact information, purchase history, and behavioral data are updated automatically across all connected platforms.",
        },
      ],
    },
    {
      category: "Billing & Plans",
      questions: [
        {
          question: "Can I change my plan at any time?",
          answer:
            "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences on your next invoice.",
        },
        {
          question: "What happens if I exceed my contact limit?",
          answer:
            "We'll notify you when you're approaching 80% of your limit. If you exceed it, we'll temporarily pause new contact additions until you upgrade or the next billing cycle begins.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What support channels are available?",
          answer:
            "We offer multiple support channels: email support for all plans, live chat for Professional and Enterprise users, phone support for Enterprise customers, and a comprehensive knowledge base with tutorials and guides.",
        },
        {
          question: "What are your support hours?",
          answer:
            "Email support is available 24/7 with responses within 24 hours. Live chat is available Monday-Friday, 9 AM-6 PM PST. Enterprise customers have access to 24/7 phone support.",
        },
        {
          question: "Do you provide onboarding assistance?",
          answer:
            "Yes! All new customers receive a welcome email with setup guides, video tutorials, and best practices. Professional and Enterprise customers get personalized onboarding calls with our success team.",
        },
      ],
    },
    {
      category: "Compliance & Security",
      questions: [
        {
          question: "Is iEMA GDPR compliant?",
          answer:
            "Yes, iEMA is fully GDPR compliant. We provide tools for consent management, data portability, right to deletion, and maintain detailed audit logs. Our privacy policy outlines all data handling practices.",
        },
        {
          question: "How do you ensure email deliverability?",
          answer:
            "We maintain high deliverability through dedicated IP pools, authentication protocols (SPF, DKIM, DMARC), reputation monitoring, and partnerships with major ISPs. Our average deliverability rate is 99.2%.",
        },
        {
          question: "What security measures do you have in place?",
          answer:
            "iEMA uses enterprise-grade security including SSL encryption, SOC 2 compliance, regular security audits, two-factor authentication, and role-based access controls. All data is encrypted at rest and in transit.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E3] to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-[#E63946] text-white hover:bg-[#E63946]/90 mb-4">Help Center</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-[#E63946]"> Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about iEMA's features, pricing, and setup process.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:border-[#E63946] focus:ring-[#E63946]"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No questions found matching your search.</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse all categories.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex
                      const isOpen = openItems.includes(globalIndex)

                      return (
                        <Card key={questionIndex} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-[#E63946] flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E63946] to-[#E63946]/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">Our support team is here to help you get the most out of iEMA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E63946] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#E63946] px-8 py-3 rounded-md font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
