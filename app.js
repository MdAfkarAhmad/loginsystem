const { Bot } = require("node-telegram-bot-api");

const TOKEN = "8278558775:AAGCNxUMf_QG6CzI6Jd_uhwkeNu5bKR2Bps";

const bot = new Bot(TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply(
        "🏆 Welcome to Study Battle!\n\nPress the button below to start.",
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🏆 Join Competition",
                            callback_data: "join"
                        }
                    ]
                ]
            }
        }
    );
});

bot.on("callback_query", async (ctx) => {
    if (ctx.callbackQuery.data === "join") {
        await ctx.answerCallbackQuery();

        await ctx.reply(
            "✅ You joined the competition!"
        );
    }
});

bot.startPolling();

console.log("Bot is running...");
