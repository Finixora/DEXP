const { Client, GatewayIntentBits, Events, Collection } = require("discord.js");
const moment = require("moment-timezone");
const fs = require("fs");

const TOKEN =
    "MTMwMDkzNzkzMzE4Nzk3NzI3Nw.GkKIn2.tnXFQvQViUQ2coTuKMNbkorysUP5HoTMnrUMJg"; // Replace with your actual bot token
const CHANNEL_ID = "1300947022047871007"; // Replace with your channel ID
const CHANNEL_ID_AR = "1301255282155983061";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();

// Load command files
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        channel.send("DEXP Bot is online!").catch(console.error);
    } else {
        console.error("Channel not found");
    }

    async function sendPolls1(channel) {
        // First Poll
        const poll1 = await channel.send(
            "**Attend Break/Lunch? React with ✅**",
        );
        await poll1.react("✅"); // Green circle for YES
    }

    async function sendPolls2(channel) {
        // First Poll
        const poll2 = await channel.send(
            "**Back from Break/Lunch? React with ✅**",
        );
        await poll2.react("✅"); // Green circle for YES
    }

    // Schedule announcements 6PM SHIFT
    setInterval(async () => {
        const now = moment().tz("America/Los_Angeles");
        console.log(`Current time: ${now.format("YYYY-MM-DD HH:mm:ss")}`);
        // Example for 6PM Shift Start Announcement
        if (now.hour() === 8 && now.minute() === 0) {
            channel
                .send(
                    "<@&1300978989443190815>, Shift started at 6:00 PM! **[6:00 PM - 4:00 AM]**\n:bangbang: | MAKE SURE TO START TD (Time Doctor)",
                )
                .catch(console.error);
        }

        if (now.hour() === 10 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Break 1 started at 8:00 PM! **[8:00 PM - 8:15 PM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 10 && now.minute() === 15) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Break 1 ended at 8:15 PM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 13 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Lunch started at 11:00 PM! Enjoy your meal! **[11:00 PM - 12:00 AM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 14 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Lunch ended at 12:00 AM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 15 && now.minute() === 30) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Break 2 started at 1:30 AM! **[1:30 AM - 1:45 AM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 15 && now.minute() === 45) {
            try {
                const message = await channel.send(
                    "<@&1300978989443190815>, Break 2 ended at 1:45 AM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 18 && now.minute() === 0) {
            channel
                .send(
                    "<@&1300978989443190815>, Shift ends right now. Please update your logout in <#1300923298997338123>. See you all tomorrow!",
                )
                .catch(console.error);
        }
        // 5 PM SHIFT ------------------------------------------------------
        if (now.hour() === 7 && now.minute() === 0) {
            channel
                .send(
                    "<@&1300979200488116254>, Shift started at 5:00 PM! **[5 PM - 3 AM]**",
                )
                .catch(console.error);
        }
        if (now.hour() === 9 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Break 1 started at 7:00 PM! **[7:00 PM - 7:15 PM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 9 && now.minute() === 15) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Break 1 ended at 7:15 PM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 11 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Lunch started at 9:00 PM! Enjoy your meal! **[9:00 PM - 10:00 PM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 12 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Lunch ended at 10:00 PM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 15 && now.minute() === 0) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Break 2 started at 1:00 AM! **[1:00 AM - 1:15 AM]**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 15 && now.minute() === 15) {
            try {
                const message = await channel.send(
                    "<@&1300979200488116254>, Break 2 ended at 1:15 AM!\n:bangbang: | **MAKE SURE TO UNPAUSE TD (Time Doctor)**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 17 && now.minute() === 0) {
            channel
                .send(
                    "<@&1300979200488116254>, Shift ends right now. Please update your logout in <#1300923298997338123>. See you all tomorrow!",
                )
                .catch(console.error);
        }
    }, 60000);
}); //LV DEPARTMENT

client.once(Events.ClientReady, () => {
    const channel = client.channels.cache.get(CHANNEL_ID_AR);
    async function sendPolls1(channel) {
        // First Poll
        const poll1 = await channel.send("**Click on ✅ when you login.**");
        await poll1.react("✅"); // Green circle for YES
    }

    async function sendPolls2(channel) {
        // First Poll
        const poll2 = await channel.send("**Click on ✅ when you logout**");
        await poll2.react("✅"); // Green circle for YES
    }

    // Schedule announcements 6PM SHIFT
    setInterval(async () => {
        const now = moment().tz("America/Los_Angeles");
        console.log(`Current time: ${now.format("YYYY-MM-DD HH:mm:ss")}`);
        // Example for 6PM Shift Start Announcement
        if (now.hour() === 12 && now.minute() === 25) {
            try {
                const message = await channel.send(
                    "<@&1301254184053637272>, Your shift started at 6 PM!\n:bangbang: | **MAKE SURE TO START TD (Time Doctor)**",
                );
                await sendPolls1(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
        if (now.hour() === 12 && now.minute() === 26) {
            try {
                const message = await channel.send(
                    "<@&1301254184053637272>, Your shift ends at 3 AM!\n**See you all tomorrow!**",
                );
                await sendPolls2(message.channel);
            } catch (error) {
                console.error(error);
            }
        }
    }, 60000);
}); //AR DEPARTMENT

// Command handling
client.on("messageCreate", (message) => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("There was an error trying to execute that command!");
    }
});

client.login(TOKEN);
