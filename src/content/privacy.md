# DupersUnited Mod: Privacy Policy

Last updated: October 5, 2026

Contact: the DupersUnited Discord ([discord.gg/dupes](https://discord.gg/dupes)) or the GitHub
issue tracker for [DupersUnited/dupersunited-mod](https://github.com/DupersUnited/dupersunited-mod).

The data controller is the DupersUnited Discord community. Data requests
are handled through a support ticket in the Discord.

This Policy explains what the DupersUnited mod and our backend at
`dupersunited-server.dupers.wtf` collect, what we do with it, and what we
never collect. Our server software is private; the mod client is open
source.

## 1. Information we collect

**Minecraft identity.** When you link your account, we receive your
Minecraft username and UUID. Verification works through Mojang: the mod
joins a temporary session and Mojang confirms you own the account. We
never ask for or receive your Minecraft access token.

**Cape data.** We store your Minecraft UUID, your selected cape, and the
capes granted to you (including who granted them and any expiry). The mod
also looks up the UUIDs of players you see in-game so it can display
their capes, which means our server sees those lookups.

**Account-link tokens.** Linking issues a temporary token that the mod
stores locally and presents when using cape and account features. These
tokens expire automatically.

**Announcements and server invites.** Our staff may push announcements and
server invites that the mod displays in-game. These are one-way: the mod
cannot send messages, broadcasts, or invites back to us.

**Connection data.** Our server necessarily
sees your IP address when you connect. We use it only for transient
rate-limiting and abuse prevention. It is not kept as a log. We also keep
aggregate, non-identifying connection counts (how many users are online),
which are pruned over time.

## 2. Information we do not collect

- Your Minecraft access tokens or Mojang session credentials.
- Your in-game chat, the addresses of servers you play on, your proxy
  details, or your auto-login passwords. The mod never sends those to us;
  proxy and auto-login details remain in files on your own computer.
- Information about applications outside Minecraft.

## 3. How we use information

We use the information above to verify account ownership, provide capes
and account features, show staff announcements and server invites in-game,
prevent abuse, and keep the service running. We do not sell your data,
serve ads, or track you across websites.

## 4. Who we share it with

- **Mojang**, to verify account ownership and look up player profiles.
- **Discord**, where staff announcements and server invites may also be
  posted (Discord's own retention applies).
- **GitHub**, when the mod fetches public cape textures and community lists.
- **Our update host**, when the mod checks for new versions.
- **Our hosting provider**, which necessarily handles network traffic.

We share nothing else.

## 5. Data stored on your computer

The mod keeps its settings in a `DupersUnited` folder inside your game
directory: preferences, keybinds, link tokens, macros, and any proxy or
auto-login details you choose to save. Proxy credentials and auto-login
passwords are stored in readable form. Anyone with access to your files
can read them. Do not store secrets there that you cannot afford to lose.

## 6. Your rights

You may ask in Discord to see or delete the data we hold about you (your
UUID, cape selection, and tokens). We will revoke tokens and clear cape
data where possible. Temporary tokens expire on their own; cape choices
persist until you change them.

## 7. Children

The mod is not intended for children under 13 (or the minimum age in your
jurisdiction). Do not use it if you cannot agree to these terms.

## 8. Changes to this Policy

We will announce material updates in Discord or GitHub releases and revise
the date above. Significant changes (such as collecting new categories of
data or sharing with new parties) will be called out explicitly.
Continued use after a change means you accept the updated Policy.
