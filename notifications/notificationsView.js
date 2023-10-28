export const buildNotification = (message, type) => {
  return `
    <div class="notification ${type}">
      <p id="notifications">${message}</p>
    </div>
  `
}
