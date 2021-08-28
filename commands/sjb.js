module.exports = {
  name:"setjoinbackground",
 code:`$setServerVar[joinbackground;$message]
 $title[Done ✅] 
 $description[the background has changed to <$message>]
 $onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
$argsCheck[>1;send Url]
$onlyPerms[manageserver;You need manage server permission]
$onlyForIDs[786881456924393472; Imagine using this]
 `
}