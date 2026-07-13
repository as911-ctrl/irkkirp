// ======================================================
//   1. ЦЕНТРАЛЬНАЯ БАЗА ДАННЫХ КАТАЛОГА (МАССИВ WEBP)
// ======================================================
const BRICKS_DATABASE = [
    {
        id: 1,
        category: "recke",
        meta: "Клинкер • М175-М200 • Формат HALB",
        title: "КИРПИЧ RECKE HALB 5-31-00-3-13",
        price: "цена 82 руб 35 коп",
        desc: "Высококачественный клинкерный кирпич с утолщенной стенкой 20 мм и изящной фаской.",
        size: "250х85х40 мм",
        format: "HALB (Половинка)",
        frost: "75 циклов",
        water: "5-6%",
        surface: "фактурный",
        img: "img/recke-1.webp"
    },
    {
        id: 2,
        category: "recke",
        meta: "Клинкер • М175-М200 • Формат HALB",
        title: "КИРПИЧ RECKE HALB 5-31-00-3-43",
        price: "цена 82 руб 35 коп",
        desc: "Облицовочный клинкер благородного темного обжига. Идеальное водопоглощение и надежность.",
        size: "250х85х40 мм",
        format: "HALB (Половинка)",
        frost: "75 циклов",
        water: "5-6%",
        surface: "фактурный",
        img: "img/recke-2.webp"
    },
    {
        id: 3,
        category: "recke",
        meta: "Клинкер • М175-М200 • Формат HALB",
        title: "КИРПИЧ RECKE HALB 2-11-00-3-13",
        price: "цена 82 руб 35 коп",
        desc: "Элитный клинкерный кирпич серого оттенка. Ряды в поддоне проложены защитной бумагой.",
        size: "250х85х40 мм",
        format: "HALB (Половинка)",
        frost: "300 циклов",
        water: "до 2.0%",
        surface: "фактурный",
        img: "img/recke-3.webp"
    },
    {
        id: 4,
        category: "recke",
        meta: "Клинкер • М175-М200 • Формат HALB",
        title: "КИРПИЧ RECKE HALB 5-41-00-3-43",
        price: "цена 82 руб 35 коп",
        desc: "Эксклюзивный фактурный кирпич. Соответствует самым строгим требованиям ГОСТ 530-2012.",
        size: "250х85х40 мм",
        format: "HALB (Половинка)",
        frost: "75 циклов",
        water: "5-6%",
        surface: "фактурный",
        img: "img/recke-4.webp"
    },
    {
        id: 5,
        category: "recke",
        meta: "Клинкер • М175-М200 • 0.8 НФ",
        title: "КИРПИЧ RECKE 0,8 НФ 5-32-00-2 Krator",
        price: "цена 82 руб 35 коп",
        desc: "Премиальная серия Krator с уникальным рельефным нагаром. Глянцевая лицевая поверхность.",
        size: "250х85х65 мм",
        format: "0.8 NF",
        frost: "300 циклов",
        water: "до 2.0%",
        surface: "глянцевая (Krator)",
        img: "img/recke-5.webp"
    },
    {
        id: 6,
        category: "recke",
        meta: "Клинкер • М175-М200 • 0.8 НФ",
        title: "КИРПИЧ RECKE 0,8 НФ 5-32-00-0",
        price: "цена 82 руб 35 коп",
        desc: "Гладкая лаковая поверхность с глубоким темным переливом флэш-обжига. Пустотность 34-36%.",
        size: "250х85х65 мм",
        format: "0.8 NF",
        frost: "300 циклов",
        water: "до 1.8%",
        surface: "глянцевая гладкая",
        img: "img/recke-6.webp"
    },
    {
        id: 7,
        category: "recke",
        meta: "Клинкер • М175-М200 • 1 НФ",
        title: "КИРПИЧ RECKE 5-32-00 1НФ",
        price: "цена 82 руб 35 коп",
        desc: "Классический одинарный формат 1 NF. Удельный вес 2.5 кг, количество штук в поддоне — 480.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "300 циклов",
        water: "до 2.0%",
        surface: "глянцевая гладкая",
        img: "img/recke-7.webp"
    },
    {
        id: 8,
        category: "recke",
        meta: "Клинкер • М175-М200 • 0.7 НФ ЕВРО",
        title: "КИРПИЧ RECKE 5-32-00 0,7НФ ЕВРО",
        price: "цена 82 руб 35 коп",
        desc: "Европейский облегченный формат ЕВРО. Экономичный расход при сохранении абсолютной прочности.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "300 циклов",
        water: "до 2.0%",
        surface: "глянцевая гладкая",
        img: "img/recke-8.webp"
    },
    // --- КАТЕГОРИЯ: MODFORMAT ---
   {
        id: 9,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT БРЮНЕ",
        price: "цена 166 руб 91 коп",
        desc: "Утонченный дизайн коллекции Modformat меняет представление об эстетике фасада.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая ригельная",
        img: "img/modformat-1.webp"
    },
    {
        id: 10,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT ВАРБЕРГ",
        price: "цена 185 руб 22 коп",
        desc: "Идеально воплощает самые смелые авторские замыслы и архитектурные эксперименты.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "рельефная нагар",
        img: "img/modformat-2.webp"
    },
    {
        id: 11,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT ЛЕКНЕС",
        price: "цена 140 руб 41 коп",
        desc: "Эксклюзивный вытянутый формат для создания неповторимого рисунка кирпичной кладки.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая",
        img: "img/modformat-3.webp"
    },
    {
        id: 12,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT БРЕКСТАД",
        price: "цена 183 руб 38 коп",
        desc: "Премиальный облицовочный кирпич глубокого темного оттенка с утолщенной стенкой.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "фактурная",
        img: "img/modformat-4.webp"
    },
    {
        id: 13,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT МАЛЬМЕ",
        price: "цена 188 руб 70 коп",
        desc: "Элитный фасадный материал, устойчивый к суровому сибирскому климату.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая",
        img: "img/modformat-5.webp"
    },
    {
        id: 14,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT МАЛЬМЕ МА",
        price: "цена 141 руб 70 коп",
        desc: "Специальная серия с уникальным цветовым переливом лицевой поверхности.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "ангобированная",
        img: "img/modformat-6.webp"
    },
    {
        id: 15,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT НАРВИК",
        price: "цена 183 руб 44 коп",
        desc: "Светлый благородный оттенок коллекции Нарвик для современной архитектуры.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "текстурированная",
        img: "img/modformat-7.webp"
    },
    {
        id: 16,
        category: "modformat",
        meta: "Лицевой пустотелый • Одинарный",
        title: "КИРПИЧ MODFORMAT ЛЕРУМ",
        price: "цена 175 руб 06 коп",
        desc: "Строгий скандинавский стиль. Идеальная геометрия каждой плитки и кирпича.",
        size: "290х85х50 мм",
        format: "Модформат",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая",
        img: "img/modformat-8.webp"
    },
    // --- КАТЕГОРИЯ: "железногорский" ---
    {
        id: 17,
        category: "zhelez",
        meta: "Ригельный • М300 • Элит",
        title: "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ БЕЛОСНЕЖНЫЙ",
        price: "цена 89 руб 89 коп",
        desc: "Роскошный ригельный кирпич белого цвета. Утолщенная стенка 20 мм с изящной фаской.",
        size: "310х85х50 мм",
        format: "Ригель",
        frost: "100 циклов (F100)",
        water: "7-8%",
        surface: "гладкая",
        img: "img/zhelez-1.webp"
    },
    {
        id: 18,
        category: "zhelez",
        meta: "Ригельный • М300 • Элит",
        title: "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ КРАФТ",
        price: "цена 67 руб 17 коп",
        desc: "Благородная фактура Крафт с уникальным заводским нагаром для стильных фасадов.",
        size: "310х85х50 мм",
        format: "Ригель",
        frost: "100 циклов (F100)",
        water: "7-8%",
        surface: "фактурная крафт",
        img: "img/zhelez-2.webp"
    },
    {
        id: 19,
        category: "zhelez",
        meta: "Ригельный • М300 • Элит",
        title: "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ СЕРЫЙ СКАЛА",
        price: "цена 95 руб 86 коп",
        desc: "Глубокая колотая фактура Скала, имитирующая дикий природный камень. Высочайшая прочность М300.",
        size: "310х85х50 мм",
        format: "Ригель",
        frost: "100 циклов (F100)",
        water: "7-8%",
        surface: "колотая скала",
        img: "img/zhelez-3.webp"
    },
    {
        id: 20,
        category: "zhelez",
        meta: "Ригельный • М300 • Элит",
        title: "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ СЕРЫЙ",
        price: "цена 95 руб 86 коп",
        desc: "Идеально ровная матовая лицевая поверхность серого оттенка. Соответствует ГОСТ 530-2012.",
        size: "310х85х50 мм",
        format: "Ригель",
        frost: "100 циклов (F100)",
        water: "7-8%",
        surface: "матовая гладкая",
        img: "img/zhelez-4.webp"
    },
    // --- КАТЕГОРИЯ: "СТАРООСКОЛЬСКИЙ" ---
    {
        id: 21,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 1 НФ",
        title: "КИРПИЧ СТАРООСКОЛЬСКИЙ СОЛОМЕННЫЙ 1 НФ",
        price: "цена 69 руб 75 коп",
        desc: "Классический одинарный лицевой кирпич приятного соломенного оттенка. Утолщенная стенка 20 мм с фаской.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-7%",
        surface: "гладкая",
        img: "img/oskol-1.webp"
    },
    {
        id: 22,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 0.7 НФ",
        title: "КИРПИЧ ЕВРО СТАРООСКОЛЬСКИЙ СОЛОМЕННЫЙ 0,7 НФ",
        price: "цена 60 руб 50 коп",
        desc: "Экономичный евроформат. Идеальная геометрия и благородный светлый цвет для облицовки загородных резиденций.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "100 циклов",
        water: "6-7%",
        surface: "гладкая",
        img: "img/oskol-2.webp"
    },
    {
        id: 23,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 1 НФ",
        title: "КИРПИЧ СТАРООСКОЛЬСКИЙ МИНДАЛЬ АНТИК 1 НФ",
        price: "цена 69 руб 75 коп",
        desc: "Эксклюзивная фактурная серия Антик в благородном миндальном исполнении. Глубокий рельеф поверхности.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-7%",
        surface: "фактурный антик",
        img: "img/oskol-3.webp"
    },
    {
        id: 24,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 1 НФ",
        title: "КИРПИЧ СТАРООСКОЛЬСКИЙ ДОЛОМИТ БЕЛЫЙ 1 НФ",
        price: "цена 87 руб 20 коп",
        desc: "Белоснежный премиальный оттенок Доломит. Идеально ровные ряды в поддоне проложены защитной бумагой.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-7%",
        surface: "глянцевая гладкая",
        img: "img/oskol-4.webp"
    },
    {
        id: 25,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 0.7 НФ",
        title: "КИРПИЧ ЕВРО СТАРООСКОЛЬСКИЙ ДОЛОМИТ БЕЛЫЙ 0,7 НФ",
        price: "цена 75 руб",
        desc: "Белоснежный евроформат облицовочного кирпича напрямую с завода. Соответствует ГОСТ 530-2012.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "100 циклов",
        water: "6-7%",
        surface: "глянцевая гладкая",
        img: "img/oskol-5.webp"
    },
    {
        id: 26,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 1 НФ",
        title: "КИРПИЧ СТАРООСКОЛЬСКИЙ БЕЛЫЙ 1 НФ",
        price: "цена 87 руб",
        desc: "Чистый белый цвет без посторонних включений. Количество штук в поддоне — 480.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-7%",
        surface: "гладкая",
        img: "img/oskol-6.webp"
    },
    {
        id: 27,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 0.7 НФ",
        title: "КИРПИЧ ЕВРО СТАРООСКОЛЬСКИЙ БЕЛЫЙ 0,7 НФ",
        price: "цена 75 руб",
        desc: "Европейский облегченный формат в белом цвете. Экономия на логистике и фундаменте.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "100 циклов",
        water: "6-7%",
        surface: "гладкая",
        img: "img/oskol-7.webp"
    },
    {
        id: 28,
        category: "oskol",
        meta: "Облицовочный • М175-200 • 1 НФ",
        title: "КИРПИЧ СТАРООСКОЛЬСКИЙ КОРИЧНЕВЫЙ 1 НФ",
        price: "цена 77 руб",
        desc: "Глубокий шоколадный оттенок для создания контрастных архитектурных элементов фасада.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-7%",
        surface: "гладкая",
        img: "img/oskol-8.webp"
    },
     // --- КАТЕГОРИЯ: Ригельный 500 ---
       {
        id: 29,
        category: "akbars",
        meta: "Облицовочный • М150 • Ригель",
        title: "КИРПИЧ РИГЕЛЬНЫЙ АК БАРС ТУМАН КРАСНЫЙ",
        price: "цена 193 руб 00 коп",
        desc: "Эксклюзивный длинный ригельный кирпич красного оттенка Туман. Плотная укладка, соответствие ГОСТ 530-2012.",
        size: "500х85х45 мм",
        format: "Ригель длинный",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая ригельная",
        img: "img/akbars-1.webp"
    },
    {
        id: 30,
        category: "akbars",
        meta: "Облицовочный • М150 • Ригель",
        title: "КИРПИЧ РИГЕЛЬНЫЙ АК БАРС АСТЕРОИД СОДОМА",
        price: "цена 203 руб 00 коп",
        desc: "Премиальный ригельный формат в глубоком темном исполнении Астероид. Элитная архитектура фасада.",
        size: "500х85х45 мм",
        format: "Ригель длинный",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая ригельная",
        img: "img/akbars-2.webp"
    },
    {
        id: 31,
        category: "akbars",
        meta: "Облицовочный • М150 • Ригель",
        title: "КИРПИЧ РИГЕЛЬНЫЙ АК БАРС МЕРКУРИЙ КРАСНЫЙ",
        price: "цена 213 руб 00 коп",
        desc: "Длинный облицовочный кирпич Меркурий с благородным заводским обжигом. Высочайшие декоративные свойства.",
        size: "500х85х45 мм",
        format: "Ригель длинный",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая ригельная",
        img: "img/akbars-3.webp"
    },
    {
        id: 32,
        category: "akbars",
        meta: "Облицовочный • М150 • 1 НФ",
        title: "КИРПИЧ АК БАРС ШОКОЛАД МАРС 1 НФ",
        price: "цена 243 руб 00 коп",
        desc: "Классический одинарный кирпич насыщенного шоколадного цвета. Ряды проложены защитной бумагой.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "7-9%",
        surface: "гладкая",
        img: "img/akbars-4.webp"
    },
    {
        id: 33,
        category: "akbars",
        meta: "Облицовочный • М150 • 1 НФ",
        title: "КИРПИЧ АК БАРС ТУМАН КАНЬОН 1 НФ",
        price: "цена 76 руб 70 коп",
        desc: "Фактурная рельефная лицевая поверхность Каньон с красивой игрой теней на фасаде здания.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "7-9%",
        surface: "рельефная каньон",
        img: "img/akbars-5.webp"
    },
    {
        id: 34,
        category: "akbars",
        meta: "Облицовочный • М150 • 1 НФ",
        title: "КИРПИЧ АК БАРС СЕРЫЙ ЛОФТ КОЛОТАЯ ФАСКА",
        price: "цена 91 руб 00 коп",
        desc: "Стильное решение в стиле Лофт со специальной колотой фаской, имитирующей ручную обработку.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "7-9%",
        surface: "колотая фаска",
        img: "img/akbars-6.webp"
    },
    {
        id: 35,
        category: "akbars",
        meta: "Облицовочный • М150 • 1 НФ",
        title: "КИРПИЧ АК БАРС ФЛЭШ КОСМО РИФ 1 НФ",
        price: "цена 76 руб 00 коп",
        desc: "Серия Космо Риф с выразительным накатом. Эффектный пестрый фасад за счет флэш-обжига.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-8%",
        surface: "рифленая космо",
        img: "img/akbars-7.webp"
    },
    {
        id: 36,
        category: "akbars",
        meta: "Облицовочный • М150 • 1 НФ",
        title: "КИРПИЧ АК БАРС ФЛЭШ КОСМО ГЛАДКИЙ 1 НФ",
        price: "цена 75 руб 00 коп",
        desc: "Идеально гладкая лаковая поверхность с глубокими переливами флэш-обжига Татарстан.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6-8%",
        surface: "гладкая космо",
        img: "img/akbars-8.webp"
    },
    // --- КАТЕГОРИЯ: "баварская кладка" ---
     {
        id: 37,
        category: "bavar",
        meta: "Облицовочный • М200 • 1 НФ",
        title: "КИРПИЧ МЮНХЕН КЛАССИК 1НФ ТЕМНЫЙ ОТТЕНОК",
        price: "цена 82 руб 20 коп",
        desc: "Классический одинарный лицевой кирпич с эффектным темным флэш-обжигом от завода Пятый Элемент.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-1.webp"
    },
    {
        id: 38,
        category: "bavar",
        meta: "Облицовочный • М200 • 1 НФ",
        title: "КИРПИЧ РЕГЕНСБУРГ КЛАССИК 1НФ САМАЯ ПЕСТРАЯ ЛИНЕЙКА",
        price: "цена 82 руб 20 коп",
        desc: "Максимально выразительный контрастный переход от красного к глубокому графитовому нагару.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-2.webp"
    },
    {
        id: 39,
        category: "bavar",
        meta: "Облицовочный • М200 • 0.7 НФ",
        title: "КИРПИЧ МЮНХЕН КЛАССИК 0,7НФ ТЕМНЫЙ ОТТЕНОК",
        price: "цена 71 руб 88 коп",
        desc: "Евроформат облицовочного кирпича в темном баварском исполнении. Экономия веса и объема.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-3.webp"
    },
    {
        id: 40,
        category: "bavar",
        meta: "Облицовочный • М200 • 0.7 НФ",
        title: "КИРПИЧ РЕГЕНСБУРГ КЛАССИК 0,7НФ САМАЯ ПЕСТРАЯ ЛИНЕЙКА",
        price: "цена 71 руб 88 коп",
        desc: "Пестрый европейский формат лицевого кирпича напрямую с производства. ГОСТ 530-2012.",
        size: "250х85х65 мм",
        format: "0.7 NF Евро",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-4.webp"
    },
    {
        id: 41,
        category: "bavar",
        meta: "Облицовочный • М200 • 0.5 НФ",
        title: "КИРПИЧ МЮНХЕН КЛАССИК 0,5 НФ ТЕМНЫЙ ОТТЕНОК",
        price: "цена 61 руб 08 коп",
        desc: "Узкий формат половинки 0.5 НФ. Идеален для дизайнерской отделки и реставрационных фасадных работ.",
        size: "250х60х65 мм",
        format: "0.5 NF Половинка",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-5.webp"
    },
    {
        id: 42,
        category: "bavar",
        meta: "Облицовочный • М200 • 0.5 НФ",
        title: "КИРПИЧ РЕГЕНСБУРГ КЛАССИК 0,5 НФ САМАЯ ПЕСТРАЯ ЛИНЕЙКА",
        price: "цена 61 руб 08 коп",
        desc: "Облегченная половинка с максимальным градиентом пестрых оттенков для неповторимого рисунка кладки.",
        size: "250х60х65 мм",
        format: "0.5 NF Половинка",
        frost: "100 циклов",
        water: "6.1 - 8.9%",
        surface: "гладкая флэш",
        img: "img/bavar-6.webp"
    },
    {
        id: 43,
        category: "bavar",
        meta: "Тротуарный • М800 • Брусчатка",
        title: "БРУСЧАТКА КЛИНКЕРНАЯ МЮНХЕН И РЕГЕНСБУРГ",
        price: "цена 79 руб 30 коп",
        desc: "Сверхпрочный клинкер для мощения дорожек и преображения придомовой территории. Морозостойкость 300 циклов.",
        size: "250х80х52 мм",
        format: "Тротуарный клинкер",
        frost: "300 циклов (F300)",
        water: "до 2.5%",
        surface: "матовая дорожная",
        img: "img/bavar-7.webp"
    },
    // --- КАТЕГОРИЯ: "Plinfa" ---
     {
        id: 44,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F200",
        title: 'КИРПИЧ PLINFA "Twin 3801"',
        price: "цена 123 руб 99 коп",
        desc: "Эксклюзивный облицовочный кирпич ручной формовки. Высочайшая морозостойкость 200 циклов.",
        size: "220х85х55 мм",
        format: "Ручная формовка",
        frost: "200 циклов (F200)",
        water: "до 8%",
        surface: "фактурная ручная",
        img: "img/plinfa-1.webp"
    },
    {
        id: 45,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F200",
        title: 'КИРПИЧ PLINFA "Twin 3802"',
        price: "цена 143 руб 27 коп",
        desc: "Премиальный фасадный материал ручной работы в благородном тёмном исполнении.",
        size: "220х85х50 мм",
        format: "Ручная формовка",
        frost: "200 циклов (F200)",
        water: "до 8%",
        surface: "фактурная ручная",
        img: "img/plinfa-2.webp"
    },
    {
        id: 46,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F200",
        title: 'КИРПИЧ PLINFA "Twin 3803"',
        price: "цена 124 руб 75 коп",
        desc: "Лицевой кирпич ручной формовки с уникальным переливом нагара для элитных усадеб.",
        size: "220х85х55 мм",
        format: "Ручная формовка",
        frost: "200 циклов (F200)",
        water: "до 8%",
        surface: "фактурная ручная",
        img: "img/plinfa-3.webp"
    },
    {
        id: 47,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2715"',
        price: "цена 125 руб 98 коп",
        desc: "Полнотелый облицовочный кирпич серии Iron. Железная прочность М300 для вековых фасадов.",
        size: "270х85х50 мм",
        format: "Ручная формовка",
        frost: "100 циклов (F100)",
        water: "до 7%",
        surface: "рельефная состаренная",
        img: "img/plinfa-4.webp"
    },
    {
        id: 48,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2912"',
        price: "цена 141 руб 56 коп",
        desc: "Фактурный кирпич ручной работы с глубоким шоколадно-графитовым оттенком.",
        size: "270х85х50 мм",
        format: "Ручная формовка",
        frost: "100 циклов (F100)",
        water: "до 7%",
        surface: "рельефная состаренная",
        img: "img/plinfa-5.webp"
    },
    {
        id: 49,
        category: "plinfa",
        meta: "Ручная формовка • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2922"',
        price: "цена 154 руб 75 коп",
        desc: "Элитная ручная формовка серии Iron. Соответствует строгим требованиям ГОСТ 530-2012.",
        size: "270х85х50 мм",
        format: "Ручная формовка",
        frost: "100 циклов (F100)",
        water: "до 7%",
        surface: "рельефная состаренная",
        img: "img/plinfa-6.webp"
    },
    {
        id: 50,
        category: "plinfa",
        meta: "Полнотелый • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2804"',
        price: "цена 168 руб 94 коп",
        desc: "Полнотелый ригельный кирпич ручной формовки. Идеален для заборов, каминов и фасадов премиум-класса.",
        size: "270х85х50 мм",
        format: "Полнотелый ригель",
        frost: "100 циклов (F100)",
        water: "до 6%",
        surface: "фактурная ручная",
        img: "img/plinfa-7.webp"
    },
    {
        id: 51,
        category: "plinfa",
        meta: "Полнотелый • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2302"',
        price: "цена 179 руб 75 коп",
        desc: "Тяжёлый полнотелый кирпич ручной работы с уникальным клеймом русских мастеров.",
        size: "270х85х50 мм",
        format: "Полнотелый ригель",
        frost: "100 циклов (F100)",
        water: "до 6%",
        surface: "фактурная ручная",
        img: "img/plinfa-8.webp"
    },
    {
        id: 52,
        category: "plinfa",
        meta: "Облицовочный • М300 • F100",
        title: 'КИРПИЧ PLINFA "Iron 2306"',
        price: "цена 127 руб 54 коп",
        desc: "Классический формат 1 НФ в премиальном исполнении ручной формовки бренда PLINFA.",
        size: "215х102х65 мм",
        format: "1 NF Одинарный",
        frost: "100 циклов (F100)",
        water: "до 7%",
        surface: "рельефная ручная",
        img: "img/plinfa-9.webp"
    },
   // --- "tsegla" ---
    {
        id: 53,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2",
        price: "цена от 4800 руб/кв.м",
        desc: "Экологически чистый продукт ручной формовки. Уникальная фактура поверхности как отпечаток пальцев.",
        size: "210х50х12 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-1.webp"
    },
    {
        id: 54,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 4",
        price: "цена от 4800 руб/кв.м",
        desc: "Изготавливается на основе элитной глины и немецких минеральных пигментов. Не выгорает на солнце.",
        size: "205х50х12 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-2.webp"
    },
    {
        id: 55,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 4 ЛОФТ",
        price: "цена от 4800 руб/кв.м",
        desc: "Стильная лофтовая серия с брутальным нагаром. Каждая плитка уникальна и не повторяет рисунок.",
        size: "205х50х12 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "лофт фактура",
        img: "img/tsegla-3.webp"
    },
    {
        id: 56,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2/1",
        price: "цена от 4800 руб/кв.м",
        desc: "Высококачественные материалы из Белоруссии. Плитка не трескается и не рассыпается со временем.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-4.webp"
    },
    {
        id: 57,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2/2",
        price: "цена от 4800 руб/кв.м",
        desc: "Премиальная ручная работа. Обладает высокой маркой прочности М500 и устойчивостью к сибирским морозам.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-5.webp"
    },
    {
        id: 58,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 3 АНТИК ТАЙЛ",
        price: "цена от 4800 руб/кв.м",
        desc: "Эксклюзивная состаренная серия Антик Тайл. Поверхность имитирует старинную европейскую кладку.",
        size: "305х52х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "состаренная антик",
        img: "img/tsegla-6.webp"
    },
    {
        id: 59,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 3/1",
        price: "цена от 4800 руб/кв.м",
        desc: "Благородный светлый оттенок. Немецкие минеральные пигменты обеспечивают вековую стойкость цвета.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-7.webp"
    },
    {
        id: 60,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2/3",
        price: "цена от 4800 руб/кв.м",
        desc: "Насыщенный меланжевый переход тонов обжига. Идеально подходит для элитной отделки цоколей и фасадов.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-8.webp"
    },
    {
        id: 61,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ АНТИК ТАЙЛ",
        price: "цена от 4800 руб/кв.м",
        desc: "Удлиненный формат серии Антик Тайл. Живописный рельеф ручной работы для дизайнерских интерьеров и фасадов.",
        size: "305х52х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "состаренная антик",
        img: "img/tsegla-9.webp"
    },
    {
        id: 62,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2/4",
        price: "цена от 4800 руб/кв.м",
        desc: "Глубокая рельефная фактура. Полная устойчивость к высолам, влаге, грибкам и агрессивной внешней среде.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-10.webp"
    },
    {
        id: 63,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 2 ЛОФТ",
        price: "цена от 4800 руб/кв.м",
        desc: "Контрастный лофтовый отжиг со светлыми вкраплениями. Идеальная имитация старинных стен европейских мануфактур.",
        size: "245х50х15 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "лофт фактура",
        img: "img/tsegla-11.webp"
    },
    {
        id: 64,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — КОЛЛЕКЦИЯ 1",
        price: "цена от 4800 руб/кв.м",
        desc: "Классическая базовая коллекция плитки ручной формовки. Максимальная прочность М500.",
        size: "205х50х12 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "фактурная ручная",
        img: "img/tsegla-12.webp"
    },
    {
        id: 65,
        category: "tsegla",
        meta: "Клинкерная плитка • М500 • Ручная формовка",
        title: "КЛИНКЕРНАЯ ПЛИТКА TSEGLA — ГРАФИТ",
        price: "цена от 4800 руб/кв.м",
        desc: "Элитный глубокий графитовый оттенок. Строгий монохромный дизайн для современной архитектуры хай-тек.",
        size: "205х50х12 мм",
        format: "Клинкерная плитка",
        frost: "300 циклов",
        water: "до 3%",
        surface: "матовая графит",
        img: "img/tsegla-13.webp"
    },
    // --- КАТЕГОРИЯ: кирпич флэш ---
     {
        id: 86,
        category: "flash",
        meta: "Облицовочный • М150 • 1 НФ",
        title: 'КИРПИЧ "ФЛЭШ" ГРАФИТ ВАВИЛОН 1НФ',
        price: "цена 69 руб 83 коп",
        desc: "Выгодное решение для застройщиков. Облицовочный одинарный кирпич в глубоком графитовом оттенке Вавилон.",
        size: "250х120х65 мм",
        format: "1 NF Одинарный",
        frost: "50 циклов",
        water: "8-10%",
        surface: "гладкая флэш",
        img: "img/flash-1.webp"
    }
];
// БЛОК 2: СКОРОСТНОЙ РОБОТ-РЕНДЕР КАРТОЧЕК ЧЕРЕЗ DOCUMENT FRAGMENT
// ==========================================================================
function getNumericPrice(priceString) {
    if (!priceString) return 0;

    const match = priceString.match(/(\d+)(?:\s*руб)?(?:\s*(\d+)\s*коп)?/i);

    if (!match) return 0;

    const rub = parseInt(match[1], 10);
    const kop = parseInt(match[2] || "0", 10);

    return rub + kop / 100;
}
function renderCatalogCards(products) {
    const renderBox = document.getElementById('catalogRenderBox');
    if (!renderBox) return;
    
    renderBox.innerHTML = ""; 
    const isMainPage = !window.location.href.includes('catalog.html');
    const productsToRender = isMainPage ? products.slice(0, 4) : products;

    productsToRender.forEach(brick => {
        const cardHTML = `
            <a href="product.html?id=${brick.id}" class="showcase-card" data-category="${brick.category}">
                <div class="showcase-img-box">
                    <div class="brick-texture-overlay"></div>
                    <img src="${brick.img}" alt="${brick.title}" class="catalog-brick-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <span class="brick-fallback-icon" style="display:none;">🧱</span>
                </div>
                <div class="showcase-info">
                    <span class="showcase-meta">${brick.meta}</span>
                    <h3>${brick.title}</h3>
                    <div class="catalog-brick-price-tag">${brick.price}</div>
                    <p class="showcase-short-desc">${brick.desc}</p>
                    <div class="showcase-detailed-specs">
                        <div class="spec-row"><span>Размер:</span> <strong>${brick.size}</strong></div>
                        <div class="spec-row"><span>Поверхность:</span> <strong>${brick.surface}</strong></div>
                    </div>
                </div>
            </a>
        `;
        renderBox.insertAdjacentHTML('beforeend', cardHTML);
    });
}
// ======================================================
//  КОНТРОЛЛЕР КАЛЬКУЛЯТОРА
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    
    renderCatalogCards(BRICKS_DATABASE);

    const calcModal = document.getElementById('calcModal');
    const openCalcBtn = document.getElementById('open-calc-trigger'); 
    const closeCalc = document.getElementById('closeCalc');
    const brickQuantity = document.getElementById("brickQuantity");
    const totalSum = document.getElementById("totalSum");
    const leadModal = document.getElementById("leadModal");
    const brickSelect = document.getElementById("brickSelect");
     if (brickSelect && BRICKS_DATABASE) {

    brickSelect.innerHTML =
    '<option value="" disabled selected hidden>— Нажмите, чтобы выбрать кирпич —</option>';

BRICKS_DATABASE.forEach(brick => {

    const option = document.createElement("option");

    option.value = getNumericPrice(brick.price);
    option.textContent = brick.title;

    brickSelect.appendChild(option);

});

}
    const basePriceTag = document.getElementById("calcBasePriceTag");
    const calcSubmitBtn = document.getElementById("calcSubmitBtn");

    const calcTitle = document.getElementById('calcModalTitle');
    const calcSubtitle = document.getElementById('calcModalSubtitle');
    const selectContainer = document.getElementById('calcSelectContainer');
    const inputLabel = document.getElementById('calcInputLabel');

    // Кнопки нашего нового переключателя
    const modeBtnPcs = document.getElementById('modeBtnPcs');
    const modeBtnSqm = document.getElementById('modeBtnSqm');

    const leadBrickSelect = document.getElementById("lead-brick-select");
    const leadQuantityTitle = document.getElementById("lead-quantity-title");
    const leadQuantityValue = document.getElementById("lead-quantity-value");
    const leadFinalPrice = document.getElementById("lead-final-price");

    const exactReckePrice = 82.35; 
    let isAreaMode = false; // false = штуки, true = кв.м.

    // ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ИНТЕРФЕЙСА ТУМБЛЕРОМ
    function setCalculatorMode(toAreaMode) {
        isAreaMode = toAreaMode;

        if (isAreaMode) {
            // Включаем режим кв.м.
            if (modeBtnSqm) { modeBtnSqm.style.background = "#e11d48"; modeBtnSqm.style.color = "#ffffff"; }
            if (modeBtnPcs) { modeBtnPcs.style.background = "transparent"; modeBtnPcs.style.color = "#64748b"; }
            if (inputLabel) inputLabel.textContent = "ПЛОЩАДЬ СТЕН ОБЛИЦОВКИ (В КВ. М.):";
            if (brickQuantity) brickQuantity.placeholder = "Например: 120";
        } else {
            // Включаем режим штук
            if (modeBtnPcs) { modeBtnPcs.style.background = "#e11d48"; modeBtnPcs.style.color = "#ffffff"; }
            if (modeBtnSqm) { modeBtnSqm.style.background = "transparent"; modeBtnSqm.style.color = "#64748b"; }
            if (inputLabel) inputLabel.textContent = "УКАЖИТЕ ОБЪЕМ ЗАКАЗА (В ШТУКАХ):";
            if (brickQuantity) brickQuantity.placeholder = "Например: 3000";
        }
        
        if (brickQuantity) brickQuantity.value = "";
        if (totalSum) totalSum.textContent = "0 ₽";
    }

    // Вешаем клики на кнопки тумблера
    if (modeBtnPcs) modeBtnPcs.addEventListener('click', () => setCalculatorMode(false));
    if (modeBtnSqm) modeBtnSqm.addEventListener('click', () => setCalculatorMode(true));

    // УНИВЕРСАЛЬНАЯ ЛИНЕЙНАЯ МАТЕМАТИКА РАСЧЕТА
    function calculateTotal() {
        if (!brickQuantity || !totalSum) return;
        
        const inputValue = parseFloat(brickQuantity.value) || 0;
        if (inputValue <= 0) { totalSum.textContent = "0 ₽"; return; }

        if (isAreaMode) {
            // Магия квадратуры: 60 шт на кв.м.
            const currentPrice = brickSelect ? (parseFloat(brickSelect.value) || exactReckePrice) : exactReckePrice;
            const totalPieces = Math.ceil(inputValue * 60); 
            const finalCost = Math.ceil(totalPieces * currentPrice);
            
            totalSum.innerHTML = `${finalCost.toLocaleString('ru-RU')} ₽ <br><span style="font-size:12px; color:#64748b; font-weight:600; display:block; margin-top:4px;">(Объем заказа: ${totalPieces.toLocaleString('ru-RU')} шт.)</span>`;
        } else {
            // Стандартный поштучный расчет
            const currentPrice = brickSelect ? (parseFloat(brickSelect.value) || exactReckePrice) : exactReckePrice;
            const finalCost = Math.ceil(inputValue * currentPrice);
            totalSum.textContent = `${finalCost.toLocaleString("ru-RU")} ₽`;
        }
    }

    if (brickQuantity) brickQuantity.addEventListener("input", calculateTotal);

    if (brickSelect) {
        brickSelect.addEventListener("change", function () {
            if (basePriceTag) basePriceTag.textContent = this.value + " ₽/шт.";
            calculateTotal();
        });
    }

    // ==========================================================================
    // СИСТЕМА ПРИЕМА СИГНАЛА АВТОПИЛОТА (ИЗ КАРТОЧКИ ТОВАРА)
    // ==========================================================================
    const savedBrick = localStorage.getItem('selectedBrick');
    const savedBrickPrice = localStorage.getItem('selectedBrickPrice'); // 🔥 Забираем чистую цену из памяти!

    if (savedBrick && calcModal) {
        isAreaMode = true; 
        calcModal.classList.add('active');
        document.body.style.overflow = "hidden";
        selectedBrickName = savedBrick;

        if (calcTitle) calcTitle.innerHTML = `Расчет сметы:<br><span style="color:#e11d48; font-size:18px;">${savedBrick}</span>`;
        
        if (selectContainer) selectContainer.style.setProperty('display', 'none', 'important'); 
        
        // 🔥 МАГИЯ АЮРА: Передаем цену калькулятору, чтобы отклинить 82.35!
         const brickSelect = document.getElementById("brickSelect");
        const priceTag = document.getElementById("calcBasePriceTag");
        
        if (brickSelect && savedBrickPrice) {
            // 1. Записываем чистую цену в селект для внутренней математики расчёта
            brickSelect.value = savedBrickPrice; 
            
            // 2. 🔥 ЖЕЛЕЗНО: Выводим правильную цену прямо в твой родной тег на экране!
            if (priceTag) {
                priceTag.innerHTML = `${savedBrickPrice} <span style="font-size: 11px; color: #64748b; font-weight: 700;">₽/ШТ.</span>`;
            }
        }
        
        // 3. Пинаем калькулятор каталога через его родную математику, чтобы цифры обновились сразу
        if (typeof updateCalculations === 'function') {
            updateCalculations();
        } else if (typeof calculateTotal === 'function') {
            calculateTotal();
        } else {
            // Если функции называются иначе, симулируем ввод встроенными силами браузера
            brickSelect.dispatchEvent(new Event('change'));
            const brickQuantity = document.getElementById("brickQuantity");
            if (brickQuantity) brickQuantity.dispatchEvent(new Event('input'));
        }
        
        // Вычищаем память, чтобы при обычном заходе калькулятор не путался
        localStorage.removeItem('selectedBrick');
        localStorage.removeItem('selectedBrickPrice');
    }

    const productBtn = document.querySelector('.product-order-submit');
    if (productBtn) {
        productBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const productTitleElement = document.querySelector('h1');
            const productTitle = productTitleElement ? productTitleElement.textContent.trim() : "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ КРАФТ";
            
            let cleanPrice = "82.35"; // Дефолт-страховка
            
            if (typeof BRICKS_DATABASE !== 'undefined' && Array.isArray(BRICKS_DATABASE)) {
                const foundBrick = BRICKS_DATABASE.find(b => b.title.trim().toUpperCase() === productTitle.toUpperCase());
                if (foundBrick && foundBrick.price) {
                    // 🔥 УМНАЯ ВЫГРУЗКА АЮРА: Вытаскиваем только чистые группы цифр из строки "цена 67 руб 17 коп"
                    const digits = foundBrick.price.match(/\d+/g); // Находит отдельно ['67', '17']
                    
                    if (digits && digits.length >= 2) {
                        // Если нашли и рубли, и копейки — склеиваем их через правильную точку!
                        cleanPrice = `${digits[0]}.${digits[1]}`; // Получится строго "67.17"
                    } else if (digits && digits.length === 1) {
                        // Если копеек нет (например, ровно "цена 45 руб") — оставляем просто рубли
                        cleanPrice = digits[0];
                    }
                }
            }
            
            localStorage.setItem('selectedBrick', productTitle);
            localStorage.setItem('selectedBrickPrice', cleanPrice); // Теперь в память летят честные 67.17!
            window.location.href = "index.html"; 
        });
    }

    // КНОПКА ФИКСАЦИИ СМЕТЫ И ПЕРЕХОДА К КОНТАКТАМ
    if (calcSubmitBtn) {
        calcSubmitBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const quantity = parseFloat(brickQuantity.value) || 0;

            if (quantity <= 0) {
                alert(isAreaMode ? "Пожалуйста, введите площадь стен!" : "Пожалуйста, введите количество кирпича!");
                return;
            }

            // 1. Закрываем окно калькулятора (убираем твой класс active)
            if (calcModal) {
                calcModal.classList.remove("active");
                document.body.style.overflow = ""; // Возвращаем прокрутку страницы
            }
            
            // 2. 🔥 ИСПРАВЛЕНО: Вместо всплывающего окна плавно летим вниз к нашей готовой форме!
            // Скрипт ищет наш новый класс заголовка формы custom-form-header
             const targetForm = document.querySelector(".custom-form-header");
            
            if (targetForm) {
                // Высчитываем точную позицию заголовка с учетом высоты фиксированной шапки сайта
                const headerOffset = 100; // Отступ в 100 пикселей, чтобы шапка не перекрывала текст
                const elementPosition = targetForm.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Запускаем мягкий, идеальный полет, который остановится точно перед заголовком
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

            // 2. 🔥 ПЕРЕДАЧА ДАННЫХ: Связываем кирпич из калькулятора с формой заявки
            // Находим селект калькулятора (из которого человек только что выбрал кирпич)
            const calcSelect = document.getElementById("brickSelect");
            const calcQuantity = document.getElementById("brickQuantity");
            const calcTotalSumElement = document.getElementById("totalSum"); 
            
            const leadInput = document.getElementById("lead-brick-select");
            const leadSubmitBtn = document.getElementById("lead-submit-btn");

            // Твои родные элементы из HTML
            const leadQuantityTitle = document.getElementById("lead-quantity-title");
            const leadQuantityValue = document.getElementById("lead-quantity-value");
            const leadQuantityBlock = document.getElementById("lead-quantity-display");
            
            const leadPcsBlock = document.getElementById("lead-pcs-display");
            const leadPcsValue = document.getElementById("lead-pcs-value");
            
            const leadPriceTag = document.getElementById("lead-final-price");
            const leadSumBlock = document.getElementById("lead-sum-display");

            if (calcSelect && calcQuantity && calcTotalSumElement && leadInput && leadSubmitBtn) {
                
                // 1. СТРОКА 1: НАИМЕНОВАНИЕ КИРПИЧА БЕЗ ОБРЕЗОК
                let fullBrickName = (typeof selectedBrickName !== 'undefined' && selectedBrickName) ? selectedBrickName : calcSelect.options[calcSelect.selectedIndex].text;
                leadInput.value = fullBrickName.toUpperCase();
                
                // Извлекаем текстовые строчки из калькулятора
                const rawSumText = calcTotalSumElement.innerText || calcTotalSumElement.textContent;
                const lines = rawSumText.split('\n');
                
                // 2. СТРОКА 2: ВЫВОД ПЛОЩАДИ ИЛИ ШТУК
                const quantityValue = parseFloat(calcQuantity.value || 0).toLocaleString("ru-RU");
                
                if (isAreaMode) {

    leadQuantityTitle.textContent = "ПЛОЩАДЬ:";
    leadQuantityValue.textContent = quantityValue + " М²";
    leadQuantityBlock.style.display = "block";

    const totalPieces = Math.ceil(parseFloat(calcQuantity.value) * 60);

    leadPcsValue.textContent = totalPieces.toLocaleString("ru-RU") + " ШТ.";
    leadPcsBlock.style.display = "block";

} else {

    leadQuantityTitle.textContent = "КОЛИЧЕСТВО:";
    leadQuantityValue.textContent = quantityValue + " ШТ.";
    leadQuantityBlock.style.display = "block";

    leadPcsBlock.style.display = "none";

}
                if (leadQuantityBlock) {
                    leadQuantityBlock.style.display = "block";
                }

                // 3. СТРОКА 3: ВЫВОД ПЕРЕСЧИТАННЫХ ШТУК (Только для режима площади)
                if (isAreaMode && leadPcsBlock && leadPcsValue) {
                    const pcsLine = lines.find(line => line.toLowerCase().includes("объем заказа:"));
                    if (pcsLine) {
                        const cleanPcs = pcsLine.replace(/объем заказа:/i, '').replace(/[\(\):]/g, '').trim().toUpperCase();
                        leadPcsValue.textContent = cleanPcs; // Записываем чистые штуки
                        leadPcsBlock.style.display = "block"; // Показываем строчку штук
                    }
                } else if (leadPcsBlock) {
                    leadPcsBlock.style.display = "none";
                }

                // 4. СТРОКА 4: ВЫВОД ИТОГОВОЙ СУММЫ СМЕТЫ
                 if (leadPriceTag && leadSumBlock) {
                    // Берём первую строчку (где только рубли) и аккуратно убираем пробелы по краям
                    const cleanPrice = lines[0] ? lines[0].trim() : "0 ₽"; 
                    
                    // Вставляем рубли в твой родной красный тег
                    leadPriceTag.textContent = cleanPrice; 
                    
                    // 🔥 ТЕПЕРЬ ОНО СРАБОТАЕТ: Принудительно включаем показ блока суммы на экране
                    leadSumBlock.style.setProperty('display', 'block', 'important'); 
                }
                
                // Текст кнопки
                leadSubmitBtn.textContent = "ОТПРАВИТЬ РАСЧЁТ МЕНЕДЖЕРУ";
            }
        });
    }

    // УПРАВЛЕНИЕ ОКНАМИ (ОТКРЫТИЕ С ГЛАВНОЙ)
    if (openCalcBtn && calcModal) {
        openCalcBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation(); 
            if (selectContainer) selectContainer.style.setProperty('display', 'block', 'important'); 
            
            setCalculatorMode(false);
            
            calcModal.classList.add('active');
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                if (brickQuantity) brickQuantity.focus();
            }, 250);
        });
    }

    // Закрытие окон (крестики и фоны)
    if (closeCalc && calcModal) {
        closeCalc.addEventListener('click', (e) => {
            e.preventDefault();
            calcModal.classList.remove('active');
            document.body.style.overflow = "";
        });
    }

    if (calcModal) {
        calcModal.addEventListener("click", function (e) {
            if (e.target === calcModal) {
                calcModal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    const calcBody = calcModal ? calcModal.querySelector(".calc-box-content") : null;
    if (calcBody) {
        calcBody.addEventListener("click", function (e) { e.stopPropagation(); });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (calcModal) calcModal.classList.remove("active");
            if (leadModal) leadModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});
// ======================================================
//   3.ДВИЖОК ПОИСКА И ФИЛЬТРАЦИИ
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('catalogSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterButtons = document.querySelectorAll('.filter-tag-btn');

    function filterCatalog() {
        if (!searchInput) return;

        const searchText = searchInput.value.toLowerCase().trim();
        const activeBtn = document.querySelector('.filter-tag-btn.active');
        let activeCategory = activeBtn ? (activeBtn.getAttribute('data-target') || 'all') : 'all';

        if (clearSearchBtn) {
            clearSearchBtn.style.display = searchText.length > 0 ? 'block' : 'none';
        }

        // ВСПЛЫВАЮЩАЯ ПЛИТА С ХАРАКТЕРИСТИКАМИ RECKE ИЗ ВАШЕГО МАКЕТА
        const descBox = document.getElementById('categoryDescBox');
        if (descBox) {
            if (activeCategory.toLowerCase().includes('recke') && searchText === '') {
                // Плита Recke (Остается без изменений)
                descBox.innerHTML = `
                    <h2>КИРПИЧ "RECKE BRICKEREI"</h2>
                    <div class="category-promo-subtitle">Клинкерный кирпич российского производства по новейшим технологиям</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">УТОЛЩЕННАЯ СТЕНКА 20 ММ, С ФАСКОЙ</div>
                        <div class="category-spec-bullet">ЛИЦЕВАЯ ПОВЕРХНОСТЬ ГЛЯНЦЕВАЯ</div>
                        <div class="category-spec-bullet">ПУСТОТНОСТЬ: 34-36%</div>
                        <div class="category-spec-bullet">МАРКА ПРОЧНОСТИ: M175-M200</div>
                        <div class="category-spec-bullet">УДЕЛЬНЫЙ ВЕС: 2,5 КГ</div>
                        <div class="category-spec-bullet">КОЛИЧЕСТВО ШТУК НА ПОДДОНЕ: 480</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ: 75 ЦИКЛОВ</div>
                        <div class="category-spec-bullet">ВОДОПОГЛОЩЕНИЕ: 5-6%</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ТЕПЛОПРОВОДНОСТИ, ВТ/М: 0,36</div>
                        <div class="category-spec-bullet">ШТУК В КВ. МЕТРЕ ПРИ КЛАДКЕ "1/2 КИРПИЧА": 60</div>
                        <div class="category-spec-bullet">КАЧЕСТВО УПАКОВКИ: РЯДЫ КИРПИЧА В ПОДДОНЕ ПРОЛОЖЕНЫ БУМАГОЙ</div>
                        <div class="category-spec-bullet">СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            } 
            else if (activeCategory.toLowerCase().includes('modformat') && searchText === '') {
                // Плита Modformat (Остается без изменений)
                descBox.innerHTML = `
                    <h2>КИРПИЧ "MODFORMAT"</h2>
                    <div class="category-promo-subtitle">Утонченный и неповторимый дизайн коллекции лицевого пустотелого кирпича и плитки</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">МЕНЯЕТ ПРЕДСТАВЛЕНИЕ ОБ ЭСТЕТИКЕ, ФОРМЕ И ПРОСТРАНСТВЕ</div>
                        <div class="category-spec-bullet">ВОПЛОЩАЕТ САМЫЕ СМЕЛЫЕ АВТОРСКИЕ ЗАМЫСЛЫ И ТВОРЧЕСКИЕ ЭКСПЕРИМЕНТЫ — В ПОЛНОМ ОБЪЕМЕ</div>
                        <div class="category-spec-bullet">РИГЕЛЬНЫЙ ВЫТЯНУТЫЙ ФОРМАТ 290х85х50 ММ</div>
                        <div class="category-spec-bullet">МАРКА ПРОЧНОСТИ: M150-M175</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ: 100 ЦИКЛОВ (F100)</div>
                        <div class="category-spec-bullet">ВОДОПОГЛОЩЕНИЕ: СТРОГО 6-8%</div>
                        <div class="category-spec-bullet">КОЛИЧЕСТВО КИРПИЧЕЙ В ОДНОМ ПОДДОНЕ: 440 ШТ.</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
            else if ((activeCategory.toLowerCase().includes('zhelez') || activeCategory.toLowerCase().includes('железно')) && searchText === '') {
                // 🔥 НОВАЯ ТРЕТЬЯ ПЛИТА ДЛЯ ЖЕЛЕЗНОГОРСКОГО БРЕНДА!
                descBox.innerHTML = `
                    <h2>КИРПИЧ "ЖЕЛЕЗНОГОРСКИЙ" — МАРКА ПРОЧНОСТИ М300</h2>
                    <div class="category-promo-subtitle">Высокопрочный лицевой кирпич элитной ригельной серии</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">УТОЛЩЕННАЯ СТЕНКА 20 ММ, С ФАСКОЙ</div>
                        <div class="category-spec-bullet">ПУСТОТНОСТЬ КИРПИЧА: 37%</div>
                        <div class="category-spec-bullet">МАРКА ВЫСОКОЙ ПРОЧНОСТИ: M300</div>
                        <div class="category-spec-bullet">УДЕНЫЙ ВЕС ОДНОГО КИРПИЧА: 2,2 КГ</div>
                        <div class="category-spec-bullet">КАЧЕСТВО НАДЕЖНОЙ УПАКОВКИ: РЯДЫ КИРПИЧА В ПОДДОНЕ ПРОЛОЖЕНЫ БУМАГОЙ</div>
                        <div class="category-spec-bullet">КОЛИЧЕСТВО ШТУК НА ОДНОМ ПОДДОНЕ: 480 ШТ/ПОДД ИЛИ 720 ШТ/ПОДД</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ ЗАВОДА: 100 ЦИКЛОВ (F100)</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ВОДОПОГЛОЩЕНИЯ: 7-8%</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ТЕПЛОПРОВОДНОСТИ, ВТ/М: 0,36</div>
                        <div class="category-spec-bullet">ШТУК В КВ. МЕТРЕ ПРИ КЛАДКЕ "1/2 КИРПИЧА": 60 ШТ</div>
                        <div class="category-spec-bullet">СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                        <div class="category-spec-bullet">НАЗНАЧЕНИЕ: ДЛЯ НАДЕЖНОЙ ОБЛИЦОВКИ ЗДАНИЙ ЛЮБОЙ ЭТАЖНОСТИ</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
              else if (activeCategory.toLowerCase().includes('oskol') && searchText === '') {
                // 🔥 ЧЕТВЕРТАЯ ПЛИТА ДЛЯ СТАРООСКОЛЬСКОГО КИРПИЧА!
                descBox.innerHTML = `
                    <h2>ОБЛИЦОВКА "СТАРООСКОЛЬСКИЙ"</h2>
                    <div class="category-promo-subtitle">Высококачественный классический лицевой кирпич с идеальной геометрией</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">УТОЛЩЕННАЯ СТЕНКА 20 ММ, С ФАСКОЙ</div>
                        <div class="category-spec-bullet">ПУСТОТНОСТЬ КИРПИЧА: 36-38%</div>
                        <div class="category-spec-bullet">МАРКА НАДЕЖНОЙ ПРОЧНОСТИ: M175-200</div>
                        <div class="category-spec-bullet">УДЕЛЬНЫЙ ВЕС: 2,2 КГ</div>
                        <div class="category-spec-bullet">КАЧЕСТВО УПАКОВКИ: РЯДЫ КИРПИЧА В ПОДДОНЕ ПРОЛОЖЕНЫ БУМАГОЙ. НА СТЕНКАХ ПОДДОНА ПЛОТНЫЙ КАРТОН</div>
                        <div class="category-spec-bullet">КОЛИЧЕСТВО ШТУК НА ОДНОМ ПОДДОНЕ: 480 ШТ/ПОДД ИЛИ 720 ШТ/ПОДД</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ ЗАВОДА: 100 ЦИКЛОВ</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ВОДОПОГЛОЩЕНИЯ: 6-7%</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ТЕПЛОПРОВОДНОСТИ, ВТ/М: 0,36</div>
                        <div class="category-spec-bullet">ШТУК В КВ. МЕТРЕ ПРИ КЛАДКЕ "1/2 КИРПИЧА": 60</div>
                        <div class="category-spec-bullet">СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                        <div class="category-spec-bullet">НАЗНАЧЕНИЕ: ДЛЯ ВЫСОКОКАЧЕСТВЕННОЙ ОБЛИЦОВКИ ФАСАДОВ</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
             else if (activeCategory.toLowerCase().includes('akbars') && searchText === '') {
                // 🔥 ПЯТАЯ ПЛИТА ДЛЯ КИРПИЧА АК БАРС КЕРАМИК!
                descBox.innerHTML = `
                    <h2>КИРПИЧ "АК БАРС КЕРАМИК"</h2>
                    <div class="category-promo-subtitle">Высококачественный облицовочный кирпич, произведенный в Республике Татарстан</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">НАЗНАЧЕНИЕ: ОБЛИЦОВОЧНЫЙ ДЛЯ ЛЮБЫХ ПРОЕКТОВ</div>
                        <div class="category-spec-bullet">МАРКА НАДЕЖНОЙ ПРОЧНОСТИ: M150</div>
                        <div class="category-spec-bullet">УДЕЛЬНЫЙ ВЕС ОДНОГО КИРПИЧА: 2,3 - 2,69 КГ</div>
                        <div class="category-spec-bullet">КАЧЕСТВО УПАКОВКИ: РЯДЫ КИРПИЧА В ПОДДОНЕ НАДЕЖНО ПРОЛОЖЕНЫ БУМАГОЙ</div>
                        <div class="category-spec-bullet">СООТВЕТСТВУЕТ СТРОГИМ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                        <div class="category-spec-bullet">МОЩНОСТЬ ПРОИЗВОДСТВА: БОЛЕЕ 90 МЛН КИРПИЧЕЙ В ГОД (КОЩАКОВСКИЙ И ЧЕЛНИНСКИЙ ЗАВОДЫ)</div>
                        <div class="category-spec-bullet">РАЗНООБРАЗИЕ: БОЛЕЕ 150 ВИДОВ КИРПИЧЕЙ ПО ЦВЕТУ, ФАКТУРЕ И СОВРЕМЕННЫМ ФОРМАТАМ</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
              else if (activeCategory.toLowerCase().includes('bavar') && searchText === '') {
                descBox.innerHTML = `
                    <h2>КИРПИЧ "БАВАРСКАЯ КЛАДКА"</h2>
                    <div class="category-promo-subtitle">Кирпичный завод "Пятый Элемент" — премиальный облицовочный флэш-обжиг</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">УТОЛЩЕННАЯ СТЕНКА 20 ММ, С ФАСКОЙ</div>
                        <div class="category-spec-bullet">ЛИЦЕВАЯ ПОВЕРХНОСТЬ: ФЛЭШ ОБЖИГ (РЕДУКЦИОННЫЙ)</div>
                        <div class="category-spec-bullet">ПУСТОТНОСТЬ КИРПИЧА: 30-34%</div>
                        <div class="category-spec-bullet">МАРКА НАДЕЖНОЙ ПРОЧНОСТИ: M200</div>
                        <div class="category-spec-bullet">УДЕЛЬНЫЙ ВЕС ОДНОГО КИРПИЧА: 2,8 КГ</div>
                        <div class="category-spec-bullet">КАЧЕСТВО УПАКОВКИ: РЯДЫ КИРПИЧА В ПОДДОНЕ ПРОЛОЖЕНЫ БУМАГОЙ. НА СТЕНКАХ ПОДДОНА ПЛОТНЫЙ КАРТОН</div>
                        <div class="category-spec-bullet">КОЛИЧЕСТВО ШТУК НА ОДНОМ ПОДДОНЕ: 480 ШТ.</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ ЗАВОДА: 100 ЦИКЛОВ</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ВОДОПОГЛОЩЕНИЯ: СТРОГО 6,1 - 8,9%</div>
                        <div class="category-spec-bullet">КОЭФФИЦИЕНТ ТЕПЛОПРОВОДНОСТИ, ВТ/М: 0,193</div>
                        <div class="category-spec-bullet">ШТУК В КВ. МЕТРЕ ПРИ КЛАДКЕ "1/2 КИРПИЧА": 60 ШТ.</div>
                        <div class="category-spec-bullet">ПРОДУКЦИЯ ПОЛНОСТЬЮ СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
               else if (activeCategory.toLowerCase().includes('plinfa') && searchText === '') {
                // 🔥 СЕДЬМАЯ ПЛИТА ДЛЯ БРЕНДА PLINFA РУЧНАЯ ФОРМОВКА!
                descBox.innerHTML = `
                    <h2>КИРПИЧ "PLINFA" РУЧНАЯ ФОРМОВКА</h2>
                    <div class="category-promo-subtitle">PLINFA — российский премиальный бренд, результат коллаборации ведущих игроков кирпичного рынка</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">ФОРМОВКА: ЭЛИТНЫЙ КИРПИЧ РУЧНОЙ РАБОТЫ И ФОРМОВАНИЯ</div>
                        <div class="category-spec-bullet">СТРУКТУРА: В АССОРТИМЕНТЕ ПРЕДСТАВЛЕНЫ ПОЛНОТЕЛЫЕ И ПУСТОТЕЛЫЕ МОДЕЛИ</div>
                        <div class="category-spec-bullet">МАРКА ВЫСОЧАЙШЕЙ ПРОЧНОСТИ: M300 (ВЫДЕРЖИВАЕТ ЛЮБЫЕ НАГРУЗКИ)</div>
                        <div class="category-spec-bullet">МОРОЗОСТОЙКОСТЬ: ОТ 100 ДО 200 ЦИКЛОВ (F100 - F200) ДЛЯ ЛЮБОГО КЛИМАТА</div>
                        <div class="category-spec-bullet">ВОДОПОГЛОЩЕНИЕ: НИЗКОЕ ДЛЯ РУЧНОЙ ФОРМОВКИ (СТРОГО ДО 6-8%)</div>
                        <div class="category-spec-bullet">РАЗНООБРАЗИЕ ФОРМАТОВ: ЕВРОПЕЙСКИЕ РИГЕЛЬНЫЕ СЕРИИ И КЛАССИЧЕСКИЙ ОДИНАРНЫЙ 1 НФ</div>
                        <div class="category-spec-bullet">ИНДИВИДУАЛЬНОСТЬ: КАЖДЫЙ КИРПИЧ ИМЕЕТ СВОЙ НЕПОВТОРИМЫЙ СЛЕД И РЕЛЬЕФ ПОВЕРХНОСТИ</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
             else if (activeCategory.toLowerCase().includes('tsegla') && searchText === '') {
                // 🔥 ДЕВЯТАЯ ПЛИТА ДЛЯ КЛИНКЕРНОЙ ПЛИТКИ TSEGLA!
                descBox.innerHTML = `
                    <h2>КЛИНКЕРНАЯ ПЛИТКА "TSEGLA"</h2>
                    <div class="category-promo-subtitle">Элитная клинкерная плитка ручной формовки производства Белоруссии</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">ФОРМОВКА: КЛИНКЕРНАЯ ПЛИТКА И КИРПИЧ ПОЛНОСТЬЮ РУЧНОЙ РАБОТЫ</div>
                        <div class="category-spec-bullet">СОСТАВ: ЭКОЛОГИЧЕСКИ ЧИСТЫЙ ПРОДУКТ НА ОСНОВЕ ЭЛИТНЫХ ГЛИН И НЕМЕЦКИХ МИНЕРАЛЬНЫХ ПИГМЕНТОВ</div>
                        <div class="category-spec-bullet">МАРКА ВЫСОЧАЙШЕЙ ПРОЧНОСТИ: M500 (УСТОЙЧИВА К ЛЮБЫМ КЛИМАТИЧЕСКИМ ИСПЫТАНИЯМ)</div>
                        <div class="category-spec-bullet">НИЗКОЕ ВЛАГОПОГЛОЩЕНИЕ: СТРОГО ДО 3% (МГНОВЕННЫЙ ОТВОД ВОДЫ И ОТСУТСТВИЕ СЫРОСТИ)</div>
                        <div class="category-spec-bullet">ЭКСКЛЮЗИВНОСТЬ: ФАКТУРА КАЖДОЙ ПЛИТКИ КАK ОТПЕЧАТОК ПАЛЬЦЕВ — ДВУХ ОДИНАКОВЫХ ПЛИТОК НЕ НАЙТИ</div>
                        <div class="category-spec-bullet">СВОЙСТВА: НЕ ТРЕСКАЕТСЯ, НЕ РАССЫПАЕТСЯ И СОВЕРШЕННО НЕ ВЫГОРАЕТ НА СОЛНЦЕ</div>
                        <div class="category-spec-bullet">ЦЕНОВОЙ ДИАПАЗОН: ПРЕМИУМ-КАЧЕСТВО ПО ВЫГОДНОЙ СВЕЖЕЙ ЦЕНЕ ОТ 4800 РУБ/КВ.М</div>
                    </div>
                `;
                descBox.querySelector('h2').style.color = "#10b981"; // Сделаем изумрудный акцент для плитки
                descBox.classList.add('active-desc');
            }
             else if (activeCategory.toLowerCase().includes('flash') && searchText === '') {
                // 🔥 ДЕСЯТАЯ ПЛИТА ДЛЯ КАТЕГОРИИ ФЛЭШ ГРАФИТ!
                descBox.innerHTML = `
                    <h2>КИРПИЧ "ФЛЭШ ГРАФИТ"</h2>
                    <div class="category-promo-subtitle">Выгодное и надёжное решение для облицовки от ведущих застройщиков</div>
                    <div class="category-specs-list">
                        <div class="category-spec-bullet">НАЗНАЧЕНИЕ: ОБЛИЦОВОЧНЫЙ КИРПИЧ</div>
                        <div class="category-spec-bullet">МАРКА ОПТИМАЛЬНОЙ ПРОЧНОСТИ: M150</div>
                        <div class="category-spec-bullet">УДЕЛЬНЫЙ ВЕС ОДНОГО КИРПИЧА: 2,2 КГ</div>
                        <div class="category-spec-bullet">КАЧЕСТВО УПАКОВКИ: КИРПИЧ ПОСТАВЛЯЕТСЯ В НАДЁЖНЫХ ПОДДОНАХ ПО 313 ШТ/ПОДД</div>
                        <div class="category-spec-bullet">ПРОДУКЦИЯ ПОЛНОСТЬЮ СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ: ГОСТ 530-2012</div>
                        <div class="category-spec-bullet">ТЕХНОЛОГИЯ ФЛЭШИНГА: ЕСТЕСТВЕННЫЙ ИГРАЮЩИЙ ГРАДИЕНТ ЦВЕТА БЕЗ ХИМИЧЕСКИХ КРАСИТЕЛЕЙ</div>
                    </div>
                `;
                descBox.classList.add('active-desc');
            }
            else {
                descBox.classList.remove('active-desc');
                descBox.innerHTML = "";
            }
        }
        // Фильтрация самих карточек кирпичей
        const generatedCards = document.querySelectorAll('.showcase-card');
        generatedCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardTitle = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const cardMeta = card.querySelector('.showcase-meta') ? card.querySelector('.showcase-meta').textContent.toLowerCase() : '';

            const matchesCategory = (
                activeCategory === 'all' || 
                cardCategory === activeCategory || 
                activeCategory.toLowerCase().includes(cardCategory.toLowerCase())
            );
            const matchesSearch = (cardTitle.includes(searchText) || cardMeta.includes(searchText));

            if (searchText === "") {
                if (matchesCategory) {
                    card.classList.remove('hidden-brick');
                    card.style.setProperty('display', 'flex', 'important');
                } else {
                    card.classList.add('hidden-brick');
                    card.style.setProperty('display', 'none', 'important');
                }
            } else {
                if (matchesCategory && matchesSearch) {
                    card.classList.remove('hidden-brick');
                    card.style.setProperty('display', 'flex', 'important');
                } else {
                    card.classList.add('hidden-brick');
                    card.style.setProperty('display', 'none', 'important');
                }
            }
        });
    }

    // НАВЕШИВАЕМ ОБРАБОТЧИКИ НА ПОИСК И КНОПКИ (СТРОГО ОДИН РАЗ)
    if (searchInput) {
        searchInput.addEventListener('input', filterCatalog);
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterCatalog();
            });
        });
    }

    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            filterCatalog();
            searchInput.focus();
        });
    }
  
});


// ==========================================================================
//  УМНАЯ КНОПКА "НАВЕРХ" С ПЛАВНЫМ СКРОЛЛОМ 
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const scrollUpBtn = document.getElementById("scrollUpBtn");

    if (scrollUpBtn) {
        // 1. Следим за прокруткой: если ушли вниз на 400px — плавно показываем кнопку
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollUpBtn.style.opacity = "1";
                scrollUpBtn.style.visibility = "visible";
                scrollUpBtn.style.transform = "scale(1)";
            } else {
                scrollUpBtn.style.opacity = "0";
                scrollUpBtn.style.visibility = "hidden";
                scrollUpBtn.style.transform = "scale(0.8)";
            }
        });

        // 2. Клик по кнопке — запускаем фирменный плавный скролл на самый верх
        scrollUpBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Тот самый эффект "плавно чук-чук-чук" силами браузера
            });
        });
    }
});

// ==========================================================================
// 🚀 НАМЕРТВО ОЖИВЛЯЕМ КНОПКУ: ОТПРАВКА ЧЕКА НА СЕРВЕР В SEND.PHP
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const leadForm = document.getElementById("lead-main-form");
    const leadSubmitBtn = document.getElementById("lead-submit-btn");

    if (leadForm && leadSubmitBtn) {
        leadForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Блокируем перезагрузку страницы

            leadSubmitBtn.textContent = "ОТПРАВЛЯЮ ЗАЯВКУ...";
            leadSubmitBtn.disabled = true;

            // Сбор данных из твоих 4 строчек чека
            const brickName = document.getElementById("lead-brick-select")?.value || "Не выбран";
            const quantityTitle = document.getElementById("lead-quantity-title")?.textContent || "Объем:";
            const quantityValue = document.getElementById("lead-quantity-value")?.textContent || "0";
            const pcsValue = document.getElementById("lead-pcs-value")?.textContent || "0";
            const totalPrice = document.getElementById("lead-final-price")?.textContent || "0 ₽";

            // Сбор контактов (ФИО и телефон берутся строго из твоей формы по порядку)
            const clientName = document.getElementById("lead-client-name")?.value || "Не указано";
            const clientPhone = document.getElementById("lead-client-phone")?.value || "Не указано";

            // Проверяем, горела ли строчка штук на экране
            const pcsBlock = document.getElementById("lead-pcs-display");
            const isPcsActive = pcsBlock && pcsBlock.classList.contains("active") ? "true" : "false";

            // Упаковываем все данные в удобный формат для отправки в PHP
            const formData = new FormData();
            formData.append("brick", brickName);
            formData.append("q_title", quantityTitle);
            formData.append("q_val", quantityValue);
            formData.append("pcs_val", pcsValue);
            formData.append("pcs_active", isPcsActive);
            formData.append("price", totalPrice);
            formData.append("name", clientName);
            formData.append("phone", clientPhone);

            // Мгновенный сетевой запрос прямо к нашему файлу send.php
            fetch("send.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                 if (result.trim() === "success") {
                    // 1. Кнопка выдает короткий текст успеха, который идеально влезает!
                    leadSubmitBtn.textContent = "РАСЧЁТ ОТПРАВЛЕН! ✓";
                    leadSubmitBtn.style.backgroundColor = "#22c55e"; 
                    leadForm.reset(); // Вычищаем поля ФИО и телефона

                    // 2. 🔥 ВСПЛЫВАЮЩАЯ МАГИЯ: Находим наше окно успеха и плавно зажигаем его на экране!
                    const successModal = document.getElementById("premium-success-modal");
                    if (successModal) {
                        successModal.classList.add("active");

                        // 3. АВТОМАТИКА: Ровно через 4.5 секунды окно само бесследно исчезнет с экрана
                        setTimeout(() => {
                            successModal.classList.remove("active");
                        }, 4500);
                    }
                } else {
                    throw new Error("Ошибка отправки");
                }
            })
            .catch(error => {
                // Если на сервере сбой
                leadSubmitBtn.textContent = "ОШИБКА. ПОПРОБОВАТЬ ЕЩЁ РАЗ";
                leadSubmitBtn.style.backgroundColor = "#ef4444"; 
                leadSubmitBtn.disabled = false;
            })
            .finally(() => {
                // Через 5 секунд возвращаем кнопке исходный премиальный вид
                setTimeout(() => {
                    leadSubmitBtn.textContent = "ОТПРАВИТЬ РАСЧЁТ МЕНЕДЖЕРУ";
                    leadSubmitBtn.style.backgroundColor = ""; 
                    leadSubmitBtn.disabled = false;
                }, 5000);
            });
        });
    }
});

// ==========================================================================
// 🍔ЗАПУСК БУРГЕРА 
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {

    const burgerBtn = document.querySelector(".burger-menu-btn");
    const navMenu = document.querySelector(".header-nav-menu");

    if (burgerBtn && navMenu) {

        burgerBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                navMenu.classList.remove("active");
            }
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });

    }

});
