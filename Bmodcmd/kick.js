module.exports = {
name: "kick",
code: `$kick[$findUser[$message[1]]]
 $title[Kick]
 $description[
 Successfully kicked the user
 ** User Tag:** $userTag[$findUser[$message[1]]]
 **User Mention:** <@$findUser[$message[1]]>
 ** User ID:** $findUser[$message[1]]]
 $footer[Kicked by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ I can't kick my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ You can't kick yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ You can't kick someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ I can't kick someone with higher or the same roles as me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ I Couldn't find a member with this name/id/mention in this server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ I can't kick the server owner! or else that user isn't in the server!**]
$onlyIf[$message[1]!=;**❌ Please mention someone to kick**]
$onlyBotPerms[kick;**❌ The bot doesn't have enough permissions to kick users**]
$onlyPerms[kick;**❌ You don't have enough permission to kick the user**]`
}