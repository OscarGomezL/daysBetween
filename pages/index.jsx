import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"
import Head from "next/head"

export default function Home() {
	return (
		<div>
			<Head>
				<title>daysBetween</title>
			</Head>

			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}
