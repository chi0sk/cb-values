"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradeAdsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Counter Blox Trade Ads</h1>
          <p className="text-muted-foreground">Find trades or post your own trade ads</p>
        </div>

        <Card className="card-gradient border-muted">
          <CardHeader>
            <CardTitle>Trade Advertisements</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-16">
            <p className="text-muted-foreground">Trade ads feature coming soon!</p>
            <p className="text-sm mt-2">Join our Discord to trade in the meantime.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
