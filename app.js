express = require("express");
app = express();

userDetails = require("./userDetails.json");

app.get("/registration", function(req, res)
{
    uName = req.query.name;
    userDetails.forEach(element =>
    {
        if(uName == element.name)
        {
            res.send("Username Exists..!");
        }
        else
        {
            res.send("Registration Successful ;)");
            temp =
            {
                "name": uName
            }
            JSON.stringify(uName);
        }
    });
})

// Server Listening
app.listen(3000, function(req, res)
{
    console.log("Server is tiered..!")
})