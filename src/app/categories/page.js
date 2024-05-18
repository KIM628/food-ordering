'use client';
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {

  const [newCategoryName, setNewCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      });
    });
  }, []);

  async function handleNewCategorySubmit(ev) {
    ev.preventDefault();
    const creationPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCategoryName })
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(creationPromise, {
      loading: 'Creating your new category...',
      success: 'Category created',
      error: 'Error, sorry...',
    });
  }

  if (profileLoading) {
    return 'Loading user info...';
  }

  if (!profileData.admin) {
    return 'Not an admin';
  }
  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <form
        className="mt-8"
        onSubmit={handleNewCategorySubmit}
      >
        <div className="gap-2 items-end">
          <div className="grow">
            <label>New category name</label>
            <input
              type="text"
              value={newCategoryName}
              onChange={ev => setNewCategoryName(ev.target.value)}
            />
          </div>
          <div className="pb-2">
            <button
              className="w-9/12 rounded-lg items-center
            font-medium text-base flex gap-4 justify-center py-2
            hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="text-biege mt-8 text-sm">Edit Category : </h2>
        {categories?.length > 0 && categories.map(c => (
          <>
            {/* change div to button */}
            <div className="bg-gray-200 rounded-xl p-2 px-4 flex gap-1 cursor-pointer mb-2">
              <span>
                {c.name}
              </span>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}