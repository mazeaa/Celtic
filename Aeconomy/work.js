module.exports = {
  name: "work", 
code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Work]
$description[
Hey, you worked as a $randomText[Hacker;Discord dev;Youtuber; Babysitter; Killer; Hunter; E-girl; E-boy]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[45s;Try again in %time%]`
}
