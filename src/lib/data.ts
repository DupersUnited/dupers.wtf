import { PartnerPlatform, type Mod, type Partner } from "./types";

export const PARTNERS: Partner[] = [
  {
    name: "The Duper Trooper",
    type: PartnerPlatform.YOUTUBE,
    tag: "@TheDuperTrooper",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kYrSpiQ8-QHVlr8EfRZXwAxkPqCoTmip7eQUDBDNJqkVc=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheDuperTrooper"
  },
  {
    name: "TheMisterEpic",
    type: PartnerPlatform.YOUTUBE,
    tag: "@TheMisterEpic",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_moAuemmWPwA-vT4XgOnm_rfYuhM3cA8pvtZmcTJgCG6ck=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheMisterEpic"
  },
  {
    name: "The Horizon",
    type: PartnerPlatform.YOUTUBE,
    tag: "@The_Horizon",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kBEjUgFYQ0RVyh1z5R4XFnUnzF3rdj_M0H0PQgLXF_6w=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@The_Horizon"
  },
  {
    name: "Dupers United",
    type: PartnerPlatform.YOUTUBE,
    tag: "@dupersunited",
    iconUrl:
      "https://yt3.googleusercontent.com/hiHhWgJhjXp5opFqRLF5HpGZM18OI5-I0f3kFlm1Et7--KOovuPD4c39li4wZgywdLkQflhpJQ=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@dupersunited"
  },
];

export const MODS: Mod[] = [
  {
    name: "Fabric API",
    description: "Essential hooks for modding with Fabric.",
    iconUrl: "https://cdn.modrinth.com/data/P7dR8mSH/icon.png",
    downloadUrl: "https://modrinth.com/mod/fabric-api#download",
    sourceUrl: "https://github.com/FabricMC/fabric-api",
  },
  {
    name: "Meteor Client",
    description:
      "The base client for Minecraft utility mods. Required for the DupersUnited Addon.",
    iconUrl: "https://meteorclient.com/icon.png",
    downloadUrl: "https://meteorclient.com/",
    sourceUrl: "https://github.com/MeteorDevelopment/meteor-client",
  },
  {
    name: "UI Util",
    description:
      "Manipulate GUIs, close them without packets, save and load them, and more.",
    iconUrl: "https://ui-utils.com/content/ui-utils.png",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/uiutils",
    sourceUrl: "https://github.com/Coderx-Gamer/ui-utils",
  },
  {
    name: "DupersUnited Addon",
    description:
      "A Meteor addon with useful modules and commands for dupe hunting.",
    iconUrl: "/assets/logo.png",
    downloadUrl: "/public-addon",
    sourceUrl: "https://github.com/DupersUnited/du-public-addon",
    official: true,
    disabled: true,
  },
  {
    name: "Pay Everyone Mod",
    description: "Useful for mass-paying players to distribute money.",
    iconUrl:
      "https://cdn.modrinth.com/data/EJO20Qp6/02887dbd66f1009ffaf3fb3acabf990c49ec6198_96.webp",
    downloadUrl: "https://modrinth.com/mod/payeveryone#download",
    sourceUrl: "https://github.com/aurickk/Pay-Everyone",
  },
  {
    name: "PathMind",
    description: "Used to automate tasks with a simple node system!",
    iconUrl:
      "https://cdn.modrinth.com/data/GX0d78rL/c059e4980c36c5f72dfa6c0832ba52d13b2d3304.png",
    downloadUrl: "https://modrinth.com/mod/pathmind#download",
    sourceUrl: "https://github.com/soymods/pathmind",
  },
];