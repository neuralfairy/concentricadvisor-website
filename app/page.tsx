import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Zap, Users, TrendingUp, Star, Shield, Award, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E3] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#E63946] text-white hover:bg-[#E63946]/90">iEMA Email Marketing Automation</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Smarter Email Automation,
                  <span className="text-[#E63946]"> Better Conversions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Let iEMA deliver the right message, at the right time, to the right lead. Simplify your B2B email
                  marketing with AI-powered automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white px-8 py-3 bg-transparent"
                >
                  Book Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">SSL Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">CAN-SPAM Compliant</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Campaign Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#FFF3E3] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#E63946]">47.3%</div>
                      <div className="text-sm text-gray-600">Open Rate</div>
                    </div>
                    <div className="bg-[#FFF3E3] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#E63946]">12.8%</div>
                      <div className="text-sm text-gray-600">Click Rate</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#E63946]/20 to-[#E63946]/5 rounded-lg flex items-end justify-center">
                    <div className="text-sm text-gray-500">Campaign Performance Chart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by 500+ companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["TechCorp", "InnovateLab", "GrowthCo", "ScaleUp", "DataFlow", "CloudTech"].map((company) => (
              <div key={company} className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose iEMA?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines AI-powered automation with intuitive design to help you create campaigns that
              convert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#E63946]" />
                </div>
                <CardTitle className="text-xl">Increase Open Rates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  AI-powered subject line optimization and send-time intelligence boost your open rates by up to 40%.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-[#E63946]" />
                </div>
                <CardTitle className="text-xl">AI-Optimized Timing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Machine learning algorithms determine the perfect time to send each email for maximum engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#E63946]" />
                </div>
                <CardTitle className="text-xl">CRM Integrations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Seamlessly connect with Salesforce, HubSpot, Pipedrive, and 50+ other platforms you already use.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-[#E63946] to-[#E63946]/90 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">How much more can iEMA make you?</h2>
          <p className="text-xl mb-8 opacity-90">Calculate your potential ROI with our email automation platform</p>
          <Button size="lg" variant="secondary" className="bg-white text-[#E63946] hover:bg-gray-100">
            Calculate Your ROI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#FFF3E3]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechFlow Solutions",
                content:
                  "iEMA increased our email open rates by 45% in just 3 months. The AI optimization is incredible.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Growth Manager",
                company: "ScaleUp Inc",
                content: "The automation workflows saved us 20 hours per week while improving our conversion rates.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "VP Marketing",
                company: "InnovateCorp",
                content: "Best email marketing platform we've used. The CRM integration is seamless and powerful.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#E63946]/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#E63946]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of B2B companies using iEMA to automate, optimize, and scale their email campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
