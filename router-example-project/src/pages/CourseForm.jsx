import { use } from "react";
import { Form, useActionData } from "react-router-dom";

export default function CourseCreatePage({ method, data }) {
  const errors = useActionData();
  return (
    <>
      <Form method={method}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={data ? data.title : ""}
          />
          <p>{errors && errors.title && <span>{errors.title}</span>}</p>
        </div>
        <div>
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={data ? data.image : ""}
          />
          <p>{errors && errors.image && <span>{errors.image}</span>}</p>
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            rows={5}
            defaultValue={data ? data.description : ""}
          ></textarea>
          <p>
            {errors && errors.description && <span>{errors.description}</span>}
          </p>
        </div>
        <button type="submit">Submit </button>
      </Form>
    </>
  );
}
