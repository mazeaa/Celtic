module.exports = {
name: 'setslowmode',
usage: 'setslowmode <time>',
 description: 'changes the slowmode of current channel',
 category: 'Moderator',
    code: `$slowmode[$channelID;$message]
 $title[Slowmode is now updated!]
 $description[✅ Slow mode is now updated to $message]
 $footer[]
 $color[GREEN]
 $suppressErrors[:x: Failed To Update The Slowmode!]
 $onlyPerms[manageserver; :no: You Need To Be An MANAGE_SERVER]`
}