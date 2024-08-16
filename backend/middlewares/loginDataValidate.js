function loginDataValidate(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Please provide username and password');
    }
    next();
}

module.exports = { loginDataValidate };
