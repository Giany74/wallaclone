export const buildUnauthorizedSession = () => {
  return `<ul>
  <li>
    <a href="./login.html">Login</a>
    <a href="./signup.html">Signup</a>
  </li>
</ul>`;
}

export const buildAuthenticatedSession = () => {
  return `
  <a href="./creation.html">Create Ads</a>
  <button>Logout</button>`;
}
