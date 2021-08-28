module.exports = {
  name: "unban",
 code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$description[$username[$message[1]] 
**Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[$addTimestamp]
$onlyBotPerms[ban; I don't have ban perms]
$argsCheck[>1; Please Provide User ID To Unban**]
$onlyPerms[ban; You need ban permission]
$suppressErrors[I can't find the user!]
$color[GREEN]`
}