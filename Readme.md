

# we are going to use RabbitMQ in this project 


1. What is RabbitMQ ? 


let understand using example ,


Postman
    │
    ▼
Express API
    │
    ▼
MongoDB

But in a real application (Amazon, Flipkart, Swiggy), after saving the order, many other things happen:

📧 Send confirmation email
📦 Notify inventory service
💳 Generate invoice
🔔 Send notification
🚚 Start shipping

# Instead of doing all this in the API (which makes it slow), we'll use RabbitMQ.

           Save Order
               │
               ▼
           MongoDB
               │
               ▼
      RabbitMQ Queue
               │
      ┌────────┴────────┐
      ▼                 ▼
 Email Service    Inventory Service


# What is RabbitMQ?

Think of RabbitMQ as a waiting room.

Imagine a doctor's clinic.

Patient
   │
   ▼
Reception
   │
   ▼
Waiting Room
   │
   ▼
Doctor
Customer = Producer
Waiting Room = Queue
Doctor = Consumer

Install RabbitMQ Package

npm install amqplib