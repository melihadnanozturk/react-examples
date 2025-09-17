import { use } from "react";
import { Form, useActionData } from "react-router-dom";

export default function CourseCreatePage({ method, data }) {
  const results = useActionData();
  console.log("!!!! RESULTS", results);
  return (
    <>
      <Form method={method}>
        {results && results.errors && (
          <ul className="errors">
            {Object.values(results.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={data ? data.title : ""}
          />
          <p>{results && results.title && <span>{results.title}</span>}</p>
        </div>
        <div>
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={data ? data.image : ""}
          />
          <p>{results && results.image && <span>{results.image}</span>}</p>
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            rows={5}
            defaultValue={data ? data.description : ""}
          ></textarea>
          <p>
            {results && results.description && (
              <span>{results.description}</span>
            )}
          </p>
        </div>
        <button type="submit">Submit </button>
      </Form>
    </>
  );
}
