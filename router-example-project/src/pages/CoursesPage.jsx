import { Link, useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Bu kursu silmek istediğinizden emin misiniz?"
    );

    if (proceed) {
      submit(null, {
        method: "delete",
        action: `/kurslar/${id}`,
      });
    }
  };

  return (
    <>
      <h1>"Coruses Page"</h1>
      <div id="courses">
        <Link to={"/kurslar/yeni"}>Yeni Kurs Ekle</Link>
        <br />
        <br />
        {courses.map((item) => (
          <div className="card">
            <img src={`http://localhost:5000/images/${item.image}`} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <br />
              <Link to={"/kurslar/" + item.id}>Detay</Link>
              <Link to={item.id + "/edit"}>Edit</Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLodader() {
  const res = await fetch("http://localhost:5000/courses");
  return res.json();
}
