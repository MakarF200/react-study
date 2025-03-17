"use client"; // This line is used to enable client-side only code
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
//data
const user = {
  name: "John Doe",
  imageUrl: "https://example.com/image.jpg",
  bio: false,
  content: <ContentViewLaoWang />,
};
const userDataList = [
  {
    name: "John Doe",
    gender: "male",
    age: 25,
  },
  {
    name: "Dome",
    gender: "female",
    age: 20,
  },
];
// component
function UserListData() {
  const data = userDataList.map((user) => {
    return (
      <div key={user.name}>
        <li
          style={{
            color: "orange",
          }}
        >
          {user.name}
        </li>
        <li key={user.gender}>{user.gender}</li>
        <li key={user.age}>{user.age}</li>
      </div>
    );
  });
  return <ul>{data}</ul>;
}
function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log("Button clicked!");
  }
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Click me!
      </button>
      <p>You clicked {count} times</p>
    </>
  );
}
function ContentViewLaoWang() {
  return (
    <div>
      <h1>AAAAAAAAAAAAAAAAAA建材老王</h1>
    </div>
  );
}
function ContentViewLaoYe() {
  return (
    <div>
      <h1>AAAAAAAAAAAAAAAAAA建材老叶</h1>
    </div>
  );
}

if (user.bio) {
  user.name = "John Doe";
  user.content = <ContentViewLaoWang />;
} else {
  user.name = "Dome";
  user.content = <ContentViewLaoYe />;
}
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <p>Welcome to my-first-app!</p>
          <MyButton />
          <p>my name is {user.name}</p>
          {user.content}
          <UserListData />
        </div>
        <h2>Quick start</h2>
        <h1>Getting started</h1>
        <h1>Customizing your app</h1>
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
