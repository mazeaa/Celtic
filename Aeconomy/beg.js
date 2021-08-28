module.exports = {
  name: "beg", 
code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;25]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Wow a new begger; I used all my money buying property; Poor begger; Imagine begging; How money do you make sitting here begger.;]
]
$footer[💵 +$$random[0;25] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Imagine begging lol, wait for %time%]`
}