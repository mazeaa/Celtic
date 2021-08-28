module.exports = {
  name:"setjc",
 code:`$title[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[jointitle];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no];(user.mention);<@$authorID>]]
$description[<@$authorID> $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joindescription];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]]
$image[attachment://Welcome.png]
 $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=Now%20We%20Are%20$membersCount%20Members%20&background=$getServerVar[joinbackground]&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3;Welcome.png]
 $footer[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinfooter];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]]
 $onlyIf[$getServerVar[joinchannel]!=;]
$onlyIf[$getServerVar[joindescription]!=;**you didn't set the join description**]
$onlyIf[$getServerVar[joinfooter]!=; **you didn't set join footer]
$onlyIf[$getServerVar[jointitle]!=;**you didn't set the join title**]
$onlyIf[$getServerVar[joinbackground]!=;**you didn't set the join background**]
$color[RANDOM]
$onlyForIDs[786881456924393472; Imagine using this]
`
}