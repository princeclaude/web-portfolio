// src/components/BlogForm.jsx
import { useEffect, useState } from "react";

const empty = { title: "", author: "", coverImage: "", content: "" };

export default function BlogForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(initialData || empty);
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim())
      return alert("Title & content required");
    onSubmit(form);
    if (!initialData) setForm(empty); // clear when adding
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author"
        className="w-full p-2 border rounded"
      />
      <input
        name="coverImage"
        value={form.coverImage}
        onChange={handleChange}
        placeholder="Cover‑image URL (optional)"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="content"
        rows="6"
        value={form.content}
        onChange={handleChange}
        placeholder="Blog post content…"
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {initialData ? "Update" : "Add Post"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    
    </form>
  );
}
