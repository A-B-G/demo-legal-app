import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
// import { Login } from '../components/Forms/Login';
import { FormInput } from '../components/Forms/FormInputs';
import styles from '../styles/Home.module.css'

const Home = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    if(e.target.name === "user") {
      let user = e.target.value;
      setUserName(user);
    }
    if(e.target.name === "password") {
      let pass = e.target.value;
      setPassword(pass);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Demo legal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
          <FormInput
            id="1"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            placeHolder="password"
          />
          <FormInput
            id="1"
            name="user"
            value={userName}
            onChange={(e) => handleChange(e)}
            placeHolder="user name"
          />
        

        <p className={styles.description}>
          
        </p>

        <div className={styles.grid}>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
