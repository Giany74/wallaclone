import { adsCreationController } from "./creationController.js";
import { notificationsController } from "../notifications/notificationsController.js";

const token = localStorage.getItem('token');
if (!token) {
  window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const adsCreation = document.querySelector('#adsCreation');

  const notifications = document.querySelector('#notifications');
  const showNotification = notificationsController(notifications);

  adsCreation.addEventListener('adsCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  adsCreationController(adsCreation);

})
