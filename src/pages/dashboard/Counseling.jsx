import React, { useState } from 'react'

// Sample data for counselors
const counselors = [
  {
    id: 1,
    name: 'Dr. Emily Smith',
    specialization: 'Mental Health',
    availableSlots: ['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-hsfDCwN5NilN-54LLXVxFQWAMC1nuIyZW6qrW0MHWN38lpwaB_4NW8&s', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialization: 'Stress Management',
    availableSlots: ['9:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
    profilePicture: 'https://example.com/path/to/john-doe.jpg', // Replace with actual image URL
  },
];


const Counseling = () => {
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null)

  const handleBooking = () => {
  if (selectedCounselor && selectedSlot) {
    alert(`Appointment booked with ${selectedCounselor.name} at ${selectedSlot}`);
          // In a real app, you would send this data to a backend to save the booking
    setSelectedCounselor(null);
    setSelectedSlot(null);
  } else {
    alert(`Please select a counselor and a time slot`);
  }
};
  return (
    <div className=' main-container container mx-auto p-4  '>
      <h2 className='text-2xl font-bold mb-4'Counselor Available for Booking></h2>

            {/* Counselor List */}
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
  {counselors.map((counselor) =>(
    <div
    key={counselor.id}
    className={`p-4 border rounded-lg shadow-lg cursor-pointer ${
      selectedCounselor?.id === counselor.id ? 'bg-blue-100' : ''
    } `}
    onClick={() => setSelectedCounselor(counselor)}
    >
      <img
      src={counselor.profilePicture}
      alt={`${counselor.name}'s profile`}
      className='w-20 h-20 rounded-full mb-3 mx-auto mr-[50px]'/>
     <h3 className='text-lg font-semibold '>{counselor.name}</h3>
     <p className='text-gray-600'>{counselor.specialization}</p>


 </div>
  ))}
    </div>

          {/* Appointment Slots */}
{selectedCounselor && (
  <div>
    <h3 className='text-xl font-bold mb-2'>
      Select a time slot with {selectedCounselor.name}
</h3>
<div className='flex gap-4 mb-4'>
  {selectedCounselor.availableSlots.map((slot, index) => (
    <button
    key={index}
    onClick={() => setSelectedSlot(slot)}
    className={`p-2 rounded-lg border ${
      selectedSlot === slot ? 'bg-green-200' : 'bg-gray-100'
    }`}
    >
     {slot}
    </button>
  ))} 
  </div>
  <button
  onClick={handleBooking}
  className='bg-blue-500 text-white py-2 px-4 rounded-lg'
  >
    Book Appointment
    

  </button>
  </div>
)}
</div>
  );
};

export default Counseling