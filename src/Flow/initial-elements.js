import { Profile } from "../ControlMenu/Profile";

import steffon from "../media/Steffon_Baratheon.webp"
import robert from "../media/525px-RobertBKingMagali_Villeneuve.webp"
import renly from "../media/Renly_Baratheon.webp"
import stannis from "../media/Stannis_Baratheon.webp"

export const nodes = [
    {
        id: "1",
        data: {
            label: Profile({name: "Steffon Baratheon", dates: "246 AC - 278 AC", biopic: "Steffon Baratheon was the Lord of Storm's End and the head of House Baratheon during the reign of kings Jaehaerys II and Aerys II Targaryen.", picture: steffon})
        },
        position: { x: 250, y: 0 }
    },
    {
        id: "2",
        data: {
            label: Profile({name: "Robert", dates: "283 AC - 298 AC", biopic: "Robert was crowned king after King Aerys II Targaryen was killed during Robert's Rebellion.", picture: robert})
        },
        position: { x: 50, y: 300 }
    },
    {
        id: "3",
        data: {
            label: Profile({name: "Stannis", dates: "264 AC", biopic: "Stannis Baratheon is the head of House Baratheon of Dragonstone and the Lord of Dragonstone.", picture: stannis})
        },
        position: { x: 250, y: 300 }
    },
    {
        id: "4",
        data: {
            label: Profile({name: "Renly", dates: "277 AC - 299 AC", biopic: "The younger brother of King Robert I and Lord Stannis, Renly serves as master of laws on Robert's small council.", picture: renly})
        },
        position: { x: 450, y: 300 }
    },
];

export const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },
];
