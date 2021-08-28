module.exports = {
  name:"meme",
  code:`
$color[#ff2050]
$title[MEME]
$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]
$cooldown[5s; Calm down, you have to wait for **5s** to continue on]
$footer[Requested by $username] $addTimestamp`
}