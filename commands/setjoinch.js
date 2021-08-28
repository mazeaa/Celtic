module.exports = {
   name:"setjoinchannel",
 aliases:"sjc",
 code:`
$setServerVar[joinchannel;$mentionedChannels[1]]
 $title[Done ✅]
$description[The channel has changed to <#$mentionedChannels[1]>]
$onlyIf[$mentionedChannels[1]!=;Mention a channel]
$onlyPerms[manageserver;You need manage server permission]
$onlyForIDs[786881456924393472; Imagine using this]`
}
