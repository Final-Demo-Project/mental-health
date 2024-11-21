import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../pages/services/config';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setProfile(data);
            } catch (error) {
                console.error( "Error fetching profile:", error);
                toast.error("Failed to load profile data");
            } finally {
                setloading(false);
            }
        };

        fetchProfile();

    },[]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!profile) {
        return <p>Profile data not available</p>;
    }
  return (
    <div className='profile-container'>
        <h1 className='text-2xl font-bold'>Profile</h1>
<div className='profile-details'>
    <p><strong>Name:</strong> {profile.fullName}</p>
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Role:</strong> {profile.role}</p>
    {/* {Profile.profilePicture && <img src = {profile.profilePicture} alt ='Profile'/>} */}
</div>
{/* <ToastContainer/> */}
    </div>
  )
}

export default Profile