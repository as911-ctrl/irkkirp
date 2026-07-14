// БЛОК 2: СКОРОСТНОЙ РОБОТ-РЕНДЕР КАРТОЧЕК ЧЕРЕЗ DOCUMENT FRAGMENT
// ==========================================================================
function formatPriceRuble(price) {
    const rubles = Math.floor(price);
    const kopecks = Math.round((price - rubles) * 100);
    return `цена ${rubles} руб ${kopecks.toString().padStart(2, '0')} коп`;
}
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
                    <div class="catalog-brick-price-tag">${formatPriceRuble(brick.price)}</div>
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
    
    const calcModal = document.getElementById('calcModal');
    const openCalcBtn = document.getElementById('open-calc-trigger'); 
    const closeCalc = document.getElementById('closeCalc');
    const brickQuantity = document.getElementById("brickQuantity");
    const totalSum = document.getElementById("totalSum");
    const leadModal = document.getElementById("leadModal");
    const brickSelect = document.getElementById("brickSelect");
    
    const basePriceTag = document.getElementById("calcBasePriceTag");
    const calcSubmitBtn = document.getElementById("calcSubmitBtn");

    const calcTitle = document.getElementById('calcModalTitle');
    const calcSubtitle = document.getElementById('calcModalSubtitle');
    const selectContainer = document.getElementById('calcSelectContainer');
    const inputLabel = document.getElementById('calcInputLabel');

    // Кнопки переключателя штук и квадратных метров Аюра
    const modeBtnPcs = document.getElementById('modeBtnPcs');
    const modeBtnSqm = document.getElementById('modeBtnSqm');

    const leadInput = document.getElementById("lead-brick-select");
    const leadSubmitBtn = document.getElementById("lead-submit-btn");

    // Элементы финальной формы контактов
    const leadQuantityTitle = document.getElementById("lead-quantity-title");
    const leadQuantityValue = document.getElementById("lead-quantity-value");
    const leadQuantityBlock = document.getElementById("lead-quantity-display");
    
    const leadPcsBlock = document.getElementById("lead-pcs-display");
    const leadPcsValue = document.getElementById("lead-pcs-value");
    
    const leadPriceTag = document.getElementById("lead-final-price");
    const leadSumBlock = document.getElementById("lead-sum-display");

    const exactReckePrice = 82.35; 
    let isAreaMode = false; // false = штуки, true = кв.м.

    // Выпадающий список кирпичей теперь считывает products.json напрямую!
  if (brickSelect) {
    brickSelect.innerHTML = '<option value="" disabled selected hidden>— Нажмите, чтобы выбрать кирпич —</option>';

    fetch('products.json')
        .then(response => response.json())
        .then(bricksData => {
            if (Array.isArray(bricksData)) {
                bricksData.forEach(brick => {
                    const option = document.createElement("option");
                    option.value = brick.price;
                    option.textContent = brick.title;
                    option.dataset.size = brick.size || '';
                    option.dataset.priceUnit = brick.category === 'tsegla' ? 'sqm' : 'piece'; // 🔥 НОВОЕ
                    brickSelect.appendChild(option);
                });
            }
        })
        .catch(error => console.error("Ошибка загрузки списка кирпичей в калькулятор:", error));
}
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

    function getPiecesPerSqm(sizeStr) {
    if (!sizeStr) return 60; // запасной вариант, если у кирпича почему-то нет размера

    const nums = sizeStr.replace(',', '.').match(/[\d.]+/g);
    if (!nums || nums.length < 3) return 60;

    const lengthMm = parseFloat(nums[0]); // длина
    const heightMm = parseFloat(nums[2]); // высота (3-е число)

    const jointMm = 10; // толщина шва кладки
    const faceWidthM = (lengthMm + jointMm) / 1000;
    const faceHeightM = (heightMm + jointMm) / 1000;

    return 1 / (faceWidthM * faceHeightM);
}

    // УНИВЕРСАЛЬНАЯ ЛИНЕЙНАЯ МАТЕМАТИКА РАСЧЕТА 
   function calculateTotal() {
    if (!brickQuantity || !totalSum) return;

    const inputValue = parseFloat(brickQuantity.value) || 0;
    if (inputValue <= 0) { totalSum.textContent = "0 ₽"; return; }

    const currentPrice = brickSelect ? (parseFloat(brickSelect.value) || exactReckePrice) : exactReckePrice;

    const selectedOption = brickSelect ? brickSelect.options[brickSelect.selectedIndex] : null;
    const isSqmPrice = selectedOption ? selectedOption.dataset.priceUnit === 'sqm' : false;
    const piecesPerSqm = selectedOption ? getPiecesPerSqm(selectedOption.dataset.size) : 60;

    if (isAreaMode) {
        if (isSqmPrice) {
            // Цена уже за кв.м — площадь просто умножаем на цену
            const finalCost = Math.ceil(inputValue * currentPrice);
            const approxPieces = Math.ceil(inputValue * piecesPerSqm);
            totalSum.innerHTML = `${finalCost.toLocaleString('ru-RU')} ₽ <br><span style="font-size:12px; color:#64748b; font-weight:600; display:block; margin-top:4px;">(Объем заказа: ≈${approxPieces.toLocaleString('ru-RU')} шт.)</span>`;
        } else {
            // Цена за штуку — считаем количество штук из размера, потом умножаем
            const totalPieces = Math.ceil(inputValue * piecesPerSqm);
            const finalCost = Math.ceil(totalPieces * currentPrice);
            totalSum.innerHTML = `${finalCost.toLocaleString('ru-RU')} ₽ <br><span style="font-size:12px; color:#64748b; font-weight:600; display:block; margin-top:4px;">(Объем заказа: ${totalPieces.toLocaleString('ru-RU')} шт.)</span>`;
        }
    } else {
        if (isSqmPrice) {
            // Ввели штуки, но цена за кв.м — переводим штуки в площадь
            const areaM2 = inputValue / piecesPerSqm;
            const finalCost = Math.ceil(areaM2 * currentPrice);
            totalSum.textContent = `${finalCost.toLocaleString('ru-RU')} ₽`;
        } else {
            const finalCost = Math.ceil(inputValue * currentPrice);
            totalSum.textContent = `${finalCost.toLocaleString('ru-RU')} ₽`;
        }
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
    // СИСТЕМА ПРИЕМА СИГНАЛА АВТОПИЛОТА (ИЗ КАРТОЧКИ ТОВАРА )
    // ==========================================================================
    const savedBrick = localStorage.getItem('selectedBrick');
    const savedBrickID = localStorage.getItem('selectedBrickID');

    if (savedBrick && calcModal) {
        isAreaMode = true; 
        calcModal.classList.add('active');
        document.body.style.overflow = "hidden";

        if (calcTitle) calcTitle.innerHTML = `Расчет сметы:<br><span style="color:#e11d48; font-size:18px;">${savedBrick}</span>`;
        if (selectContainer) selectContainer.style.setProperty('display', 'none', 'important'); 
        
        if (brickSelect) {
            // Маленькая задержка, чтобы fetch('products.json') успел забить селект данными
            setTimeout(() => {
                for (let i = 0; i < brickSelect.options.length; i++) {
                    if (brickSelect.options[i].text.trim().toUpperCase() === savedBrick.trim().toUpperCase()) {
                        brickSelect.selectedIndex = i; // Насильно включаем именно выбранный кирпич!
                        
                        // Выводим его чистую цену на тег сэндвича на экране
                        if (basePriceTag) {
                            const currentPrice = parseFloat(brickSelect.value) || exactReckePrice;
                            basePriceTag.innerHTML = `${currentPrice.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} <span style="font-size: 11px; color: #64748b; font-weight: 700;">₽/ШТ.</span>`;
                        }
                        break;
                    }
                }
                calculateTotal(); // Пинаем калькулятор для точного пересчета сметы
            }, 300);
        }
        
        // Вычищаем оперативную память
        localStorage.removeItem('selectedBrick');
        localStorage.removeItem('selectedBrickID');
    }

    // КНОПКА ОТКРЫТИЯ С СТРАНИЦЫ КАРТОЧКИ ТОВАРА (Фикс поиска по JSON вместо старой базы)
    const productBtn = document.querySelector('.product-order-submit');
    if (productBtn) {
        productBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            const productTitleElement = document.querySelector('h1');
            const productTitle = productTitleElement ? productTitleElement.textContent.trim() : "КИРПИЧ РИГЕЛЬНЫЙ ЖЕЛЕЗНОГОРСКИЙ КРАФТ";
            
            fetch('products.json')
                .then(response => response.json())
                .then(bricksData => {
                    let cleanPrice = exactReckePrice;
                    if (Array.isArray(bricksData)) {
                        const foundBrick = bricksData.find(b => b.title.trim().toUpperCase() === productTitle.toUpperCase());
                        if (foundBrick) cleanPrice = foundBrick.price;
                    }
                    localStorage.setItem('selectedBrick', productTitle);
                    localStorage.setItem('selectedBrickPrice', cleanPrice);
                    window.location.href = "index.html"; 
                })
                .catch(() => {
                    localStorage.setItem('selectedBrick', productTitle);
                    localStorage.setItem('selectedBrickPrice', exactReckePrice);
                    window.location.href = "index.html";
                });
        });
    }

    // КНОПКА ФИКСАЦИИ СМЕТЫ И ПЕРЕХОДА К КОНТАКТАМ (Твой родной чистый код)
     if (calcSubmitBtn) {
        calcSubmitBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const quantity = parseFloat(brickQuantity.value) || 0;

            if (quantity <= 0) {
                alert(isAreaMode ? "Пожалуйста, введите площадь стен!" : "Пожалуйста, введите количество кирпича!");
                return;
            }

                       if (leadInput && leadSubmitBtn) {
                let fullBrickName = brickSelect ? brickSelect.options[brickSelect.selectedIndex].text : '';
leadInput.value = fullBrickName.toUpperCase();
leadInput.style.setProperty('text-overflow', 'clip', 'important');
// Вычищаем глобальную переменную, чтобы при следующем открытии ничего не двоилось
if (typeof selectedBrickName !== 'undefined') {
    selectedBrickName = '';
}
                
                const rawSumText = totalSum.innerText || totalSum.textContent;
                const lines = rawSumText.split('\n');
                const quantityValue = parseFloat(brickQuantity.value || 0).toLocaleString("ru-RU");
                
                if (isAreaMode) {
                    if (leadQuantityTitle) leadQuantityTitle.textContent = "ПЛОЩАДЬ:";
                    if (leadQuantityValue) leadQuantityValue.textContent = quantityValue + " М²";
                    const totalPieces = Math.ceil(parseFloat(brickQuantity.value) * 60);
                    if (leadPcsValue) leadPcsValue.textContent = totalPieces.toLocaleString("ru-RU") + " ШТ.";
                    if (leadPcsBlock) {
                        leadPcsBlock.style.display = "block";
                        leadPcsBlock.classList.add("active");
                    }
                } else {
                    if (leadQuantityTitle) leadQuantityTitle.textContent = "КОЛИЧЕСТВО:";
                    if (leadQuantityValue) leadQuantityValue.textContent = quantityValue + " ШТ.";
                    if (leadPcsBlock) {
    leadPcsBlock.style.display = "none";
    leadPcsBlock.classList.remove("active"); // 
}
                }
                
                if (leadQuantityBlock) leadQuantityBlock.style.display = "block";

                if (isAreaMode && leadPcsBlock && leadPcsValue) {
                    const pcsLine = lines.find(line => line.toLowerCase().includes("объем заказа:"));
                    if (pcsLine) {
                        const cleanPcs = pcsLine.replace(/объем заказа:/i, '').replace(/[\(\):]/g, '').trim().toUpperCase();
                        leadPcsValue.textContent = cleanPcs;
                    }
                }

                if (leadPriceTag && leadSumBlock) {
                    const cleanPrice = lines[0] ? lines[0].trim() : "0 ₽"; 
                    leadPriceTag.textContent = cleanPrice; 
                    leadSumBlock.style.setProperty('display', 'block', 'important'); 
                }
                
                leadSubmitBtn.textContent = "ОТПРАВИТЬ РАСЧЁТ МЕНЕДЖЕРУ";

                // Мягко закрываем окно калькулятора
                if (calcModal) {
                    calcModal.classList.remove("active");
                    document.body.style.overflow = ""; 
                }
                
                // Плавно летим вниз к форме контактов
                const targetForm = document.querySelector(".custom-form-header");
                if (targetForm) {
                    const headerOffset = 100; 
                    const elementPosition = targetForm.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            } else {
                // Если мы тестируем калькулятор в каталоге или карточке товара — запоминаем объём и летим на главную!
                let currentBrickName = (typeof selectedBrickName !== 'undefined' && selectedBrickName) ? selectedBrickName : (brickSelect ? brickSelect.options[brickSelect.selectedIndex].text : '');
                
                localStorage.setItem('selectedBrick', currentBrickName);
                localStorage.setItem('selectedBrickPrice', brickSelect ? brickSelect.value : exactReckePrice);
                
                // Перенаправляем человека на главную страницу прямо к форме контактов!
                window.location.href = "index.html#booking";
            }
        });
    }
    // УПРАВЛЕНИЕ ОКНАМИ (ОТКРЫТИЕ С ГЛАВНОЙ СТРАНИЦЫ - Твой родной чистый код)
    if (openCalcBtn && calcModal) {
        openCalcBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation(); 
            if (selectContainer) selectContainer.style.setProperty('display', 'block', 'important'); 
            setCalculatorMode(false);
            calcModal.classList.add('active');
            document.body.style.overflow = "hidden";
            setTimeout(() => { if (brickQuantity) brickQuantity.focus(); }, 250);
        });
    }

    // Закрытие по крестику
    if (closeCalc && calcModal) {
        closeCalc.addEventListener('click', (e) => {
            e.preventDefault();
            calcModal.classList.remove('active');
            document.body.style.overflow = "";
        });
    }

    // Закрытие по клику мимо окна на темный фон
    if (calcModal) {
        calcModal.addEventListener("click", function (e) {
            if (e.target === calcModal) {
                calcModal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    // Защита от закрытия при клике на само тело калькулятора
    const calcBody = calcModal ? calcModal.querySelector(".calc-box-content") : null;
    if (calcBody) {
        calcBody.addEventListener("click", function (e) { e.stopPropagation(); });
    }

    // Железобетонное закрытие по кнопке Escape с клавиатуры компьютерщика
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

// ==========================================================================
// 🧱 АВТОМАТИЧЕСКИЙ ВЫВОД КАТАЛОГА ИЗ PRODUCTS.JSON
// ==========================================================================
function loadCatalog() {
    const catalogContainer = document.querySelector('.catalog-grid') || document.querySelector('.products-container');
    if (!catalogContainer) return; // Если мы не на странице каталога, просто выходим

    // Читаем наш 1С-файл данных
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            catalogContainer.innerHTML = ''; // Очищаем контейнер от старого мусора

            products.forEach(product => {
                // Создаём карточку товара на лету
                const card = document.createElement('div');
                card.className = `product-card ${product.category}`; // Класс категории для фильтров!
                
                // Проверяем остаток из 1С для плашки наличия
                const stockStatus = product.stock > 0 
                    ? `<span class="stock-badge in-stock">В наличии: ${product.stock.toLocaleString('ru-RU')} шт.</span>`
                    : `<span class="stock-badge out-of-stock">Под заказ (завод)</span>`;

                // 🔥 ЖЕЛЕЗОБЕТОННЫЙ РАСЧЕТ АЮРА: Разбиваем цену 1С на рубли и копейки без говнокода
                const rubles = Math.floor(product.price); 
                const kopecks = Math.round((product.price - rubles) * 100); 
                const formattedPrice = `цена ${rubles} руб ${kopecks.toString().padStart(2, '0')} коп`;

                // Забиваем твою родную вёрстку карточки
                card.innerHTML = `
                    <div class="product-img-box">
                        <img src="${product.img}" alt="${product.title}" loading="lazy">
                        ${stockStatus}
                    </div>
                    <div class="product-info">
                        <span class="product-meta">${product.meta}</span>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-desc">${product.desc}</p>
                        <div class="product-specs">
                            <span><b>Размер:</b> ${product.size}</span>
                            <span><b>Формат:</b> ${product.format}</span>
                            <span><b>Поверхность:</b> ${product.surface}</span>
                        </div>
                        <div class="product-footer">
                            <div class="product-price-block">
                                <span class="price-label">Цена за шт:</span>
                                <!-- 🔥 ИСПРАВЛЕНО: Выводится красивый текст Аюра "руб коп" без лишних значков ₽ -->
                                <span class="product-price-val">${formattedPrice}</span>
                            </div>
                            <!-- 🔥 ЧИСТОТА: data-price передает чистую цифру (например 82.35) прямо в калькулятор! -->
                            <button class="product-order-submit" data-title="${product.title}" data-price="${product.price}">Рассчитать смету</button>
                        </div>
                    </div>
                `;
                catalogContainer.appendChild(card);
            });

            // Навешиваем клик на новые созданные кнопки расчета
            initCatalogButtons();
        })
        .catch(error => console.error('Ошибка загрузки каталога товаров:', error));
}


// Запускаем загрузку при старте страницы
document.addEventListener('DOMContentLoaded', loadCatalog);

function initCatalogButtons() {
    const catalogContainer = document.querySelector('.catalog-grid') || document.querySelector('.products-container');
    if (!catalogContainer) return;

    catalogContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.product-order-submit');
        if (!btn) return;
        
        e.preventDefault();
        const productTitle = btn.getAttribute('data-title');
        const productPrice = btn.getAttribute('data-price');

        // Мгновенно запоминаем в память чистые данные и летим на главную!
        localStorage.setItem('selectedBrick', productTitle);
        localStorage.setItem('selectedBrickPrice', productPrice);
        window.location.href = "index.html";
    });
}


function renderSingleProductPage() {
    const prodTitle = document.getElementById("prodTitle");
    if (!prodTitle) return; // Безопасный выход, если мы не на этой странице

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (isNaN(productId)) return;

    // Читаем наш чистый 1С-файл данных
    fetch('products.json')
        .then(response => response.json())
        .then(bricksData => {
            if (!Array.isArray(bricksData)) return;

            const currentProduct = bricksData.find(item => item.id === productId);

            if (currentProduct) {
                const prodStock = document.getElementById('prodStock');
    if (prodStock) {
        if (currentProduct.stock > 0) {
            prodStock.textContent = `${currentProduct.stock.toLocaleString('ru-RU')} шт.`;
            prodStock.classList.add('in-stock');
        } else {
            prodStock.textContent = 'Под заказ (завод)';
            prodStock.classList.add('out-of-stock');
        }
    }
                document.getElementById('prodMeta').textContent = currentProduct.meta;
                document.getElementById('prodTitle').textContent = currentProduct.title;
                document.getElementById('prodDesc').textContent = currentProduct.desc;
                document.getElementById('prodSize').textContent = currentProduct.size;
                document.getElementById('prodFormat').textContent = currentProduct.format;
                document.getElementById('prodFrost').textContent = currentProduct.frost;
                document.getElementById('prodWater').textContent = currentProduct.water;
                document.getElementById('prodSurface').textContent = currentProduct.surface;
                
                const prodPrice = document.getElementById('prodPrice');
                if (prodPrice) prodPrice.textContent = `${currentProduct.price.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽/ШТ.`;

                const imgElement = document.getElementById('prodImg');
                if (imgElement && currentProduct.img) {
                    imgElement.src = currentProduct.img;
                    imgElement.alt = currentProduct.title;
                    imgElement.style.display = 'block';
                }

                document.title = currentProduct.title + " | Центр Кирпича";

                // 1. 🔥 ЖЕЛЕЗОБЕТОННЫЙ КЛИК МИМО КАРТОЧКИ ДЛЯ ЗАКРЫТИЯ СБОКУ
                 const overlay = document.getElementById('productPageOverlay');
                if (overlay) {
                    overlay.addEventListener('click', (e) => {
                        if (e.target === overlay) {
                            closeProductOverlay();
                        }
                    });

                    // 2. Крестик закрытия
                    const closeBtn = document.getElementById('productCloseBtn');
                    if (closeBtn) {
                        closeBtn.addEventListener('click', closeProductOverlay);
                    }

                    // 3. Закрытие по Escape
                    document.addEventListener('keydown', function escHandler(e) {
                        if (e.key === 'Escape') {
                            document.removeEventListener('keydown', escHandler);
                            closeProductOverlay();
                        }
                    });
                }

        }
        })
        .catch(error => console.error("Ошибка рендеринга страницы:", error));
}

function closeProductOverlay() {
    window.location.href = 'catalog.html';
}

// 4. 🔥 ДАТЧИК СТРЕЛОЧКИ НАВЕРХ (Плавное появление при скролле и мягкий подъем)
function initScrollUpButton() {
    const scrollBtn = document.getElementById('scrollUpBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible'); // Показываем стрелочку
        } else {
            scrollBtn.classList.remove('visible'); // Прячем стрелочку
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Мягкий Pro-подъем вверх!
    });
}

// Запускаем всю инженерию в общем загрузчике
document.addEventListener("DOMContentLoaded", () => {
    renderSingleProductPage();
    initScrollUpButton();
});

// ==========================================================================
//  ВЫВОД ВИТРИНЫНА ГЛАВНОЙ СТРАНИЦЕ 
// ==========================================================================
function renderMainPageShowcase() {
    // Ювелирно находим твой родной контейнер сетки на главной странице
    const showcaseContainer = document.getElementById('catalogRenderBox');
    if (!showcaseContainer) return; // Безопасный выход, если мы на другой странице

    // Читаем наш чистый 1С JSON-файл данных products.json
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            showcaseContainer.innerHTML = ''; // Вычищаем кашу с экрана

            // Откусываем ровно первые 4 сочных кирпича Recke для парадной витрины
            const featuredProducts = products.slice(0, 4);

            featuredProducts.forEach(product => {
                const card = document.createElement('div');
                
                // 🔥 Возвращаем твои родные люксовые классы карточки!
                card.className = `showcase-card ${product.category}`; 
                
                // 🔥 ИСПРАВЛЕНО НАМЕРТВО: Передаем данные строго в твоих родных атрибутах,
                // которые ищет твой калькулятор для открытия всплывающих окон!
                card.setAttribute('data-title', product.title);
                card.setAttribute('data-price', product.price);

                // Автоматически переводим чистую цену 1С в красивый русский формат "руб коп"
                const rubles = Math.floor(product.price); 
                const kopecks = Math.round((product.price - rubles) * 100); 
                const formattedPrice = `цена ${rubles} руб ${kopecks.toString().padStart(2, '0')} коп`;

                // ВЁРСТКА СТЕНЫ ИЗ CSS: 
                card.innerHTML = `
                    <div class="showcase-img-box">
                        <div class="brick-texture-overlay"></div>
                        <img src="${product.img}" alt="${product.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; z-index: 2; position: relative;">
                    </div>
                    <div class="showcase-info">
                        <span class="showcase-meta">${product.meta}</span>
                        <h3>${product.title}</h3>
                        <span class="catalog-brick-price-tag">${formattedPrice}</span>
                        <p>${product.desc}</p>
                    </div>
                `;
                showcaseContainer.appendChild(card);
            });

            
        })
        .catch(error => console.error('Ошибка рендеринга безопасной витрины:', error));
}

// Запускаем безопасный рендер при загрузке главной страницы
document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.href.includes('catalog.html')) {
        renderMainPageShowcase();
    }
});