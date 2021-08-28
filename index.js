const Aoijs = require("aoi.js")
const express = require("express");
var fs = require('fs')

const bot = new Aoijs.Bot({
token:"Token",
  prefix: "C!",
})
  bot.onMessage()
  var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./commands/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }
  
  var reader = fs.readdirSync("./Amusic/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./Amusic/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }
  var reader = fs.readdirSync("./Bmodcmd/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./Bmodcmd/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }
   var reader = fs.readdirSync("./Aeconomy/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./Aeconomy/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }
  //status
  bot.status({

    text: "C!play C!help ",

    type: "PLAYING",
  })
  bot.deletedCommand({
    channel: "$getServerVar[logs]",
    code: `
$title[Deleted Message!]
$description[
**Author: **<@$authorID>
**Message: **$message
**Channel: **<#$channelUsed>]
$color[RED]
$footer[$username;$authorAvatar]`
  })
  bot.onMessageDelete()

  bot.updateCommand({
    channel: "$getServerVar[logs]",
    code: `
$title[Edited Message!]
$description[
**Author: ** <@$authorID>
**Before: ** $oldmessage
**After: ** $message
**Channel: ** <#$channelUsed>]
$color[BLUE]
$footer[$username;$authorAvatar]`
  })
  bot.onMessageUpdate()

  bot.variables({
    logs: "",
  })

  bot.awaitedCommand({
    name: "rerole",
    code: `
    $sendDM[$authorID;{description:You got an role on :  **$serverName**!} {color:GREEN}]
    $giveRole[$authorID;$getServerVar[rr]]`
  })

  bot.variables({
    rr: "",
    rch: "",
    rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
    lvl: "0",
    exp: "0",
    rexp: "40",
    rsystem: "0"
  })

  bot.joinCommand({
    channel: "$getServerVar[joinchannel]",
    code: `$title[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[jointitle];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no];(user.mention);<@$authorID>]]
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
`
  });
  bot.onJoined();

  bot.variables({
    prefix: "C!",
    joindescription: "",
    joinchannel: "",
    joinfooter: "",
    jointitle: "",
    joinbackground: "",
  })

bot.variables({
    XP: "0",
    Bank: "0",
    Wallet: "0",
    psuffix: '0',
    tv: "0",
    duffle: '0',
    bag: "0",
    smartphone: "0",
    laptop: "0",
    car: "0",
    truck: "0",
    helicopter: "0",
    apartment: "0",
    house: "0",
    mansion: "0",
    DailyChest: "0",
    lucky: "0",
    spiteful: "0",
})

require('./server')();

bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})
