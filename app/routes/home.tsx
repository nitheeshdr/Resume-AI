import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover" >
    <NavBar/>
    <section className="main-section" >
      <div className="page-heading">
        <h1>Track Your Apllication & Resume Rating</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>

      </div>
    </section>
  </main>
}
