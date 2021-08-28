module.exports = {
  name: "ban",
  code:`$title[Ban]
  $ban[$findUser[$message[1]]]
  $description[Successfully banded the user
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Banded by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ I can't ban my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ You can't ban yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ You can't ban someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ I can't ban someone with higher or the same roles as me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ I Couldn't find a member with this name/id/mention in this server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ I can't ban the server owner! or else that user isn't in the server!**]
$onlyIf[$message[1]!=;**❌ Please mention someone to ban**]
$onlyBotPerms[ban;**❌ The bot doesn't have enough permissions to ban users**]
$onlyPerms[ban;**❌ You don't have enough permission to ban the user**]`
}