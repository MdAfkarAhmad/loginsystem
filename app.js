const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8278558775:AAGCNxUMf_QG6CzI6Jd_uhwkeNu5bKR2Bps";

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
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

bot.on("callback_query", (query) => {
    if (query.data === "join") {
        bot.answerCallbackQuery(query.id);

        bot.sendMessage(
            query.message.chat.id,
            "✅ You joined the competition!\n\nThe competition will start soon."
        );
    }
});

console.log("Bot is running...");
