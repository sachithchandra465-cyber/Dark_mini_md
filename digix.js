export default async function digix(client, message) {
        const replies = [
            '🤖 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 présent !',
            '✅ 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 est là !',
            '👋 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 à ton service !',
            '⚡ 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 présent et prêt !',
            '🎯 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 en ligne !'
        ]
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)]
        
        await client.sendMessage(message.key.remoteJid, {
            text: randomReply
        })
    }
