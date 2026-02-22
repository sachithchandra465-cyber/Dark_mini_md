async function bug(message, client, texts, num) {

    try {
        
            const remoteJid = message.key?.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `database/${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " 𝐃𝐀𝐑𝐊-𝐌𝐈𝐍𝐈-𝐌𝐃 ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029VbASWFzHFxP6cbTkkz08`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });

    } catch (e) {
     console.log(e)

    }
}




            /*const remoteJid = message.key.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " Mr Marc dєv | Dark Shadow dєv ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029VbASWFzHFxP6cbTkkz08`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });
        }
        */
        export default bug;
