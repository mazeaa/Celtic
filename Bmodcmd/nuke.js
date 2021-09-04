module.exports = {
  name: "nuke",
code: `$deleteIn[5s] $deleteChannels[$channelID]
$channelSendMessage[$cloneChannel[$channelID;yes];{title:Nuked! 💥} {image:https://c.tenor.com/RlvO_fx80XwAAAAM/nuke-nuclear-bomb.gif} {color:ff2050}]
$onlyPerms[admin;Missing Permission: \`ADMINISTRATOR\`]
`
}