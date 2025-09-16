import { redirect } from "react-router";

export async function courseFormAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  let url = "http://localhost:5000/courses";

  if (method === "PUT") {
    const courseid = params.courceId;
    url = url + "/" + courseid;
  }

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (response.ok) {
    return redirect("/kurslar");
  }
}
