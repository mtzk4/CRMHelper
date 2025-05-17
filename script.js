document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyAllSlug');
    const notification = document.getElementById('notification');

    copyButton.addEventListener('click', function () {
        // Получаем все выбранные чекбоксы
        const checkboxes = document.querySelectorAll('input[name="all"]:checked');

        // Собираем их значения в массив
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);

        // Если ничего не выбрано, показываем сообщение
        if (selectedValues.length === 0) {
            notification.textContent = 'Nothing selected!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
            return;
        }

        // Преобразуем массив в строку с переносами
        const textToCopy = selectedValues.join(' ');

        // Копируем в буфер обмена
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    });

    function showNotification() {
        notification.style.display = 'block';
        // Скрываем уведомление через 3 секунды
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copySmartSlug');
    const notification = document.getElementById('notification');

    copyButton.addEventListener('click', function () {
        // Получаем все выбранные чекбоксы
        const checkboxes = document.querySelectorAll('input[name="smart"]:checked');

        // Собираем их значения в массив
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);

        // Если ничего не выбрано, показываем сообщение
        if (selectedValues.length === 0) {
            notification.textContent = 'Nothing selected!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
            return;
        }

        // Преобразуем массив в строку с переносами
        const textToCopy = selectedValues.join(' ');

        // Копируем в буфер обмена
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    });

    
});
function showNotification() {
        notification.style.display = 'block';
        setTimeout(function () {
            notification.style.display = 'none';
        }, 1500);
    }
// Формирование ссылок
window.onload = function () {
    const inputTariff = document.getElementById('inputTariff');
    const inputPromocode = document.getElementById('inputPromocode');
    const webLink = document.getElementById('web');
    const smartLink = document.getElementById('smartTV');
    const webSmartLink = document.getElementById('webSmart');
    const copyWebTariff = document.getElementById('copyWebTariff');
    const copySmartTariff = document.getElementById('copySmartTariff');
    const copyWebSmartTariff = document.getElementById('copyWebSmartTariff');
    const webPromo = document.getElementById('webPromo');
    const webPromoActivate = document.getElementById('webPromoActivate');
    const smartPromo = document.getElementById('smartTVPromo');
    const smartPromoActivate = document.getElementById('smartTVPromoActivate');
    const copyWebPromo = document.getElementById('copyWebPromo');
    const copyWebPromoActivate = document.getElementById('copyWebPromoActivate');
    const copySmartPromo = document.getElementById('copySmartPromo');
    const copySmartPromoActivate = document.getElementById('copySmartPromoActivate');
    const notification = document.getElementById('notification');

    inputTariff.oninput = function () {
        webLink.innerText = `https://premier.one#${this.value}`;
        let tariffId = this.value[0] + this.value[1] + this.value[2] + this.value[3] + this.value[4] + this.value[5] + this.value[6] + this.value[7] + this.value[8] + this.value[9];
        smartLink.innerText = `/adding-payment-method?tariffId=${this.value}&productId=${tariffId}`;
        webSmartLink.innerText = `/adding_payment_method_${this.value}`;
    };
    inputPromocode.oninput = function () {
        webPromo.innerText = `#promocode-form_${this.value}?activate=0`;
        webPromoActivate.innerText = `#promocode-form_${this.value}?activate=1`;
        smartPromo.innerText = `/promocode-form?promocode=${this.value}&activate=0`;
        smartPromoActivate.innerText = `/promocode-form?promocode=${this.value}&activate=1`;
    };

    copyWebTariff.onclick = function () {
        const textToCopy = webLink.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copySmartTariff.onclick = function () {
        const textToCopy = smartLink.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copyWebSmartTariff.onclick = function () {
        const textToCopy = webSmartLink.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copyWebPromo.onclick = function () {
        const textToCopy = webPromo.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copyWebPromoActivate.onclick = function () {
        const textToCopy = webPromoActivate.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copySmartPromo.onclick = function () {
        const textToCopy = smartPromo.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copySmartPromoActivate.onclick = function () {
        const textToCopy = smartPromoActivate.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    
    function showNotification() {
        notification.style.display = 'block';
        setTimeout(function () {
            notification.style.display = 'none';
        }, 1500);
    }
}

