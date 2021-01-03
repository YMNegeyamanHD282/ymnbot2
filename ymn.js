const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

  client.on('ready', () => {
      client.user.setActivity('Bakımda')
      console.log('YMN 2 isimli botun aktif')
    });

    const prefix = "."

    client.on('message', message => {
  if (message.content.startsWith(prefix + 'oylama')){
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapabilmek için yeterli yetkiye sahip değilsin!');
    if (!botmesajı) return message.reply('Ne oylanması gerektiğini yazmadınız!');
    message.delete(message.author)
    const embed = new MessageEmbed()
    .setTitle('OYLAMA')
    .setDescription(botmesajı)
    .setFooter('GlobalSpeak');
    message.channel.send({ embed: embed}).then( embedMessage => {
      embedMessage.react(":heavy_check_mark:")
      embedMessage.react(":x:");
    })
  }
})


    client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('!kick')) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
            .kick()
            .then(() => {
              const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
              log.send(`${user.tag} kişisi kicklenmiştir`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
          } else {
            message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
          }
        } else {
          message.reply("Atılacak kişiyi yazmadın");
        }
      }
    });
    client.on('message', message => {
      if (!message.guild) return;
      if (message.content.startsWith('!ban')) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
            .ban()
            .then(() => {
              const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
              log.send(`${user.tag} kişisi banlanmıştır.`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
          } else {
            message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
          }
        } else {
          message.reply("Yasaklanacak kişiyi yazmadın.");
        }
      }
    });

    client.on('guildMemberAdd', member => {
      const gelengiden = member.guild.channels.cache.find(channel => channel.name === 'gelengiden');
      gelengiden.send(`Aramıza Hoşgeldin, ${member}`);
    });

    client.on('guildMemberRemove', member => {
      const gelengiden = member.guild.channels.cache.find(channel => channel.name === 'gelengiden');
      gelengiden.send(`${member} Sunucumuzdan ayrıldı :pleading_face: `);
    });

    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm selam kardeşim hoşgeldin !');
      }
      if (message.content.startsWith('amk')) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
      }
      if (msg.content.toLowerCase() === prefix + 'bitti') {
        msg.channel.send('Üsteki oylamamız bitmiştir.');
      }
      if (msg.content.toLowerCase() === prefix + 'kurallar') {
        msg.reply('#kurallar bölümünde kurallarımız bulunmaktadır .');
      }
      if (msg.content.toLowerCase() === prefix + 'kedi') {
        msg.reply('https://4.bp.blogspot.com/-f22S9VuKT2Y/WuLoZrbN1EI/AAAAAAAALjQ/lMdWBWZRy4sbv6ANFaOZM1T_2WVO4W77gCLcBGAs/s320/DJ_Kedi_03_Muzikliste.gif');
      }
    });

client.login('Nzk1MjY5Njc5OTc5Mjk4ODE2.X_G6mw.L8iM_SKPgPpUrzWshs_w8bgP0E8');
