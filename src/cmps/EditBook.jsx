import React from "react";
import { useForm } from "../services/customHooks";

function EditBook() {
  const [form, handleFormChange, setForm] = useForm({ name: "", vendor: "" });

  return (
    <section className="edit-popup">
      <form>
        <img className="thumbnail" src={book.thumbnail} />
        <input
          type="text"
          onChange={handleFormChange}
          value={form.title}
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          onChange={handleFormChange}
          value={form.description}
          placeholder="Description"
          name="description"
        />
        <input
          type="text"
          onChange={handleFormChange}
          value={form.subtitle}
          placeholder="Subtitle"
          name="subtitle"
        />
      </form>
    </section>
  );
}

export default editBook;
