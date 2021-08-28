module.exports = {
  name: "nowplaying",
  aliases: ['np'],
  code: `$title[$songInfo[title]]
  $addField[URL:;$songInfo[url]]
  $addField[Duracion:;$songInfo[duration]]
  $addField[Added by:;$userTag[$songInfo[userID]]]
  $footer[]
  $addTimestamp
  $color[$random[0;999999]]`
}