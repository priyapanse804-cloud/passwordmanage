import React, { useEffect, useState } from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
 const [show, setShow] = useState(false);
 const [form,setForm]=useState({site:"",username:"",password:""})
 const[passwordArray,setPasswordArray]=useState([]);

 const getPassword=async()=>{
  let req=await fetch("http://localhost:3000/")

   const password = await req.json()
    setPasswordArray(password);
    console.log(password);
    
  
 }
useEffect(() => {
  getPassword()
  
}, []); 
 const savePass = async () => {

  const id = form.id || uuidv4();

  if (form.id) {
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: form.id })
    });
  }

  
  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...form,
      id
    })
  });

  toast("Save successfully", {
    position: "top-right",
    autoClose: 5000,
    theme: "light",
    transition: Bounce,
  });

   
  if (form.id) {
    setPasswordArray([
      ...passwordArray.filter(item => item.id !== form.id),
      { ...form, id }
    ]);
  } else {
    setPasswordArray([
      ...passwordArray,
      { ...form, id }
    ]);
  }

  setForm({
    site: "",
    username: "",
    password: ""
  });
};
 const deletePass=async(id)=>{
   
   toast(' Delete Successfully', {
 position: "top-right",
 autoClose: 5000,
 hideProgressBar: false,
 closeOnClick: false,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
 theme: "light",
 transition: Bounce,
 });
  console.log("delete",id);
  setPasswordArray(passwordArray.filter(item=>item.id!==id))
  let res= await fetch(`${import.meta.env.VITE_API_URL}`,{method:"DELETE",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id})
  })
  //localStorage.setItem("password",JSON.stringify(passwordArray.filter(item=>item.id!==id)))

 }
 const editPass=(id)=>{
  console.log(id);
  
 setForm({...passwordArray.filter(item=>item.id===id)[0],id:id})
 setPasswordArray(passwordArray.filter(item=>item.id!==id))
 }
 const handleChange=(e)=>{
   setForm({...form,[e.target.name]:e.target.value,})
 }
 const copytext=(text)=>{
  
   toast(' Copy to Clipboard', {
 position: "top-right",
 autoClose: 5000,
 hideProgressBar: false,
 closeOnClick: false,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
 theme: "light",
 transition: Bounce,
 });
  navigator.clipboard.writeText(text)
  
  
 }
    
 return (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-8">
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />

    <div className="mx-auto max-w-7xl">
      <div className="mb-8 rounded-3xl border border-green-100 bg-white/90 px-6 py-5 shadow-xl backdrop-blur">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900">
              <span className="text-green-600">&lt;</span> Pass
              <span className="text-green-600">OP /&gt;</span>
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Your personal password manager
            </p>
          </div>

          <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-green-200">
            Secure • Fast • Simple
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100 lg:col-span-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Add Password</h2>
            <p className="mt-1 text-sm text-gray-500">
              Store your credentials in a clean and organized way.
            </p>
          </div>

          <div className="space-y-4">
            <input
              value={form.site}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200"
              type="text"
              placeholder="Enter Website URL"
              name="site"
            />

            <input
              value={form.username}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200"
              type="text"
              placeholder="Enter Username"
              name="username"
            />

            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200"
                type={show ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-green-600"
              >
                <i
                  className={show ? "ri-eye-off-line text-lg" : "ri-eye-line text-lg"}
                  onClick={() => setShow(!show)}
                ></i>
              </button>
            </div>

            <button
              onClick={savePass}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.99]"
            >
              <i className="ri-add-line text-lg"></i>
              Add Password
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100 lg:col-span-8">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Passwords</h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage, copy, edit, or delete saved credentials.
              </p>
            </div>
          </div>

          {passwordArray.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center text-gray-500">
              No passwords to show
            </div>
          )}

          {passwordArray.length !== 0 && (
            <div className="min-w-[700px] w-full">
              <table className="w-full table-auto">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Site</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Username</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Password</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 bg-white">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index} className="transition hover:bg-green-50/70">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noreferrer"
                              className="max-w-[180px] truncate font-medium text-green-700 hover:underline"
                            >
                              {item.site}
                            </a>
                            <i
                              className="ri-file-copy-line cursor-pointer text-gray-500 transition hover:text-green-600"
                              onClick={() => copytext(item.site)}
                            ></i>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <span className="max-w-[140px] truncate text-gray-700">
                              {item.username}
                            </span>
                            <i
                              className="ri-file-copy-line cursor-pointer text-gray-500 transition hover:text-green-600"
                              onClick={() => copytext(item.username)}
                            ></i>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <span className="max-w-[140px] truncate text-gray-700">
                              {item.password}
                            </span>
                            <i
                              className="ri-file-copy-line cursor-pointer text-gray-500 transition hover:text-green-600"
                              onClick={() => copytext(item.password)}
                            ></i>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center justify-center gap-4 text-lg text-gray-600">
                            <i
                              onClick={() => editPass(item.id)}
                              className="ri-edit-2-line cursor-pointer transition hover:text-blue-600"
                            ></i>
                            <i
                              onClick={() => deletePass(item.id)}
                              className="ri-delete-bin-6-line cursor-pointer transition hover:text-red-600"
                            ></i>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
}

export default Manager
