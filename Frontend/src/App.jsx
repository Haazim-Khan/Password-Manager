import { useEffect, useState } from "react";
import axios from "axios";
import Manager from "./components/Manager";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [passwords, setPasswords] = useState([]);
  const [editData, setEditData] = useState(null);

  const editPass = async (item) => {
    setEditData(item);
    await axios.delete(`http://localhost:3000/delete/${item.id}`);
    setPasswords((prev) => prev.filter((p) => p.id !== item.id));
  };

  const copyPassword = (password) => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  const deletePass = async (id) => {
    await axios.delete(`http://localhost:3000/delete/${id}`);
    setPasswords((prevPasswords) => prevPasswords.filter((p) => p.id !== id));
  };

  useEffect(() => {
    async function getInfo() {
      const res = await axios.get("http://localhost:3000/info");
      setPasswords(res.data);
    }
    getInfo();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Manager passwords={passwords} editData={editData} />
      </main>

      <div className="w-full max-w-6xl mx-auto mt-10 px-4">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-sm md:text-base">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="p-4 text-left">Site</th>
                  <th className="p-4 text-left">Username</th>
                  <th className="p-4 text-left">Password</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {passwords.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center p-6 text-gray-500">
                      No passwords saved yet 🔐
                    </td>
                  </tr>
                ) : (
                  passwords.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{item.site}</td>

                      <td className="p-4">{item.username}</td>

                      <td className="p-4">
                        {"*".repeat(item.password.length)}
                      </td>

                      <td className="p-4 flex gap-2 justify-center">
                        <button
                          onClick={() => copyPassword(item.password)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Copy
                        </button>

                        <button
                          onClick={() => editPass(item)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deletePass(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
