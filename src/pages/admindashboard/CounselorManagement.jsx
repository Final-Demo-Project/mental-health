import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';


// Placeholder API base URL
const API_BASE_URL = "https://mental-health-api-ur3r.onrender.com/";



const CounselorManagement = () => {

    const [applications, setApplications] = useState([]);
    const [counselors, setCounselors] = useState([]);
    const [selectedCounselor, setSelectedCounselor] = useState(null);

      // Fetch counselor applications
useEffect(() => {
    // const fetchApplications = async () => {
    //     try {

    //     }
    // }
}, []);

// Define Availability function
const changeAvailabilityStatus = async (id, newAvailability) => {
  try {
      // Make an API call to update the counselor's availability
      await axios.patch(`${API_BASE_URL}counselors/${id}`, { availability: newAvailability });

      // Update the counselors state after the change
      setCounselors(prevCounselors =>
          prevCounselors.map(counselor =>
              counselor.id === id ? { ...counselor, availability: newAvailability } : counselor
          )
      );
  } catch (error) {
      console.error("Error updating counselor's availability:", error);
  }
};
  return (
    <div className="counselor-management p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Counselor Management</h2>

    {/* Counselor Applications */}
    <section className="applications mb-8">
      <h3 className="text-xl font-semibold mb-2">Pending Applications</h3>
      {applications.length > 0 ? (
        <ul>
          {applications.map(app => (
            <li key={app.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2">
              <span>{app.name} - {app.specialization}</span>
              <div>
                <button
                  onClick={() => handleApplicationDecision(app.id, 'approved')}
                  className="bg-green-500 text-white py-1 px-3 mr-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => changeAvailabilityStatus(app.id, 'rejected')}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending applications.</p>
      )}
    </section>

    {/* Manage Counselor Profiles */}
    <section className="counselor-profiles mb-8">
      <h3 className="text-xl font-semibold mb-2">Counselor Profiles</h3>
      <ul>
        {counselors.map(counselor => (
          <li key={counselor.id} className="p-4 bg-gray-100 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">{counselor.name}</span>
              <span>{counselor.specialization}</span>
              <span>Availability: {counselor.availability ? 'Available' : 'Unavailable'}</span>
              <button
                onClick={() => changeAvailabilityStatus(counselor.id, !counselor.availability)}
                className={`py-1 px-3 ${counselor.availability ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}
              >
                {counselor.availability ? 'Set Unavailable' : 'Set Available'}
              </button>
            </div>
            <button
              onClick={() => setSelectedCounselor(counselor)}
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
            >
              Edit Profile
            </button>
          </li>
        ))}
      </ul>
    </section>

    {/* Selected Counselor Profile Edit Form */}
    {selectedCounselor && (
      <section className="edit-profile mb-8">
        <h3 className="text-xl font-semibold mb-2">Edit Profile for {selectedCounselor.name}</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            const updatedData = {
              specialization: e.target.specialization.value,
            };
            updateCounselorProfile(selectedCounselor.id, updatedData);
            setSelectedCounselor(null);
          }}
        >
          <label className="block mb-2">
            Specialization:
            <input
              type="text"
              name="specialization"
              defaultValue={selectedCounselor.specialization}
              className="w-full p-2 border rounded"
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded">Save</button>
        </form>
      </section>
    )}
    {/* <ToastContainer/> */}
  </div>
);
};


export default CounselorManagement