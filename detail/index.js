import { adsDetailController } from "./detailController.js";
import { notificationsController } from "../notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const adsId = params.get("id");

  const notifications = document.querySelector("#notifications");
  const showNotification = notificationsController(notifications);

  const adsDetail = document.querySelector('#adsDetail');

  adsDetail.addEventListener('adsLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  })

  adsDetailController(adsDetail, adsId);

})
