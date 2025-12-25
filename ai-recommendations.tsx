"use client"

import { Card } from "@/components/ui/card"
import { Sparkles, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export function AIRecommendations() {
  const recommendations = [
    {
      title: "আপনার জন্য সুপারিশ",
      game: "Free Fire Uid Topup",
      reason: "AI বিশ্লেষণ: সবচেয়ে দ্রুত ডেলিভারি",
      discount: "১৫% ছাড়",
      color: "from-blue-600 to-blue-500",
      slug: "uid-topup-bd-server",
    },
    {
      title: "ট্রেন্ডিং এখন",
      game: "Weekly/Monthly পাস",
      reason: "এই সপ্তাহে সর্বাধিক বিক্রিত",
      discount: "বিশেষ অফার",
      color: "from-purple-600 to-purple-500",
      slug: "weekly-monthly",
    },
  ]

  return (
    <section className="px-4 pb-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-bold text-foreground">AI সুপারিশ</h2>
        <div className="ml-auto bg-indigo-600/20 text-indigo-600 text-xs font-semibold px-2 py-1 rounded-full">
          স্বয়ংক্রিয়
        </div>
      </div>

      <div className="grid gap-3">
        {recommendations.map((rec, index) => (
          <Link key={index} href={`/game/${rec.slug}`}>
            <Card
              className={`bg-gradient-to-br ${rec.color} p-4 border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {index === 0 ? (
                    <Zap className="w-5 h-5 text-yellow-300" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-yellow-300" />
                  )}
                  <span className="text-white/90 text-xs font-semibold">{rec.title}</span>
                </div>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                  {rec.discount}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{rec.game}</h3>
              <p className="text-white/80 text-sm">{rec.reason}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-4 p-3 bg-indigo-600/10 border border-indigo-600/20 rounded-xl">
        <p className="text-xs text-muted-foreground text-center">
          <Sparkles className="w-3 h-3 inline mr-1" />
          Premium AI আপনার পছন্দ ও ট্রেন্ড বিশ্লেষণ করে এই সুপারিশ দিচ্ছে
        </p>
      </div>
    </section>
  )
}
