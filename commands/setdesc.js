module.exports = {
  name:"setjoindescription",
 code:`$setServerVar[joindescription;$message]
 $title[Done ✅] 
 $description[the description has changed to $message]
 $onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
$argsCheck[>1;Write something]
$onlyPerms[manageserver;You need manage server permission]
$onlyForIDs[786881456924393472; Imagine using this]
 `
}