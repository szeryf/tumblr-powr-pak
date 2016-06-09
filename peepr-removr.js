var elementList = document.querySelectorAll("[data-peepr]");
for (var i = 0; i < elementList.length; i++) {
  elementList[i].removeAttribute('data-peepr');
}
