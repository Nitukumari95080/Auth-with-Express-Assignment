function signupDataValidate(req, res, next) {
    const { name, username, bio, email, password } = req.body;
    if (!name || !username || !bio || !email || !password) {
        return res.status(400).send('Please provide all required fields');
    }
    next();
}

module.exports = { signupDataValidate };
