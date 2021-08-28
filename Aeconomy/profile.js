module.exports = {
  name: "profile",
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**Get some help**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Economy profile]
$color[RANDOM]
$description[
User :
<@$mentioned[1;yes]>

 
**__Chests__**:
**$getGlobalUserVar[DailyChest;$mentioned[1;yes]]** | Daily
**$getGlobalUserVar[lucky;$mentioned[1;yes]]** | Lucky
**$getGlobalUserVar[spiteful;$mentioned[1;yes]]** | Spiteful
 
**__Wallets and others__**:
\`💵\` **$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]**
\`🏦\` **$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
\`📊\` **$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
\`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]**xp`
}