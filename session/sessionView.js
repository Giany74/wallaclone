export const buildUnauthorizedSession = () => {
  return `<ul>
  <li>
    <a href="./login.html" class:"button">Login</a>
    <a href="./signup.html" id:"button">Signup</a>
  </li>
</ul>`;
}

export const buildAuthenticatedSession = () => {
  return `
  <a href="./creation.html">Create Ads</a>
  <button class:"bt-log">Logout</button>`;
}
