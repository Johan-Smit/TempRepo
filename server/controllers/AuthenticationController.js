const authService = require("../services/AuthService")

const verifyToken = async (user, token) => {
    try {
        const result = await authService.verify(user, token);
        return result;
    }
    catch (error) {
        return error.response;
    }
}

module.exports = {
    verifyToken
}