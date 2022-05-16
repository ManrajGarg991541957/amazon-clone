const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KxRrnGH1rSxE7ckk5IhvpXBtp6r6QX7jyT6eY9RCWbH5rT0pYVAfoQLZNrGZNZEx0Kkv1rN5OJSsJXj2oNCixOh00LxPVCmzt"
);

// API setup

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // OK response
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example End point
//http://localhost:5001/clone-42f14/us-central1/api
