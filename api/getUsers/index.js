module.exports = async function (context, req) {
    const fs = require('fs');
    const users = JSON.parse(fs.readFileSync('../shared/users.json'));

    const { userinput, passinput } = req.body;

    if (!userinput || !passinput) {
        context.res = {
            status: 400,
            body: "Please provide both username and password."
        };
        return;
    }

    let userFound = false;
    for (const user of users) {
        if (userinput === user.username) {
            userFound = true;
            if (passinput === user.password) {
                // Correct username and password
                context.res = {
                    status: 200,
                    body: "Login Successful",
                };
                return;
            } else {
                // Correct username but incorrect password
                context.res = {
                    status: 401,
                    body: "Invalid Password",
                };
                return;
            }
        }
    }

    // Username not found
    if (!userFound) {
        context.res = {
            status: 401,
            body: "Not a registered username",
        };
    }
};
