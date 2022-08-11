const express = require("express");
const app = express();
const mongoose= require("mongoose"); // librería que nos permite hacer consultas a nuestra BBDD mongoDB
const dotenv = require("dotenv"); // gestión de variables de entorno
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then( ()=> console.log("DBconnection successfull"))
        .catch( (error) => console.log(error));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, ()=> {
    console.log("backend server is running!")
});