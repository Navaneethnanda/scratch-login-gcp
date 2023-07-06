import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

  const navigate=useNavigate();

  const [name,setName]=useState("");
  const [status, setStatus] = useState(false);
const [statusList,setStatusList]=useState([]);


  useEffect(()=>{
    const tstatus=localStorage.getItem('status');
    const temail=localStorage.getItem('email');
    if(temail===""){
      navigate("/login")
    }
    setName(temail)
    setStatus(tstatus)
  },[navigate]);


  useEffect(()=>{
    axios
    .post('https://containerthree-2rozri44gq-uc.a.run.app/list', {})
    .then((response) => {
      setStatusList(response.data);
      }
    )
    .catch((error) => {
      console.error('Login failed:', error);
    });



  },[]);



  const handleLogout = () => {
    axios
      .post('https://containerthree-2rozri44gq-uc.a.run.app/logout', {email:name})
      .then((response) => {
        if(response.data==="logout success"){
        localStorage.setItem('email', "");
        localStorage.setItem("status",false);
        navigate("/login");

        alert("logout sucess")
        }
        else{
          alert(response.data);
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-3xl font-bold mb-3 ml-4">User List</h1>
      <div className="flex items-center mb-4  ml-4">
        <div
          className={`w-6 h-6 rounded-full ${
            status? 'bg-green-500' : 'bg-red-500'
          } mr-2`}
        ></div>
        <span className="text-2xl">
          Current user's email: {name} ({status? 'Online' : 'Offline'})
        </span>
      </div>
      <div className="overflow-y-scroll max-h-[45vh]">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">Status</th>
              <th className="py-2">Name</th>
            </tr>
          </thead>


          <tbody>
          {statusList.map((user) => (
            <tr key={user.email} className="border-b border-gray-300">
              <td className="py-2 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full ${
                    user.status==="online" ? 'bg-green-500' : 'bg-red-500'
                  } mr-2 `}
                ></div>
                {user.status==="online"? 'Online' : 'Offline'}
              </td>
              <td className="py-2 text-center">{user.name}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      <button
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
