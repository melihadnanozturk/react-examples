import { redirect } from "react-router";

export async function deleteCourseAction({ params, request }) {
  if (request.method !== "DELETE") {
    return null;
  }

  const response = await fetch(
    `http://localhost:5000/courses/${params.courceId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Could not delete course!");
  }

  return redirect("/kurslar");
}
