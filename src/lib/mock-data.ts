import { Item, ItemCategory } from "./types";

// Sample item data based on the scraped website
export const items: Item[] = [
  {
    id: 1,
    name: "ak47 godess",
    type: "normal",
    category: "Rifles",
    baseValue: "460k",
    raresValue: "657k",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530992795435108/AK47_Godess.png",
    recentChanges: {
      value: 15,
      type: "increase"
    },
    lastUpdated: "7 months ago",
    status: "Rising"
  },
  {
    id: 2,
    name: "ak47 hallows",
    type: "normal",
    category: "Rifles",
    baseValue: "20k",
    raresValue: "28k",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530993030311996/AK47_Hallows.png",
    recentChanges: {
      value: 2,
      type: "decrease"
    },
    lastUpdated: "7 months ago",
    status: "Dropping"
  },
  {
    id: 3,
    name: "ak47 code orange",
    type: "normal",
    category: "Rifles",
    baseValue: 2,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530993957261312/AK47_Code_Orange.png",
    recentChanges: null,
    lastUpdated: "7 months ago",
    status: "Stable"
  },
  {
    id: 4,
    name: "ak47 bloodboom",
    type: "normal",
    category: "Rifles",
    baseValue: 40,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530993487495249/AK47_Bloodboom.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 5,
    name: "ak47 ace",
    type: "normal",
    category: "Rifles",
    baseValue: 11,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530993273589780/AK47_Ace.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 6,
    name: "ak47 eve",
    type: "normal",
    category: "Rifles",
    baseValue: "15.4k",
    raresValue: "22k",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530994162778242/AK47_Eve.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 7,
    name: "ak47 clown",
    type: "normal",
    category: "Rifles",
    baseValue: 9,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530993718177822/AK47_Clown.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 8,
    name: "ak47 gifted",
    type: "normal",
    category: "Rifles",
    baseValue: 40,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530992287924234/AK47_Gifted.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 9,
    name: "ak47 quantum",
    type: "normal",
    category: "Rifles",
    baseValue: 25,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066531093672628304/AK47_Quantum.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 10,
    name: "ak47 quicktime",
    type: "normal",
    category: "Rifles",
    baseValue: 600,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066531093903331338/AK47_Quicktime.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 11,
    name: "ak47 scapter",
    type: "normal",
    category: "Rifles",
    baseValue: "1.6M",
    raresValue: "2.2M",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066531094100455484/AK47_Scapter.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Fluctuating"
  },
  {
    id: 12,
    name: "ak47 maker",
    type: "normal",
    category: "Rifles",
    baseValue: 1,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066531065105219655/AK47_Maker.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 35,
    name: "ak47 glo",
    type: "Stat Track",
    category: "Rifles",
    baseValue: "???",
    raresValue: "600k",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530992556355654/AK47_Glo.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Fluctuating"
  },
  {
    id: 36,
    name: "ak47 glo",
    type: "normal",
    category: "Rifles",
    baseValue: "250k",
    raresValue: "357k",
    imageUrl: "https://cdn.discordapp.com/attachments/1063148952066740264/1066530992556355654/AK47_Glo.png",
    recentChanges: {
      value: 29,
      type: "increase"
    },
    lastUpdated: "7 months ago",
    status: "Rising"
  },
  {
    id: 43,
    name: "aug mystique",
    type: "normal",
    category: "Rifles",
    baseValue: 100,
    raresValue: "N/A",
    imageUrl: "https://cdn.discordapp.com/attachments/1063285434702102539/1066532412705742958/AUG_Mystique.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Stable"
  },
  {
    id: 44,
    name: "aug nighthawk",
    type: "normal",
    category: "Rifles",
    baseValue: "3.5M",
    raresValue: "5m",
    imageUrl: "https://cdn.discordapp.com/attachments/1063285434702102539/1066532412969996329/AUG_NightHawk.png",
    recentChanges: null,
    lastUpdated: "1 year ago",
    status: "Fluctuating"
  }
];

export const categories: ItemCategory[] = [
  "all",
  "Pistols",
  "Rifles",
  "SMG",
  "Heavy",
  "Knifes",
  "Gloves",
  "Misc"
];
