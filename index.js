import { notificationsController } from "./notifications/notificationsController.js";
import { adsListController } from "./ads-list/listController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);
const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.getElementById('adss');
  
  adsList.addEventListener('adssLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
  adsList.addEventListener('startLoadingAdss', () => {
    show();
  })
  adsList.addEventListener('finishLoadingAdss', () => {
    hide();
  })

  adsListController(adsList);

  const session = document.getElementById('session');
  sessionController(session);
  
})


window.addEventListener('offline', () => {
  showNotification('Lost connection', 'error');
})
