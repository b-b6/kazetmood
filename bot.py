import logging
from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, ContextTypes
import json

# ВСТАВЬТЕ СЮДА ВАШ ТОКЕН ОТ @BotFather
TOKEN = "ВАШ_ТОКЕН_БОТА"
# ВСТАВЬТЕ СЮДА ССЫЛКУ НА ВАШ САЙТ (например, после загрузки на Vercel, Netlify или GitHub Pages)
WEBAPP_URL = "https://ваш-сайт.com" 

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Отправляет сообщение с кнопкой для открытия Web App."""
    keyboard = [
        [InlineKeyboardButton("Открыть магазин 🛍", web_app=WebAppInfo(url=WEBAPP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать в Kazetmood_!\nМужская одежда | Манас | Шабдалы базар\n\nНажмите кнопку ниже, чтобы открыть каталог:",
        reply_markup=reply_markup
    )

async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает данные, полученные из Web App (оформление заказа)"""
    data = json.loads(update.effective_message.web_app_data.data)
    order_text = data.get('text', 'Пусто')
    
    # Отправляем подтверждение пользователю
    await update.message.reply_text(f"🔥 Спасибо за заказ!\nВаш выбор: {order_text}\n\nМенеджер скоро свяжется с вами.")
    
    # Здесь можно добавить пересылку заказа администратору
    # await context.bot.send_message(chat_id="ВАШ_ID", text=f"Новый заказ!\n{order_text}")

if __name__ == '__main__':
    if TOKEN == "ВАШ_ТОКЕН_БОТА":
        print("Пожалуйста, замените ВАШ_ТОКЕН_БОТА на реальный токен от @BotFather в коде bot.py")
    else:
        app = ApplicationBuilder().token(TOKEN).build()
        app.add_handler(CommandHandler("start", start))
        app.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))
        print("Бот запущен. Нажмите Ctrl+C для остановки.")
        app.run_polling()
