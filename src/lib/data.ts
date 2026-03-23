import { PartnerPlatform, type Mod, type Partner } from "./types";

export const PARTNERS: Partner[] = [
  {
    name: "The Duper Trooper",
    type: PartnerPlatform.YOUTUBE,
    tag: "@TheDuperTrooper",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kYrSpiQ8-QHVlr8EfRZXwAxkPqCoTmip7eQUDBDNJqkVc=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheDuperTrooper",
  },
  {
    name: "TheMisterEpic",
    type: PartnerPlatform.YOUTUBE,
    tag: "@TheMisterEpic",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_moAuemmWPwA-vT4XgOnm_rfYuhM3cA8pvtZmcTJgCG6ck=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@TheMisterEpic",
  },
  {
    name: "The Horizon",
    type: PartnerPlatform.YOUTUBE,
    tag: "@The_Horizon",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kBEjUgFYQ0RVyh1z5R4XFnUnzF3rdj_M0H0PQgLXF_6w=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@The_Horizon",
  },
  {
    name: "DupersUnited",
    type: PartnerPlatform.YOUTUBE,
    tag: "@dupersunited",
    iconUrl:
      "https://yt3.googleusercontent.com/hiHhWgJhjXp5opFqRLF5HpGZM18OI5-I0f3kFlm1Et7--KOovuPD4c39li4wZgywdLkQflhpJQ=s72-c-k-c0x00ffffff-no-rj",
    url: "https://youtube.com/@dupersunited",
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
    description: "Based Minecraft utility mod.",
    iconUrl: "https://meteorclient.com/icon.png",
    downloadUrl: "https://meteorclient.com/",
    sourceUrl: "https://github.com/MeteorDevelopment/meteor-client",
  },
  {
    name: "UI Utils",
    description:
      "UI-Utils is a mod for debugging plugins, by adding extra capabilities to your client.",
    iconUrl: "https://ui-utils.com/content/ui-utils.png",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/uiutils",
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
    description:
      "A client-side Fabric mod that could scan and pay all online players on multiplayer servers with a GUI.",
    iconUrl:
      "https://cdn.modrinth.com/data/EJO20Qp6/02887dbd66f1009ffaf3fb3acabf990c49ec6198_96.webp",
    downloadUrl: "https://modrinth.com/mod/payeveryone#download",
    sourceUrl: "https://github.com/aurickk/Pay-Everyone",
  },
  {
    name: "PathMind",
    description:
      "A visual sandbox for designing automation workflows in Minecraft",
    iconUrl:
      "https://cdn.modrinth.com/data/GX0d78rL/c059e4980c36c5f72dfa6c0832ba52d13b2d3304.png",
    downloadUrl: "https://modrinth.com/mod/pathmind#download",
    sourceUrl: "https://github.com/soymods/pathmind",
  },
  // {
  //   name: "CatAddons",
  //   description: "A Minecraft 1.21.10 Fabric mod to help debug plugins and servers.",
  //   iconUrl: "https://raw.githubusercontent.com/vinzy-dev/CatAddonsPublic/main/src/main/resources/assets/cataddons/icon.png",
  //   downloadUrl: "https://github.com/vinzy-dev/CatAddonsPublic/releases/latest",
  //   sourceUrl: "https://github.com/vinzy-dev/CatAddonsPublic",
  // }
];
