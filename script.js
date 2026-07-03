// ======================================================
//  ЛОГИКА СМАРТ-КАЛЬКУЛЯТОРА ДЛЯ ВСЕХ ОБЪЕКТОВ
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Находим кнопку строго по её уникальному ID
    const openCalcBtn = document.getElementById('open-calc-trigger'); 
    const calcModal = document.getElementById('calcModal');
    const closeCalcBtn = document.getElementById('closeCalc');

    const brickSelect = document.getElementById('brickSelect');
    const brickQuantity = document.getElementById('brickQuantity');
    const totalSum = document.getElementById('totalSum');

    // ТЕСТОВАЯ ПРОВЕРКА ДЛЯ ВАС: если в консоли браузера вылетит ошибка, мы сразу поймем
    if (!openCalcBtn) {
        console.error("Критическая ошибка: Кнопка с id='open-calc-trigger' не найдена в HTML!");
        return;
    }

    // 1. СТРОГОЕ ОТКРЫТИЕ ОКНА ПРИ КЛИКЕ
    openCalcBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Запрещаем странице прыгать вверх или обновляться
        if (calcModal) {
            calcModal.classList.add('active'); // Зажигаем окно на экране
        }
    });

    // 2. ЗАКРЫТИЕ ОКНА ПО КРЕСТИКУ
    if (closeCalcBtn) {
        closeCalcBtn.addEventListener('click', () => {
            calcModal.classList.remove('active');
        });
    }

    // ЗАКРЫТИЕ ОКНА ПО КЛИКУ МИМО НЕГО
    if (calcModal) {
        calcModal.addEventListener('click', (e) => {
            if (e.target === calcModal) calcModal.classList.remove('active');
        });
    }

    // 3. МАТЕМАТИЧЕСКИЙ ПЕРЕСЧЕТ СУММЫ НА ЛЕТУ
    function calculateCost() {
        if (!brickSelect || !brickQuantity || !totalSum) return;
        
        const pricePerPiece = parseInt(brickSelect.value) || 0; 
        const quantity = parseInt(brickQuantity.value) || 0;    
        const total = pricePerPiece * quantity; 
        
        // Красивое разделение тысяч пробелами
        totalSum.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }

    if (brickSelect && brickQuantity) {
        brickSelect.addEventListener('change', calculateCost);
        brickQuantity.addEventListener('input', calculateCost);
    }
});
