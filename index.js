import dotenv from 'dotenv'
import PAYPAY from '@paypayopa/paypayopa-sdk-node';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

PAYPAY.Configure({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET,
  merchantId: process.env.MERCHANT_ID,
  //Set True for Production Environment. By Default this is set False for Sandbox Environment.
  productionMode: false, 
});

const payload = {
  merchantPaymentId: uuidv4(),
  amount: {
    amount: 10,
    currency: "JPY"
  },
  codeType: "ORDER_QR",
  orderDescription: "Mune's Favourite Cake",
  isAuthorization: false
};

// Calling the method to create a qr code
PAYPAY.QRCodeCreate(payload, (response) => {
  // Printing if the method call was SUCCESS
  console.log(JSON.parse(response.BODY).data.url);
});
