'use strict';

let unreadCount = 3;
let unreadCountText = document.querySelector(".unread-count");
const notificationCard = document.querySelectorAll('.notification-card');
const infoText = document.querySelectorAll('.info-text');
const btnReadAll = document.querySelector('.btn--read-all');
const unreadBadge = document.querySelector(`.info-unread`);
unreadCountText.textContent = unreadCount;


/* Single press - when clicked on notification with "unread" class, remove class and step down unreadCount */
for (let i = 0; i < notificationCard.length; i++) {
  const currentCard = notificationCard[i];
  const currentBadge = currentCard.querySelector(".info-unread");

  function readNotification() {
    if(currentCard.classList.contains("unread")) {
      unreadCount--;
      unreadCountText.textContent = unreadCount;
      currentCard.classList.remove("unread");
      currentBadge.classList.remove("info-unread");
    }
  }
  currentCard.addEventListener("click", readNotification);
  unreadCountText.textContent = unreadCount;
}

/* Mark All - when clicked on "Mark All Read", remoce "unread" class from all unread notifications and make unreadCount 0 */
function readAll() {
  notificationCard.forEach(x => {
    x.classList.remove("unread");
  });
  infoText.forEach(x => {
    x.classList.remove("info-unread");
  });
  unreadCount = 0;
  unreadCountText.textContent = unreadCount;
}

btnReadAll.addEventListener('click', readAll);