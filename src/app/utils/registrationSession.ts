export function getStoredSessionEmail(key = "email") {
  return sessionStorage.getItem(key)?.trim() || null;
}

export function clearRegistrationSession() {
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("firstName");
  sessionStorage.removeItem("lastName");
}
