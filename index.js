const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Bot is ready!")
    client.user.setActivity(`문의사항이 있으시면 저에게Dm을 주세요 / 화이트님의 잡업무 수행중`);
});
client.on('message', message => {
        console.log(message.content);
        if(message.content === 'ㅎㅇㅇ') {
        message.channel.send('안녕하세요 반갑습니다. 화이트님에게 문의사항이 있으시면 저한테 Dm을 주세요');
    }

        if(message.content === 'ㅎㅇㄹ') {
        message.channel.send('안녕하세요 반갑습니다. 화이트님에게 문의사항이 있으시면 저한테 Dm을 주세요');
    }

        if(message.content === 'ㅎㅇ') {
        message.channel.send('안녕하세요 반갑습니다. 화이트님에게 문의사항이 있으시면 저한테 Dm을 주세요');
    }

        if(message.content === '안녕하세요') {
        message.channel.send('안녕하세요 반갑습니다. 화이트님에게 문의사항이 있으시면 저한테 Dm을 주세요');
    }

        if(message.content === '/루랑') {
        message.channel.send('탈모+티모');
    }

    if (message.content.startsWith("/추방")) {
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
            var Kick_player = message.mentions.users.first();
            if (Kick_player) {
                try {
                    message.guild.member(Kick_player).kick();
                    message.channel.send("그 서버에서 추방했습니다. 주인님");
                } catch (error) {
                    message.channel.send("주인님 다시 한번 더 지시를 내려주세요" + error)
                }
            } else {
                message.channel.send("주인님, 누굴 추방할까요?");
            }
        } else {
            message.channel.send("누구신데 주인님 행세를 하시는 것이죠?");
        }
	}

	if (message.content.startsWith("/차단")) {
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
            var Ban_player = message.mentions.users.first();
            if (Ban_player) {
                try {
                    message.guild.member(Ban_player).ban();
                    message.channel.send("그 자를 서버에서 차단했습니다. 주인님");
                } catch (error) {
                    message.channel.send("주인님, 누굴 추방할까요?" + error)
                }
            } else {
                message.channel.send("주인님 추방대상을 찾을 수가 없습니다.");
            }
        } else {
            message.channel.send("누구신데 주인님 행세를 하시는 것이죠?");
        }
	}
});


client.login('NzA4OTUzMzg0NDA5MTA0Mzg1.Xre2Sg.91miRCVR-avJNHyCKNYEYjlodjo');
