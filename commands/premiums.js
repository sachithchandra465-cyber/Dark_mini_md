import configmanager from "../utils/configmanager.js";

import fs from 'fs'


export async function modifyprem(client, message, action) {

    const filePath = "db.json"

    let list = configmanager.premiums

    try {
        const remoteJid = message.key?.remoteJid;

        if (!remoteJid) throw new Error("Invalid remote JID.");

        // Normalize command input
        const messageBody = message.message?.extendedTextMessage?.text || message.message?.conversation || '';

        const commandAndArgs = messageBody.slice(1).trim(); // Remove prefix and trim

        const parts = commandAndArgs.split(/\s+/);

        const args = parts.slice(1); // Extract arguments

        let participant;

        // Handle reply to message
        if (message.message?.extendedTextMessage?.contextInfo?.quotedMessage) {

            participant = message.message?.extendedTextMessage?.contextInfo?.participant || message.key.participant;

        } else if (args.length > 0) {

            const jidMatch = args[0].match(/\d+/); // Extract numbers only

            if (!jidMatch) throw new Error("Invalid participant format.");

            participant = jidMatch[0] + '@s.whatsapp.net';

        } else {

            throw new Error("No participant specified.");
        }

        if (action === "add") {

            if (!list.includes(participant)) {

                list.push(participant);

                configmanager.saveP()

            } else {

                return 

            }

        } else if (action === "remove") {

            for (const [key, value] of Object.entries(list)){

                if (value == participant){

                    delete list[key]

                    configmanager.saveP()
                }
            }

        }
    } catch (error) {

        console.error("Error in premium list:", error);

    }
}

// Export individual functions
export async function addprem(client, message, list) {

    await modifyprem(client, message, list, "add");
}

export async function delprem(message, client, list) {
    
    await modifyprem(client, message, list, "remove");
}

export default { addprem, delprem };
