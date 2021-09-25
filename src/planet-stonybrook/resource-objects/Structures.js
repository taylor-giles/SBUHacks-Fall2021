import Structure from "../classes/Structure.js";
//NOTE: All costs for structures are set in ResourceManager

export const MILL = new Structure("Mill", "", "../../../Images/New/Mill Card.png", []);
export const REFINERY = new Structure("Refinery", "", "../../../Images/New/Refinery Card.png", []);
export const DRILL = new Structure("Drill", "", "../../../Images/New/Drill Card.png", []);

export const ALL_STRUCTURES = [DRILL, MILL, REFINERY];