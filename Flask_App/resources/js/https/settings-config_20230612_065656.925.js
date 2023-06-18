﻿window.config = {
    webofficeDomain: 'https://manager.thegradiantgroup.online/', // url к API UtipOffice. Пример: "http://weboffice.com/",
    mobileDomain: 'https://mobile.thegradiantgroup.online/', // url к Mobile Trader's Room. Пример: "http://mobiletradersroom.com/",
    mcheeseWidgetsDomain: 'https://api.marketcheese.com/widgets/', // API url к виджетам Market Cheese
    language: 'en', //язык
    theme: 'lime',  //цветовая тема
    apiKey: 'KRnLvBhNL801',      //значение apiKey берется из настроек продукта UtipOffice (protected/config/local.php блок params)
    customMainPageEnabled: false, // подключение настраиваемой главной страницы (по умолчанию - отключено). Пример в папке - customPage
    customMainPageCSSDomain: '', // Путь к CSS файлу настраиваемой главной страницы в другом домене: http://...
    metricsAPIKey: 68319754, // APIKey Yandex метрики
    withdrawalOnlyVerified: false,
    affiliatesRoom: {
        frontendDomain: '', // url к Affiliate's Room. Пример: "http://affiliatesroom.com/",
        backendDomain: '', //url к API Affiliate's Room. Пример: "http://api.affiliatesroom.com/",
        apiKey: '', //значение apiKey берется из настроек проекта affiliatesRoom-backend (config/params-local.php)
        appKey: '', //значение appKey берется из настроек проекта affiliatesRoom-backend (config/params-local.php)
    },
	wt1: {                          // первый веб-терминал
        url: 'https://workspace.thegradiantgroup.online',                   // ссылка на старый терминал. при отсутствии или пустой строке - кнопка не отображается. Пример http://webterminal.client-x.com
        iframe: false,            // режим работы терминала. false (по умолчанию) - веб-приложение, true - страница в Trader's Room
        newTab: true,            // открывать ли вт 1.0 в новой вкладке или нет (true/false, по умолчанию true)
        name_ru: "Торговый терминал 1.0",  // название для кнопки wt1 на русском языке               (по умолчанию перевод на русский WebTrader + ' 1.0')
        name_en: "WebTrader 1.0", // название для кнопки wt1 на английском языке             (по умолчанию перевод на английский WebTrader + ' 1.0')
        name_pl: "",// название для кнопки wt1 на польском языке                (по умолчанию перевод на польский WebTrader + ' 1.0')
                   // name_<код языка>: 'текст кнопки'                          (по умолчанию на X-язык WebTrader  + ' 1.0')

    },  
    wt2: {                       // новый веб-трейдер (2.0)
        url: 'https://workspace2.thegradiantgroup.online',                // ссылка на новый терминал. при отсутствии - кнопка не отображается. Пример http://webtrader.client-x.com
        newTab: true,          // открывать ли вт 2.0 в новой вкладке или нет (true/false, по умолчанию true)
        name_ru: "Торговый терминал NEW",  // название для кнопки wt2 на русском языке               (по умолчанию перевод на русский WebTrader + ' NEW')
        name_en: "WebTrader NEW", // название для кнопки wt2 на английском языке             (по умолчанию перевод на английский WebTrader + 'NEW')
        name_pl: "",// название для кнопки wt2 на польском языке                (по умолчанию перевод на польский WebTrader + ' NEW')
                   // name_<код языка>: 'текст кнопки'                          (по умолчанию на X-язык WebTrader  + ' NEW')

    },
};
