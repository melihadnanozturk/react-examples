// import Message from "./components/message";
// import styles from "./page.module.css";

// export default function Home() {
//   return <Message />;
// }

import ServerRendered from "./components/ServerRendered";
import ClientRendered from "./components/ClientRendered";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>🌍 SSR + CSR Hybrid Example (Next.js)</h1>
      <ServerRendered /> {/* SSR */}
      <ClientRendered /> {/* CSR */}
      <p style={{ marginTop: 30, color: "#555" }}>
        🔍 Yukarıda ilk kutu <b>Server-Side Rendering</b> ile oluşturuldu,
        ikinci kutu ise <b>Client-Side Rendering</b> ile.
      </p>
    </main>
  );
}
