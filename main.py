from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.fsm.context import FSMContext
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
import asyncio
import json

bot = Bot('7317590523:AAE0JAOK5AJonosZMvIDlfM5rxTS43bTeKw')
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message, state: FSMContext):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, keyboard=[
        [types.KeyboardButton(text='Выбрать товар', web_app=WebAppInfo(url='https://exploranss.github.io /'))]
    ])
    await message.answer("Добро пожаловать, купите пасту!", reply_markup=markup)

@dp.message()
async def web_app(callback_query):
    json_data = callback_query.web_app_data.data
    parsed_data = json.loads(json_data)
    message = ""
    for i, item in enumerate(parsed_data['items'], start=1):
        position = int(item['id'].replace('item', ''))
        message += f"Позиция: {position}\n"
        message += f"Стоимость: {item['price']}\n\n"
    message += f"Общая стоимость товаров: {parsed_data['totalPrice']}"
    await bot.send_message(callback_query.from_user.id,f"""
{message}
""")

    await bot.send_message(callback_query.from_user.id, f"""
новый заказ
{message}
    """)
async def main():
    await dp.start_polling(bot)
if __name__ == '__main__':
    asyncio.run(main())
