(() => {
  const fileName = window.location.pathname.split("/").pop();
  const requestedDestination = `${fileName || "index.html"}${window.location.hash}`;
  const allowedDestinations = /^(?:index|about|projects|contact)\.html(?:#[a-zA-Z0-9_-]+)?$/;
  const destination = allowedDestinations.test(requestedDestination) ? requestedDestination : "index.html";

  try {
    if (sessionStorage.getItem("elif-demo-session") === "authenticated") return;
  } catch {
    window.location.replace("login.html");
    return;
  }

  window.location.replace(`login.html?return=${encodeURIComponent(destination)}`);
})();