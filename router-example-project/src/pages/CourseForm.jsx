import { Form } from "react-router-dom";

export default function CourseCreatePage({ method, data }) {
  return (
    <>
      <Form method={method}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={data ? data.title : ""}
          />
        </div>
        <div>
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            id="image"
            name="image"
            required
            defaultValue={data ? data.image : ""}
          />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            rows={5}
            required
            defaultValue={data ? data.description : ""}
          ></textarea>
        </div>
        <button type="submit">Submit </button>
      </Form>
    </>
  );
}
