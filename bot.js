const Discord = require('discord.js');
const client = new Discord.Client();
const komut  = require('./komut.json');

var prefix = komut.prefix

client.on('ready', () => {
  console.log(`Botum olan ${client.user.tag} sunucuya giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('AleykümSelam Dostum');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Sanada Günaydın Dostum');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('Tatlı Rüyalar');
  }
});



client.on('message', message => {

  if (message.content.toLowerCase() === prefix + 'profil') {
    message.channel.send(message.author.displayAvatarURL());
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '『📋』log');
  if (!channel) return;
  channel.send(`Sunucu Girdi,${member}`);
});
//////////////////////////////////////////

client.on('message', async message => {
  if (message.content.startsWith('*play')) {
   const args = message.content.split(' ').slice(1)
   const botmesajı = args.join(" ")
   if (!botmesajı) return message.reply('Lütfen önce bir URL belirtiniz!')
   if (message.member.voice.channel) {
     const connection = await message.member.voice.channel.join();
     const ytdl = require('ytdl-core');
     connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly'}) )
   } else {
     message.reply('Lütfen önce bir ses kanalına katılınız!');
   }
  }
})
////////////////////////////////////////////
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'bilgi') {
    msg.channel.send('xxxxxxxxxxxxxxxxxxxxxxxx');
  }





  console.log(`${client.user.tag} aktif edildi:)`);
  client.user.setActivity('Bot Şuan Gelişim Aşamasındadır.', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);

});

client.login('ODI2NDgwMDkyODMzOTA2NzQ4.YGNFkQ.tU8ZtW3HDb-Vt3psDWDGwS6LVkg');
