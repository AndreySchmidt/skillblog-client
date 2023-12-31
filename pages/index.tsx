import AuthPage from '@/components/templates/AuthPage/AuthPage'
import Head from 'next/head'

export default function Auth() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      <AuthPage />
    </>
  )
}
