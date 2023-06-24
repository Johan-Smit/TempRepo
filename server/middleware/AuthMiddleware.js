const authenticationController = require("../controllers/AuthenticationController");


const verifyRequest = async (req, res, next) => {

    if (req.url == "/authenticate") {
        next();
        return;
    }

    if ((!req.cookies.token || !req.cookies.user)) {
        console.log("nope")
        res.redirect("/authenticate");
    }
    else {

        const verificationResult = await authenticationController.verifyToken(req.cookies.user, req.cookies.token);
        //console.log(verificationResult);

        if (verificationResult.data.message == "Success") {
            next();
        }
        else {
            res.redirect("/authenticate");
        }
    }
}

module.exports = {
    verifyRequest
}