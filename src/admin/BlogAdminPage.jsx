import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import BlogForm from "./BlogForm";

const BlogAdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    const snapshot = await getDocs(collection(db, "blogPosts"));
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleAdd = async (post) => {
    await addDoc(collection(db, "blogPosts"), {
      ...post,
      createdAt: serverTimestamp(),
    });
    fetchPosts();
  };

  const handleUpdate = async (id, updatedPost) => {
    const ref = doc(db, "blogPosts", id);
    await updateDoc(ref, updatedPost);
    setEditingPost(null);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogPosts", id));
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog Admin</h1>

      <BlogForm
        onSubmit={
          editingPost ? (data) => handleUpdate(editingPost.id, data) : handleAdd
        }
        initialData={editingPost}
        onCancel={() => setEditingPost(null)}
      />

      <hr className="my-6" />

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.author}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => setEditingPost(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogAdminPage;
