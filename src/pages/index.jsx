import "@/styles"
import { Head } from "minista"
import Header from "@/layouts/Header"
import Main from "@/layouts/Main"
import Footer from "@/layouts/Footer"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Frontend Mentor | Bookmark landing page</title>
        <script src="/src/main.js" defer type="module"></script>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
