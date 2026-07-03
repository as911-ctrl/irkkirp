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

// ======================================================
//   ИНТЕРБУРГСКИЙ 3D-ПАРАЛЛАКС И ХОВЕР-ЭФФЕКТЫ
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector('.hero-cinema');
    const premiumHouse = document.querySelector('.premium-house-img');

    // Проверяем, что элементы первого экрана существуют и мы не на телефоне
    if (heroSection && premiumHouse && window.innerWidth > 768) {
        
        heroSection.addEventListener('mousemove', (e) => {
            // Находим координаты курсора мыши на первом экране
            const width = heroSection.offsetWidth;
            const height = heroSection.offsetHeight;
            const mouseX = e.clientX - (heroSection.offsetLeft + width / 2);
            const mouseY = e.clientY - (heroSection.offsetTop + height / 2);

            // 1. МИКРО-ПАРАЛЛАКС ЗАДНЕГО ФОНА (Сетка швов смещается за мышкой)
            const bgMoveX = (mouseX / width) * 15; // Максимальный сдвиг 15px
            const bgMoveY = (mouseY / height) * 15;
            heroSection.style.backgroundPosition = `${bgMoveX}px ${bgMoveY}px, ${bgMoveX}px ${bgMoveY}px, center center`;

            // 2. 3D-ОТКЛИК БОЛЬШОГО КИРПИЧНОГО ДОМА (Особняк плавно поворачивается лицом к курсору)
            const houseRotateX = -(mouseY / height) * 10; // Наклон до 10 градусов
            const houseRotateY = (mouseX / width) * 12;
            
            // Объединяем парение в воздухе со слежением за мышкой
            premiumHouse.style.transform = `rotateX(${houseRotateX}deg) rotateY(${houseRotateY}deg) translateY(-6px)`;
            premiumHouse.style.transition = "transform 0.1s ease-out";
        });

        // Когда мышка улетает с первого экрана — возвращаем дом в идеальное исходное состояние
        heroSection.addEventListener('mouseleave', () => {
            heroSection.style.backgroundPosition = "0px 0px, 0px 0px, center center";
            premiumHouse.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
            premiumHouse.style.transition = "transform 0.6s ease";
        });
    }
});
