module.exports = {
  name: "reactionrole",
    aliases: ['rr'],
    code: `
    $reactionCollector[$splitText[1];$authorID;3w;$message[2];rerole;no]
    $setServerVar[rr;$mentionedRoles[1]] 
    $textSplit[$sendMessage[
    {title:Reaction role! }
    {description:React the emoji $message[2], to get the role}
    <@$mentionedRoles[1]>
    {color:RANDOM}
    {footer:Ok };yes]; ]
    $onlyIf[$mentionedRoles[1]!=;Error! Usage: <@role> <emote>]`
}