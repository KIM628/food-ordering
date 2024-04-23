'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState();
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userName }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData;
      data.set('file', files[0]);
      await fetch('/api/upload', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
  }

  if (status === 'loading') {
    return 'Loading...';
  }

  if (status === "unauthenticated") {
    return redirect('/login');
  }

  const userImage = session.data.user.image;

  return (
    <section className=" wrapper mt-4">
      <div className="UserP max-w-md mx-auto">
        <h1 className="text-center text-biege text-4xl my-4">
          User Profile
        </h1>
        {saved && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border-1 border-green-300 m-2">
            Profile Saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border-1 border-blue-300 m-2">
            Saving...
          </h2>
        )}
        <div className="flex gap-2 items-center">
          <div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className="rounded-lg shadow-biege/30 shadow-md"
                src={userImage} alt="avatar" width={80} height={80} />
              <label className="btn m-3 p-1 text-center">
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              className="inputP"
              type="text"
              placeholder="Full Name"
              value={userName}
              onChange={ev => setUserName(ev.target.value)}
            />
            <input
              className="inputP "
              type="email"
              value={session.data.user.email}
              disabled={true}
            />
            <input
              className="inputP "
              type="email" value={''} />
            <input
              className="inputP "
              type="email" value={''} />
            <button
              className="btn flex gap-4 justify-center py-2"
              type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}