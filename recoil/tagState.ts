import { atom } from "recoil";

export const tagState = atom({ key: "tagState", default: "" });
export const readTagState = atom({ key: "currentTag", default: tagState });
