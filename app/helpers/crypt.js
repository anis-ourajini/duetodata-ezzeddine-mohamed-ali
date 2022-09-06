const bcrypt = require('bcrypt');
saltRounds = 10
exports.crypt = async (password) => {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })

    return hashedPassword
}