module.exports = {
  name: "bal", 
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Get some help please]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RED]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[
$addField[💵 Wallet;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
]
$addField[🏦 Bank;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[💸 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]`
}