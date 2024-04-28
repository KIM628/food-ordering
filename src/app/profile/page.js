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
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const { status } = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setPhone(data.phone);
          setAddress(data.address);
          setCity(data.city);
          setPostal(data.postal);
        });
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userName,
          image,
          address,
          phone,
          postal,
          city
        }),
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
        <div className="flex gap-2">
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
          <form className="grow m-3" onSubmit={handleProfileInfoUpdate}>

            <label>
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={userName}
              onChange={ev => setUserName(ev.target.value)}
            />
            <label>
              Email
            </label>
            <input
              type="email"
              value={session.data.user.email}
              disabled={true}
            />
            <label>
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              onChange={ev => setAddress(ev.target.value)}
              value={address} />
            <label>
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              onChange={ev => setPhone(ev.target.value)}
              value={phone} />

            <div className="flex gap-2">
              <div>
                <label>
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  onChange={ev => setCity(ev.target.value)}
                  value={city} />
              </div>
              <div>
                <label>
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  onChange={ev => setPostal(ev.target.value)}
                  value={postal} />
              </div>
            </div>
            <button
              className="bg-Lsalmon w-9/12 rounded-lg items-center
            text-white font-medium text-base flex gap-4 justify-center py-2
              hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
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