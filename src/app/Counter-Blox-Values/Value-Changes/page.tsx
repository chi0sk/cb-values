"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { items } from "@/lib/mock-data";

export default function ValueChangesPage() {
  // Filter items that have recent changes
  const changedItems = items.filter(item => item.recentChanges !== null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Counter Blox Value Changes</h1>
          <p className="text-muted-foreground">Track the latest value changes in Counter Blox items</p>
        </div>

        <Card className="card-gradient border-muted mb-8">
          <CardHeader>
            <CardTitle>Recent Value Changes</CardTitle>
          </CardHeader>
          <CardContent>
            {changedItems.length > 0 ? (
              <div className="space-y-4">
                {changedItems.map(item => {
                  const changeIcon = item.recentChanges?.type === "increase"
                    ? "https://ext.same-assets.com/3519986169/252809013.svg"
                    : "https://ext.same-assets.com/3519986169/1998853253.svg";

                  return (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-muted">
                      <div className="flex items-center">
                        <div className="w-12 h-12 relative mr-3">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={changeIcon}
                          width={16}
                          height={16}
                          alt={item.recentChanges?.type || ""}
                          className="mr-1"
                        />
                        <span className={`font-medium ${
                          item.recentChanges?.type === "increase" ? "text-green-500" : "text-red-500"
                        }`}>
                          {item.recentChanges?.type === "increase" ? "+" : "-"}{item.recentChanges?.value}K
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recent value changes.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
