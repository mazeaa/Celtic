module.exports = {
  name: "$alwaysExecute",
    code: `$channelSendMessage[$systemChannelID; **Thank you for boosting us!** $userTag]
$onlyIf[$checkContains[$tolowercase[$messageType];premium]==true;]
`}