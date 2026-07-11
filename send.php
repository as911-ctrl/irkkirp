<?php
// ==========================================================================
// 🧱 ЖЕЛЕЗОБЕТОННАЯ ОТПРАВКА СМЕТЫ НА НАСТОЯЩУЮ ПОЧТУ ИННЫ ИЗ ФУТЕРА
// ==========================================================================

$to = "inna@centrk.ru"; // 🔥 ИСПРАВЛЕНО НАМЕРТВО: Твоя реальная почта со скриншота!
$subject = "🔔 Новая смета с калькулятора (Центр Кирпича)";

// Забираем данные, которые прислал нам JavaScript
$brick = isset($_POST['brick']) ? htmlspecialchars($_POST['brick']) : 'Не выбран';
$quantity_title = isset($_POST['q_title']) ? htmlspecialchars($_POST['q_title']) : 'Объем:';
$quantity_val = isset($_POST['q_val']) ? htmlspecialchars($_POST['q_val']) : '0';
$pcs_val = isset($_POST['pcs_val']) ? htmlspecialchars($_POST['pcs_val']) : '0';
$pcs_active = isset($_POST['pcs_active']) ? $_POST['pcs_active'] : 'false';
$total_price = isset($_POST['price']) ? htmlspecialchars($_POST['price']) : '0 ₽';
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'Не указано';
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : 'Не указано';

// Формируем красивый текстовый чек для почты Инны
$message = "ЗАЯВКА С КАЛЬКУЛЯТОРА СТОИМОСТИ\n\n";
$message .= "🧱 Модель кирпича: " . $brick . "\n";
$message .= "📏 " . $quantity_title . " " . $quantity_val . "\n";

if ($pcs_active === 'true') {
    $message .= "📦 Объем в штуках: " . $pcs_val . "\n";
}

$message .= "💰 Предварительная стоимость: " . $total_price . "\n\n";
$message .= "👤 Имя клиента: " . $name . "\n";
$message .= "📞 Телефон для связи: " . $phone . "\n";

// Настройки кодировки, чтобы русский текст не превращался в иероглифы
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=utf-8" . "\r\n";
$headers .= "From: info@centrk.ru" . "\r\n"; // Отправка идет от имени твоего домена

// Железная отправка встроенными силами сервера
if(mail($to, $subject, $message, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
