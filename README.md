## PayPay SDK sample

### STEP1

Create PayPay for Developers account.
https://developer.paypay.ne.jp/account/signup

Issue API Key and Test user account

### STEP2

```shell
$ cd /path/to/paypay-qrcode-sample
$ yarn install
$ cp .env.sample .env
```

Edit `.env` file.

### STEP3

Log in in Sandbox mode for the PayPay app.
https://paypay.ne.jp/developers-faq/sandbox_environment/post-43/

### STEP4

```shell
$ node index.js
```

Open paypay URL on your browser.

### STEP5

Scan QR-Code
