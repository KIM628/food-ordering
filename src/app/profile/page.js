'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState('');
  const { status } = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, image }),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile Saved!',
      error: 'Error',
    });
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData;
      data.set('file', files[0]);

      const uploadPromise = fetch('/api/upload', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => {
        if (response.ok) {
          response.json().then(link => {
            setImage(link);
          });
        }
        throw new Error('Something went wrong');
      });
      await toast.promise(uploadPromise, {
        loading: 'Uploading...',
        success: 'Uploaded!',
        error: 'Error',
      });
    }
  }

  if (status === 'loading') {
    return 'Loading...';
  }

  if (status === "unauthenticated") {
    return redirect('/login');
  }


  return (
    <section className=" wrapper mt-4">
      <div className="UserP max-w-md mx-auto">
        <h1 className="text-center text-biege text-4xl my-4">
          User Profile
        </h1>
        <div className="flex gap-2 items-center">
          <div>
            <div className="p-4 flex flex-col items-center">
              {image && (
                <Image
                  className="rounded-lg shadow-biege/30 shadow-md"
                  src={image} alt="avatar" width={80} height={80} />
              )}
              <label className="btn m-3 p-1 text-center">
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>

            <div>

              <input
                className="inputP
                mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0
                "
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
                type="text"
                placeholder="Address"
                value={''} />
              <input
                className="inputP "
                type="text"
                placeholder="Phone Number"
                value={''} />
              <input
                className="inputP "
                type="text"
                placeholder="City"
                value={''} />
              <input
                className="inputP "
                type="text"
                placeholder="Postal Code"
                value={''} />
            </div>











            <button
              className="btn flex gap-4 justify-center py-2
              hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105
              "
              type="submit">
              Save
            </button>
          </form>
        </div>

        {/* testing */}


      </div>
    </section>
  );
}