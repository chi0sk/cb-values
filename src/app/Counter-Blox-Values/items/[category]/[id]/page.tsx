import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { items } from "@/lib/mock-data";
import { Item } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ItemDetailPageProps {
  params: {
    category: string;
    id: string;
  };
}

export function generateMetadata({ params }: ItemDetailPageProps): Metadata {
  const item = items.find(i => i.id === parseInt(params.id));

  if (!item) {
    return {
      title: "Item Not Found | Counter Blox Values",
      description: "The requested Counter Blox item could not be found.",
    };
  }

  return {
    title: `${item.name} | Counter Blox Values`,
    description: `View the current value of ${item.name} in Counter Blox. Base value: ${item.baseValue}, Rares value: ${item.raresValue}.`,
  };
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  // Find the item based on the ID
  const item = items.find(i => i.id === parseInt(params.id));

  // If item not found, show 404
  if (!item) {
    notFound();
  }

  const changeIcon = item.recentChanges?.type === "increase"
    ? "https://ext.same-assets.com/3519986169/252809013.svg"
    : item.recentChanges?.type === "decrease"
      ? "https://ext.same-assets.com/3519986169/1998853253.svg"
      : null;

  const similarItems = items
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link href={`/Counter-Blox-Values/${item.category}`} className="inline-flex items-center text-muted-foreground hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to {item.category}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="card-gradient border-muted overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute top-4 left-4 z-10 bg-background/80 px-3 py-1 rounded text-sm font-medium">
                  {item.type}
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </Card>
          </div>

          <div>
            <Card className="card-gradient border-muted">
              <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Base Value</h3>
                    <p className="text-xl font-bold">{item.baseValue}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Rares Value</h3>
                    <p className="text-xl font-bold">{item.raresValue}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Category</h3>
                    <p className="font-medium">{item.category}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Status</h3>
                    <p className="font-medium">{item.status}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Last Updated</h3>
                    <p className="font-medium">{item.lastUpdated}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Recent Changes</h3>
                    {item.recentChanges ? (
                      <div className="flex items-center">
                        {changeIcon && (
                          <Image
                            src={changeIcon}
                            width={16}
                            height={16}
                            alt={item.recentChanges.type}
                            className="mr-1"
                          />
                        )}
                        <span className={`font-medium ${
                          item.recentChanges.type === "increase" ? "text-green-500" : "text-red-500"
                        }`}>
                          {item.recentChanges.type === "increase" ? "" : "-"}{item.recentChanges.value}K
                        </span>
                      </div>
                    ) : (
                      <p className="font-medium">N/A</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-muted">
                  <Button
                    className="w-full"
                    asChild
                  >
                    <Link href="/Counter-Blox-Values/Calculator">
                      Add to Calculator
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Similar Items</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {similarItems.map(similarItem => (
                  <Link
                    key={similarItem.id}
                    href={`/Counter-Blox-Values/items/${similarItem.category.toLowerCase()}/${similarItem.id}`}
                    className="card-gradient border border-muted rounded-lg overflow-hidden transition-transform hover:scale-[1.03]"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={similarItem.imageUrl}
                        alt={similarItem.name}
                        fill
                        className="object-cover p-4"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <h3 className="text-sm font-medium truncate">{similarItem.name}</h3>
                      <p className="text-xs text-muted-foreground">{similarItem.baseValue}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
