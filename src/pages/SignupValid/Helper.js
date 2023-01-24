exports.isValidString = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
exports.isValidPassword = function (password) {
    return /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}$/.test(
        password
      );
}

exports.isValidEmailSyntax = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}