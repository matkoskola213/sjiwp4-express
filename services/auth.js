const JWT_SECRET_KEY="qYiyjrkBLjWIWHzqAEzbvimblLKLoB3OilJ9kqFAXlKR27arkzXRZyyRd70fAflXLeDV7j97BRiJbYoDwHugrRwWivp6BUSA8ftMJUlFzVhc3YV7tlOBIqVpKzCLro3t";

const JWT = require("jsonwebtoken")

function getUserJwt (id, email, name, role, expDays = 7) {
const tokenData = {
    uid: id,
    email: email,
    name: name,
    role: role,
    time: Date.now()
};

const tokenOptions = {
    expiresIn: expDays *24 *60 *60
};

const token = jwt.sign(tokenData, JWT_SECRET_KEY, tokenOptions);

return token;
}

// MIDDLEWARE FOR AUTH COOKIE CHECK
function checkAuthCookie(req, res, nex) {
    const token = req.cookies("auth");
    console.log ("COOKIE CHECK", token);
    jwt.verify(token, JWT_SECRET_KEY)
}

module.exports = {
    getUserJwt
};