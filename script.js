document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyAllSlug');
    const notification = document.getElementById('notification');
    var customSlug = document.getElementById('customSlug');
    const deleteCustom = document.getElementById('deleteCustomSLug');
    const copyCustom = document.getElementById('copyCustomSlug');
    const onAllSlug = document.getElementById('onAllSlug');
    const offAllSlug = document.getElementById('offAllSlug');

    // Кнопка копирования ТОЛЬКО кастомного слага
    copyCustom.onclick = function () {
    const textToCopy = customSlug.value;
    navigator.clipboard.writeText(textToCopy).then(function () {
        if (textToCopy.length !== 0) {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();}
        else {
            notification.textContent = 'Nothing to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        }
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    
    // Кнопка удаления кастомного слага
    deleteCustom.addEventListener('click', function() {
            customSlug.value = '';
    });

    // Включаем и выключаем все чекбоксы по кнопке
    onAllSlug.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="all"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    });
    offAllSlug.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="all"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    });

    copyButton.addEventListener('click', function () {
        // Получаем все выбранные чекбоксы
        const checkboxesOn = document.querySelectorAll('input[name="all"]:checked');

        // Собираем их значения в массив
        
        const selectedValues = Array.from(checkboxesOn).map(checkbox => checkbox.value);

         // Добавляем customSlug.value, только если он не пустой
        if (customSlug.value && customSlug.value.trim() !== '') {
            selectedValues.push(customSlug.value);
        }
        
        // Проверяем, есть ли выбранные элементы (чекбоксы или кастомный слаг)
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
    const copySmartButton = document.getElementById('copySmartSlug');
    const notification = document.getElementById('notification');
    var customSmartSlug = document.getElementById('customSmartSlug');
    const deleteCustomSmart = document.getElementById('deleteCustomSmartSlug');
    const copyCustomSmart = document.getElementById('copyCustomSmartSlug');
    const onSmartSlug = document.getElementById('onSmartSlug');
    const offSmartSlug = document.getElementById('offSmartSlug');

    // Кнопка копирования ТОЛЬКО кастомного слага
    copyCustomSmart.onclick = function () {
    const textToCopy = customSmartSlug.value;
    navigator.clipboard.writeText(textToCopy).then(function () {
        if (textToCopy.length !== 0) {
            notification.textContent = 'Copied to clipboard!';
            notification.style.backgroundColor = '#4CAF50';
            showNotification();}
        else {
            notification.textContent = 'Nothing to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        }
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    
    // Кнопка удаления кастомного слага
    deleteCustomSmart.addEventListener('click', function() {
            customSmartSlug.value = '';
    });

    // Включаем и выключаем все чекбоксы по кнопке
    onSmartSlug.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="smart"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    });
    offSmartSlug.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="smart"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    });


    copySmartButton.addEventListener('click', function () {
        // Получаем все выбранные чекбоксы
        const checkboxes = document.querySelectorAll('input[name="smart"]:checked');

        // Собираем их значения в массив
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);

         // Добавляем customSmartSlug.value, только если он не пустой
        if (customSmartSlug.value && customSmartSlug.value.trim() !== '') {
            selectedValues.push(customSmartSlug.value);
        }
        
        // Проверяем, есть ли выбранные элементы (чекбоксы или кастомный slug)
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

    const inputTariffRedirect = document.getElementById('inputTariffRedirect');
    const inputPromoRedirect = document.getElementById('inputPromoRedirect');

    const webLink = document.getElementById('web');
    const androidLink = document.getElementById('android');
    const smartLink = document.getElementById('smartTV');
    const webSmartLink = document.getElementById('webSmart');

    const copyWebTariff = document.getElementById('copyWebTariff');
    const copyAndroidTariff = document.getElementById('copyAndroidTariff');
    const copySmartTariff = document.getElementById('copySmartTariff');
    const copyWebSmartTariff = document.getElementById('copyWebSmartTariff');

    const webPromo = document.getElementById('webPromo');
    const androidPromo = document.getElementById('androidPromo');
    const smartPromo = document.getElementById('smartTVPromo');

    const copyWebPromo = document.getElementById('copyWebPromo');
    const copyAndroidPromo = document.getElementById('copyAndroidPromo');
    const copySmartPromo = document.getElementById('copySmartPromo');

    const enterTariff = document.getElementById('enterTariff');
    const enterPromo = document.getElementById('enterPromo');

    const deleteTariff = document.getElementById('deleteTariff');
    const deleteTariffRedirect = document.getElementById('deleteTariffRedirect')
    const deletePromo = document.getElementById('deletePromo');
    const deletePromoRedirect = document.getElementById('deletePromoRedirect')

    const active = document.getElementById('active');

    const notification = document.getElementById('notification');

    //Кнопки удаления тарифа и редиректа
    deleteTariff.addEventListener('click', function(){
        inputTariff.value = ''
    });
    deleteTariffRedirect.addEventListener('click', function(){
        inputTariffRedirect.value = ''
    });
    deletePromo.addEventListener('click', function(){
        inputPromocode.value = ''
    });
    deletePromoRedirect.addEventListener('click', function(){
        inputPromoRedirect.value = ''
    });
    

    // Перенос текста в окна ссылок
    enterTariff.onclick = function () {
        let tariffId = inputTariff.value.substring(0, 10);

        if (inputTariffRedirect && inputTariffRedirect.value && inputTariffRedirect.value.trim() !== ''){
            let tariffId = inputTariff.value.substring(0, 10);
            webLink.innerText = `https://premier.one${inputTariffRedirect.value}#${inputTariff.value}`;
            androidLink.innerText = `one.premier://premier.one/me/subscribe?${inputTariff.value}`;
            smartLink.innerText = `/adding-payment-method?tariffId=${inputTariff.value}&productId=${tariffId}&redirect=${inputTariffRedirect.value}`;
            webSmartLink.innerText = `/adding_payment_method_${inputTariff.value}?redirect=${inputTariffRedirect.value}`;
        }
            
        else {
            webLink.innerText = `https://premier.one#${inputTariff.value}`;
            androidLink.innerText = `one.premier://premier.one/me/subscribe?${inputTariff.value}`;
            smartLink.innerText = `/adding-payment-method?tariffId=${inputTariff.value}&productId=${tariffId}`;
            webSmartLink.innerText = `/adding_payment_method_${inputTariff.value}`;
            
        }
};

    enterPromo.onclick = function () {
        var activatePromocode = active.checked? 1 : 0
        if (inputPromoRedirect && inputPromoRedirect.value && inputPromoRedirect.value.trim() !== ''){
            webPromo.innerText = `#promocode-form_${inputPromocode.value}?activate=${activatePromocode}&redirect=${inputPromoRedirect.value}`;
            androidPromo.innerText = `one.premier://premier.one/me/code?code=${inputPromocode.value}`;
            smartPromo.innerText = `/promocode-form?promocode=${inputPromocode.value}&activate=${activatePromocode}&redirect=${inputPromoRedirect.value}`;
        }
        else {
            webPromo.innerText = `#promocode-form_${inputPromocode.value}?activate=${activatePromocode}`;
            androidPromo.innerText = `one.premier://premier.one/me/code?code=${inputPromocode.value}`;
            smartPromo.innerText = `/promocode-form?promocode=${inputPromocode.value}&activate=${activatePromocode}`;
        }
};
    //Копируем текст ссылок в буфер обмена
    copyWebTariff.onclick = function () {

        const textToCopy = webLink.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copyAndroidTariff.onclick = function () {

        const textToCopy = androidLink.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
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
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
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
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
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
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
            notification.textContent = 'Failed to copy!';
            notification.style.backgroundColor = '#f44336';
            showNotification();
        });
    };
    copyAndroidPromo.onclick = function () {
        const textToCopy = androidPromo.innerText;
        navigator.clipboard.writeText(textToCopy).then(function () {
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
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
            if (textToCopy.length !== 0) {
                notification.textContent = 'Copied to clipboard!';
                notification.style.backgroundColor = '#4CAF50';
                showNotification();}
            else {
                notification.textContent = 'Nothing to copy!';
                notification.style.backgroundColor = '#f44336';
                showNotification();
            }
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

