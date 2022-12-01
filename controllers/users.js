const fs = require("fs");
const { nextTick } = require("process");
const { Script } = require("vm");



const registration = ((req, res) => {
    // let { email, pass } = req.body;
console.log("hello")


    let {  email, password } = req.body;

        if (fs.existsSync(`user/${email}.txt`)) {

            res.render('register', { errmsg: "email already exist" })

        } else {

            fs.writeFile(`user/${email}.txt`, `${email}\n${password}`, (err) => {

                if (err) {

                } else {

                    res.redirect('/welcome/' + email);
                }
            })
        }




})
const login = ((req, res) => {

    let { email, pass } = req.body;

    if (fs.existsSync(`user/${email}.txt`)) {

        var array = fs.readFileSync(`user/${email}.txt`).toString().split("\n");

        if (array[1] === pass) {

            res.redirect('/welcome/' + email);

        } else {

            res.render('login', { errmsg: "Enter correct password " })
        }
    } else {

        res.render('login', { errmsg1: "email not found " })
    }
})


module.exports = {
    registration,
    login
}