module.exports = {
  name: "setlogs",
  code:`$setServerVar[logs;$mentionedChannels[1]] 
  $description[Log channel is now setted in <#$mentionedChannels[1]>]
  $color[GREEN]
  $onlyPerms[admin;You can't set a log channel!]
  $onlyIf[$mentionedChannels[1]!=; pls mention a channel]`
}