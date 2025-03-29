import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Item } from "@/lib/types";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const {
    id,
    name,
    type,
    baseValue,
    raresValue,
    imageUrl,
    recentChanges,
    lastUpdated
  } = item;

  const changeIcon = recentChanges?.type === "increase"
    ? "https://ext.same-assets.com/3519986169/252809013.svg"
    : recentChanges?.type === "decrease"
      ? "https://ext.same-assets.com/3519986169/1998853253.svg"
      : null;

  return (
    <Link href={`/Counter-Blox-Values/items/${item.category.toLowerCase()}/${id}`}>
      <Card className="overflow-hidden card-gradient border-muted transition-transform hover:scale-[1.02] hover:shadow-md">
        <div className="aspect-square relative">
          <div className="absolute top-2 left-2 z-10 bg-background/80 text-xs px-2 py-1 rounded">
            {type}
          </div>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover p-6"
          />
        </div>
        <CardContent className="p-3 space-y-3">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold">{name}</h3>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Base Value</span>
              <span className="text-white font-medium">{baseValue}</span>
            </div>

            {raresValue !== "N/A" && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Rares</span>
                <span className="text-white font-medium">{raresValue}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Recent Changes</span>
              <div className="flex items-center">
                {recentChanges ? (
                  <>
                    <Image
                      src={changeIcon || ""}
                      width={12}
                      height={12}
                      alt={recentChanges.type}
                      className="mr-1"
                    />
                    <span className={`font-medium ${
                      recentChanges.type === "increase" ? "text-green-500" : "text-red-500"
                    }`}>
                      {recentChanges.type === "increase" ? "" : "-"}{recentChanges.value}K
                    </span>
                  </>
                ) : (
                  <span className="text-muted-foreground">N/A</span>
                )}
              </div>
            </div>

            <div className="text-xs text-muted-foreground pt-1 border-t border-muted">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
