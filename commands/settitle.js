module.exports = {
  name:"setjointitle",
 code:`$setServerVar[jointitle;$message]
 $title[Done ✅] 
 $description[the title has changed to $message]
 $onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
$argsCheck[>1;Write something]
$onlyPerms[manageserver;You need manage server permission]
$onlyForIDs[786881456924393472; Imagine using this]
 `
}