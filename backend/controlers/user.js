const {connection}=require('../configurationDatabase/config')
const bcrypt = require("bcrypt");
const saltRounds = 10;


module.exports = {
    RegisterUser:((req, res) => {
        const username = req.body.user_Name;
        const password = req.body.password;
        const cPassword = req.body.cPassword;
      
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
      
          connection.query(
            "INSERT INTO user (user_Name, password, confirm_password) VALUES (?,?,?)",
            [username, hash, hash],
            (err, result) => {
              if (err) {
                res.send(err)
              } else {
                res.send({message : "user created!!"})
              }
            }
          );
        });
      }),

    UserLogin:((req, res) => {
        const username = req.body.user_Name;
        const password = req.body.password;
      
        connection.query(
          "SELECT * FROM user WHERE user_Name = ?;",
          username,
          (err, result) => {
            if (err) {
                res.status(500).send({ err: err });
            }
      
            if (result.length > 0) {
              bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                  req.session.user = result;
                  res.status(200).send({info : result, loggedIn : "true"});
                } else {
                    res.status(200).send({ message: "Wrong username/password combination!" });
                }
              });
            } else {
                res.status(404).send({ message: "User doesn't exist" });
            }
          }
        );
      }),

    LoginStatus : ((req, res) => {
        if (req.session.user) {
          res.send({ loggedIn: true, user: req.session.user });
        } else {
          res.send({ loggedIn: false });
        }
      }),

    UserLogout : ((req, res) => {
        if (req.session) {
          req.session.destroy()
          res.clearCookie('userId')
          return res.status(200).json({ msg: 'logging you out' })
        } else {
          return res.status(404).json({ msg: 'no user to log out!' })
        }
      }),

    
    
}