export type ItemType = "normal" | "Stat Track";

export type ItemStatus = "Stable" | "Fluctuating" | "Rising" | "Dropping";

export type ItemCategory = "Pistols" | "Rifles" | "SMG" | "Heavy" | "Knifes" | "Gloves" | "Misc" | "all";

export interface ItemChange {
  value: number;
  type: "increase" | "decrease" | "stable";
}

export interface Item {
  id: number;
  name: string;
  type: ItemType;
  category: ItemCategory;
  baseValue: string | number;
  raresValue: string | number;
  imageUrl: string;
  recentChanges: ItemChange | null;
  lastUpdated: string;
  status: ItemStatus;
}

export interface FilterState {
  search: string;
  types: ItemType[];
  statuses: ItemStatus[];
  sortBy: "By Category" | "Newest" | "Oldest" | "Value Low to High" | "Value High to Low";
  valueRange: {
    from: number | null;
    to: number | null;
  };
  category: ItemCategory;
}
