"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle2, Clock } from "lucide-react"

export function AddMoneyForm() {
  const [amount, setAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState<"bkash" | "nagad" | "rocket" | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || !selectedMethod) {
      alert("দয়া করে পরিমাণ এবং পেমেন্ট পদ্ধতি নির্বাচন করুন")
      return
    }
    setShowConfirmation(true)
  }

  const handlePaymentConfirmation = () => {
    setIsProcessing(true)

    // Simulate AI auto-detection of payment
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)

      setTimeout(() => {
        alert(`✓ AI স্বয়ংক্রিয়ভাবে পেমেন্ট কনফার্ম করেছে!\n৳${amount} টাকা আপনার অ্যাকাউন্টে যোগ হয়েছে`)
        setShowConfirmation(false)
        setIsCompleted(false)
        setAmount("")
        setSelectedMethod(null)
      }, 2000)
    }, 3000)
  }

  if (showConfirmation) {
    return (
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-500">
        <div className="text-center">
          {isProcessing ? (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI পেমেন্ট স্বয়ংক্রিয় যাচাই করছে...</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Premium AI সিস্টেম {selectedMethod?.toUpperCase()} পেমেন্ট অটো-ডিটেক্ট করছে
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-indigo-600">
                <Clock className="w-4 h-4 animate-spin" />
                <span>আনুমানিক সময়: 3-5 সেকেন্ড</span>
              </div>
            </>
          ) : isCompleted ? (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">পেমেন্ট সফল!</h3>
              <p className="text-sm text-muted-foreground">AI দ্বারা স্বয়ংক্রিয়ভাবে কনফার্ম করা হয়েছে</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">পেমেন্ট নির্দেশনা</h3>

              <Card className="p-4 bg-white dark:bg-gray-900 border border-indigo-300 mb-4 text-left">
                <p className="text-sm text-foreground mb-2">
                  <strong>পরিমাণ:</strong> ৳ {amount}
                </p>
                <p className="text-sm text-foreground mb-2">
                  <strong>পদ্ধতি:</strong> {selectedMethod?.toUpperCase()}
                </p>
                <p className="text-sm text-foreground mb-3">
                  <strong>অ্যাডমিন নম্বর:</strong> 01XXXXXXXXX
                </p>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">
                    ⚡ উপরের নম্বরে {selectedMethod?.toUpperCase()} Send Money করুন। টাকা পাঠানোর সাথে সাথে AI স্বয়ংক্রিয়ভাবে আপনার
                    পেমেন্ট ডিটেক্ট করবে এবং কনফার্ম করবে!
                  </p>
                </div>
              </Card>

              <Button
                onClick={handlePaymentConfirmation}
                className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold mb-3"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                আমি পেমেন্ট করেছি - AI চেক করুন
              </Button>

              <Button onClick={() => setShowConfirmation(false)} variant="outline" className="w-full">
                বাতিল করুন
              </Button>
            </>
          )}
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <h3 className="font-bold">AI স্বয়ংক্রিয় পেমেন্ট সিস্টেম</h3>
        </div>
        <p className="text-sm text-white/90">
          টাকা পাঠানোর সাথে সাথে Premium AI আপনার পেমেন্ট অটো-ডিটেক্ট করে কনফার্ম করবে। কোনো ম্যানুয়াল অপেক্ষা নেই!
        </p>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-base font-medium text-foreground mb-3">
            Enter the amount
          </label>
          <Input
            id="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-14 text-base bg-card border-border"
          />
        </div>

        <div>
          <label className="block text-base font-medium text-foreground mb-3">পেমেন্ট পদ্ধতি নির্বাচন করুন</label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSelectedMethod("bkash")}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedMethod === "bkash"
                  ? "border-pink-600 bg-pink-50 dark:bg-pink-950"
                  : "border-gray-300 hover:border-pink-400"
              }`}
            >
              <div className="text-2xl font-bold text-pink-600 mb-1">bKash</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Auto
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod("nagad")}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedMethod === "nagad"
                  ? "border-orange-600 bg-orange-50 dark:bg-orange-950"
                  : "border-gray-300 hover:border-orange-400"
              }`}
            >
              <div className="text-2xl font-bold text-orange-600 mb-1">Nagad</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Auto
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod("rocket")}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedMethod === "rocket"
                  ? "border-purple-600 bg-purple-50 dark:bg-purple-950"
                  : "border-gray-300 hover:border-purple-400"
              }`}
            >
              <div className="text-2xl font-bold text-purple-600 mb-1">Rocket</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Auto
              </div>
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={!amount || !selectedMethod}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-lg disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          AI দিয়ে অটো পেমেন্ট শুরু করুন
        </Button>
      </form>
    </div>
  )
}
