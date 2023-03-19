import { JSEncrypt } from "jsencrypt";
import { useState } from "react";
import './App.css';

function App() {
  
  const [inputdata,setInputdata]=useState('');
  const [encrypt_result,setEncrypt_result]=useState('');
  const [result2,setResult2]=useState('');

  // Copied to here
  var publicKey = `
    -----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM419XOZpQ5eZe3vT43In4vvQp
    RAjVXIblbE2pg0KQ473AIkVGpKWuP8diKt+LgSzUNcoGKiv7ALjZCbKTCL4PPT7I
    ga25X2atRTzUTOIjgar9p5jw3Mm6R1ysjqXyv2j9jLj6p6+3502QpAytYHZIvXZY
    wzKqslUgTY6ONklmzQIDAQAB
    -----END PUBLIC KEY-----`;

  // Copied to here
  var privateKey = `
    -----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDM419XOZpQ5eZe3vT43In4vvQpRAjVXIblbE2pg0KQ473AIkVG
    pKWuP8diKt+LgSzUNcoGKiv7ALjZCbKTCL4PPT7Iga25X2atRTzUTOIjgar9p5jw
    3Mm6R1ysjqXyv2j9jLj6p6+3502QpAytYHZIvXZYwzKqslUgTY6ONklmzQIDAQAB
    AoGACu32IAkKmlYpO9ZY6w2YrpRBIhJnBjqxV3u3iNtfqar8bEtntqUB0ZHFaQ8w
    bZiuc4OLC1kkj3cyZSGHTSCiQsVqbDvIhNcvIjGnyKjVj5MydhCQiEyvV6zPQw0E
    hmmCjRREIg/7zTdX51GzKbQmAjA0dGvX3qDTz0bTIL1tFGECQQDlUyyqkSGYX3dT
    VrdDka6iMmVQuuv6F7nCfGhNzy7kbNg3FKazJY9bcK75llpOscgQ2MVX8HsClPWy
    oPGDwQ2DAkEA5LiFtfVMOrpeTuXxpBlcNpumw1hj/as9I7WDNSdbI44dzjsBDeLS
    M522MsZU4JSWeuu8Z23w9By3l9KyVPZZbwJBAJJ+HHVlOqnEqkxBg9aVFJKmUNRO
    Y/oh99dGc7bo19KxuTkOZyLfpoFKLWxg4JWOufgREZeIlnvivkV6zG1XAJMCQQC8
    huyQI3WGIwCBgEBBxzWfPYWkF0O0YGWw/Xj9Y0dYc1hWGYSw8XnaWfFIwPpNc6zl
    /VH630BxtwoN9vpP1g+5AkBqzA6vFOyQ7yNhOT/CzaZKY+luR0L00Lbr6KXuZEeT
    XiJmYzLdaHVGC5KwDFmm5mAqSitVKgcYhMFz/huVPUy0
    -----END RSA PRIVATE KEY-----`

  const handleChange = (e) =>{
    setInputdata(e.target.value)
  }

  const Encrypt =()=>{
    const encrypt =  new JSEncrypt()

    encrypt.setPublicKey(publicKey)
    setEncrypt_result(encrypt.encrypt(inputdata))

  }

  const Decrypt = ()=>{
    const decrypt =  new JSEncrypt()

    decrypt.setPrivateKey(privateKey)
    setResult2(decrypt.decrypt(encrypt_result))
    console.log(result2)
  }

  return (
    <div className="box">
      <div className="key">
        <p className="pbkey">{publicKey}</p>
        <p className="pvkey">{privateKey}</p>
      </div>
      <div className="row">
        <div className="col-4">
          <label >Encrypt</label>
          <textarea type="text" onChange={handleChange} rows="5" cols="30"></textarea>
          <button className="btn1" onClick={Encrypt}>Encrypt</button>
        </div>

        <div className="col-4">
          <label>Encrypt result</label>
          <textarea type="text" placeholder={encrypt_result} rows="5" cols="30"></textarea>
          <button className="btn2" onClick={Decrypt}>Decrypt</button>
        </div>

        <div className="col-4">
          <label>Decrypt result</label>
          <textarea type="text" placeholder={result2}></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;