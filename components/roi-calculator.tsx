"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, DollarSign, Users } from "lucide-react"

export function ROICalculator() {
  const [listSize, setListSize] = useState([5000])
  const [currentOpenRate, setCurrentOpenRate] = useState([25])
  const [currentConversionRate, setCurrentConversionRate] = useState([2])
  const [averageOrderValue, setAverageOrderValue] = useState(100)
  const [emailsPerMonth, setEmailsPerMonth] = useState(4)

  // Calculate current performance
  const currentOpens = (listSize[0] * currentOpenRate[0]) / 100
  const currentConversions = (currentOpens * currentConversionRate[0]) / 100
  const currentRevenue = currentConversions * averageOrderValue * emailsPerMonth

  // Calculate improved performance with iEMA (conservative estimates)
  const improvedOpenRate = Math.min(currentOpenRate[0] * 1.4, 60) // 40% improvement, capped at 60%
  const improvedConversionRate = Math.min(currentConversionRate[0] * 1.3, 10) // 30% improvement, capped at 10%

  const improvedOpens = (listSize[0] * improvedOpenRate) / 100
  const improvedConversions = (improvedOpens * improvedConversionRate) / 100
  const improvedRevenue = improvedConversions * averageOrderValue * emailsPerMonth

  const monthlyIncrease = improvedRevenue - currentRevenue
  const annualIncrease = monthlyIncrease * 12

  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-2xl">
      <CardHeader className="text-center bg-gradient-to-r from-[#E63946] to-[#E63946]/90 text-white rounded-t-lg">
        <CardTitle className="text-3xl font-bold">ROI Calculator</CardTitle>
        <CardDescription className="text-white/90 text-lg">
          See how much more revenue iEMA can generate for your business
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Current Metrics</h3>

            <div className="space-y-2">
              <Label htmlFor="list-size">Email List Size: {listSize[0].toLocaleString()}</Label>
              <Slider
                id="list-size"
                min={1000}
                max={100000}
                step={1000}
                value={listSize}
                onValueChange={setListSize}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="open-rate">Current Open Rate: {currentOpenRate[0]}%</Label>
              <Slider
                id="open-rate"
                min={10}
                max={50}
                step={1}
                value={currentOpenRate}
                onValueChange={setCurrentOpenRate}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conversion-rate">Current Conversion Rate: {currentConversionRate[0]}%</Label>
              <Slider
                id="conversion-rate"
                min={0.5}
                max={10}
                step={0.1}
                value={currentConversionRate}
                onValueChange={setCurrentConversionRate}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aov">Average Order Value ($)</Label>
              <Input
                id="aov"
                type="number"
                value={averageOrderValue}
                onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                placeholder="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="frequency">Emails per Month</Label>
              <Input
                id="frequency"
                type="number"
                value={emailsPerMonth}
                onChange={(e) => setEmailsPerMonth(Number(e.target.value))}
                placeholder="4"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Potential with iEMA</h3>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{improvedOpenRate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Improved Open Rate</div>
                  <div className="text-xs text-green-600 mt-1">
                    +{(improvedOpenRate - currentOpenRate[0]).toFixed(1)}%
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-0">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{improvedConversionRate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Improved Conversion</div>
                  <div className="text-xs text-green-600 mt-1">
                    +{(improvedConversionRate - currentConversionRate[0]).toFixed(1)}%
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-800">${monthlyIncrease.toLocaleString()}</div>
                  <div className="text-lg text-green-700">Additional Monthly Revenue</div>
                  <div className="text-2xl font-semibold text-green-800 mt-4">${annualIncrease.toLocaleString()}</div>
                  <div className="text-sm text-green-600">Additional Annual Revenue</div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#FFF3E3] p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">How we calculated this:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 40% improvement in open rates through AI optimization</li>
                <li>• 30% improvement in conversions via better targeting</li>
                <li>• Based on industry benchmarks and customer results</li>
              </ul>
            </div>

            <Button className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-white text-lg py-3">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
