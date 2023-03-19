# RSA_Encryption & Decryption



## Installation

tools:<a href="https://nodejs.org/en">Node.js</a>

```bash
$ git clone https://github.com/crypto0627/RSA_Website.git
$ npm install
```
generate public key & private key
```bash
$ openssl genrsa -out rsa_1024_priv.pem 1024
$ openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
$ cat rsa_1024_pub.pem
$ cat rsa_1024_priv.pem
```
paste public key & private key to /src/App.js
![image](https://github.com/crypto0627/RSA_Website/blob/main/src/img/key.png)

