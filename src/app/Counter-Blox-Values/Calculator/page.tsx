import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Counter Blox Calculator | Trade Value Calculator",
  description: "Calculate the value of your Counter Blox trades with our easy-to-use calculator tool. Compare items and ensure fair trades.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Counter Blox Calculator</h1>
          <p className="text-muted-foreground">Calculate values for your trades</p>
        </div>

        <Card className="card-gradient border-muted">
          <CardHeader>
            <CardTitle>Trade Calculator</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-16">
            <p className="text-muted-foreground">Calculator feature coming soon!</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
