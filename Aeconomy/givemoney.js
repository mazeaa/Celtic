module.exports = {
  name: "givemoney", 
code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username gave $username[$mentioned[1]] money]
$description[
$username gave $username[$mentioned[1]] **$noMentionMessage** :dollar:!
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[Wallet;$mentioned[1]];$noMentionMessage]** :dollar: in his wallet!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[Wallet;$authorID];**⛔ You don't have enough in your wallet**]
$onlyIf[$mentioned[1]!=$authorID;**imagine having money in wallet**]
$onlyIf[$mentioned[1]!=;**imagine mentioning** Usage: \`C!givemoney <@user> <amount>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ You can't give money to a Discord bot**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ That is not a number, try using this format**: \`C!givemoney <@user> <amount>\`]
$suppressErrors[Usage: **C!givemoney <@user> <amount>**]`
}