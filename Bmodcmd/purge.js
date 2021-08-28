module.exports = {
  name: "purge",
aliases: ['clear'],
code: `$deleteIn[5s] $author[Cleaning;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Done** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **were cleared**;1];&$mentioned[1]&;**of last messages of**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$cooldown[10s;<@$authorID> **You need to wait %time% to use this command again**]
$footer[Cleared By: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Try:** \`!purge <number>\`]
$onlyIf[$noMentionMessage<=900; **You can only purge 5 to 900 messages per command**]
$onlyIf[$noMentionMessage>=5;**You can only purge 5 to 900 messages per command**]
$onlyIf[$noMentionMessage!=;** Add a number to delete the messages**, **Try:** \`!purge <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose the number of messages to delete! **Try:** \`C!purge <number>\`]
$onlyIf[$message[1]!=;**Try:** \`C!purge <number>\`]
$onlyBotPerms[managemessages;**I don't have \`MANAGE_MESSAGES\` permissions to use this command**]
$onlyPerms[managemessages;**You dont have this perm to delete messages:** __**Manage Messages**__]`
}