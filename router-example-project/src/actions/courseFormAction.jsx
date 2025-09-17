import { redirect } from "react-router";
import { isRequiredCheck, isValidImage } from "../utils/validation";

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

  // const errors = {};

  // if (!isRequiredCheck(data.get("title"))) {
  //   errors.title = "Title is required";
  // }

  // if (!isValidImage(data.get("image"))) {
  //   errors.image = "Valid image is required";
  // }

  // if (!isRequiredCheck(data.get("description"))) {
  //   errors.description = "Description is required";
  // }

  // if (Object.keys(errors).length > 0) {
  //   console.log(errors);
  //   return errors;
  // }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (response.status === 403) {
    console.log(response);
    return response;
  }

  if (response.ok) {
    return redirect("/kurslar");
  }
}
