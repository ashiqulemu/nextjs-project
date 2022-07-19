import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        {/* make a navigation  */}
        <h1>main dashboard content </h1>
       <ul>
        <li>
          <Link href='post/post-page'>going to other pages</Link>
        </li>
       </ul>
      </body>


      <style jsx global>{`
        html,
        body {
          text-align:center;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  )
}
