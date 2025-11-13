// app/components/ServerRendered.js

// Bu bir server component — "use client" yok
// Yani sadece sunucuda render edilir.

export default async function ServerRendered() {
  const time = new Date().toLocaleTimeString();

  // API'den veri çekmek gibi işlemler burada yapılabilir
  // örn: await fetch("https://api.example.com/data")

  return (
    <div
      style={{ padding: "10px", border: "2px solid green", borderRadius: 10 }}
    >
      <h3>🧠 Server-Side Component</h3>
      <p>Rendered on server at: {time}</p>
      <p>
        Bu içerik sayfa isteği geldiğinde <b>sunucuda</b> oluşturulur ve HTML
        olarak tarayıcıya gönderilir.
      </p>
    </div>
  );
}
