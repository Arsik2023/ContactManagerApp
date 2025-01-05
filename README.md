# FullStackApp
## Это SPA-приложение, представляет собой телефонную книжку, где frontend написан на React.js с Bootstrap, а backend на .Net Core. Использованный редактор кода - VS Code.
# Backend
## Весь backend хранится в папке API, для полноценного запуска нужно установить платформу .Net, использовались библиотеки: Microsoft.EntityFrameworkCore, Microsoft.Data.Sqlite, Microsoft.OpenApi.Models, которые нужно скачать. Также была удалена база данных, но она создасться после запуска проекта, с уже созданными пользователями, также в файле appsettings.json нужно указать строку подключения(SqliteStringConnection) и адресс клиента(client)
# Frontend
## Весь frontend хранится в папке client, для полноценного запуска нужно установить Node.js, также убедиться, что работают команды npm и npx, и дальше в терминале написать npm i, это поможет установить необходимые библиотеки, которые использовались. Также был добавлен в папке client файл .env, в нём находиться ссылка на контроллер ContactManagement
## Использованные технологии: Frontend - React.js, JS, Bootstrap, Backend - C#, .Net Core, Rest API, SQLite, EF Core
