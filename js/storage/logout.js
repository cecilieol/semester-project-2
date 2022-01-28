export function logout() {

    if (confirm("Are your sure you want to log out?")) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        location.href = "/";
    }
}