var peeprRemovr = function () {
    'use strict';
    var elementList = document.querySelectorAll('[data-peepr]'), i;
    for (i = 0; i < elementList.length; i += 1) {
        elementList[i].removeAttribute('data-peepr');
    }
    if (i) {
        console.log('Removed ' + i + ' peepers...');
    }
};

setInterval(peeprRemovr, 100);
