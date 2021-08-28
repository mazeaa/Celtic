module.exports = {
  name: "play",
    aliases: ['p'],
    code: `$title[ 🎵  Playing
$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]] $description[$addField[Song Duration:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;];no] $addField[Song Added by:;$userTag[$authorID];no] $addField[URL:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;];no] $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]] $playSong[$message;30m;yes;an error has occured! $message;:x:** | The song was not found, maybe an error has occured!**] 
    $footer[Celtic © 2021 ]] $addTimestamp
     $color[#00FFFF]
     $argsCheck[>1;{title:Error}{description::KBError: Wrong arguments! Try: \`C!play <message/link>\`
You didn't type **music name/link**.}{color:FB1B1B}{timestamp}]
$onlyIf[$voiceID!=;{title:Error}{description::KBError: You're not in a voice channel. Please join one first.}{color:FB1B1B}{timestamp}]
    
    `}