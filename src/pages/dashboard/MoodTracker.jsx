import React, { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MoodTracker = () => {
  const [mood, setMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const chartRef = useRef(null);

  // Load mood history from localStorage
  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setMoodHistory(savedMoods);

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const handleMoodSelect = (selectedMood) => {
    const today = new Date().toLocaleDateString();
    const newEntry = { date: today, mood: selectedMood };

    const updatedMoodHistory = [
      ...moodHistory.filter(entry => entry.date !== today),
      newEntry
    ];

    setMoodHistory(updatedMoodHistory);
    setMood(selectedMood);
    localStorage.setItem('moodHistory', JSON.stringify(updatedMoodHistory));
  };

  
    // Function to analyze mood data for interpretation
   const getMoodInterpretation = () => {
    if (moodHistory.length === 0) return 'No data available. Start tracking your mood';

    const averageMood = moodHistory.reduce((sum, entry) => sum + entry.mood, 0) / moodHistory.length;
    const lowMoodStreak = moodHistory.reduce((streak, entry) => entry.mood <= 2 ? streak + 1 : 0, 0);

    if (averageMood <= 2) {
      return 'Your average mood is low. This might indicate a period of prolonged negative emotions. Consider taking time for self-care or talking to a mental health professional if this persists.';
} else if (lowMoodStreak >= 5) {
  return 'You have had several consecutive days of low moods. Extented period of low mood can sometimes signal emotional distress. Reaching out for support could be beneficial.';
  } else {
  return 'Your mood seems generally balanced. Keep tracking to notice any patterns over time.';
};
   }
  const chartData = {
    labels: moodHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Mood Score Over Time',
        data: moodHistory.map(entry => entry.mood),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Mood History',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];
            return `Mood: ${moodEmojis[context.raw - 1]} (${context.raw})`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value) => {
            const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];
            return value > 0 && value <= 5 ? moodEmojis[value - 1] : '';
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];

  return (
    <div  className=" flex flex-col w-full mood-tracker mx-auto p-6 bg-white rounded-lg shadow-lg h-[100vh] ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Daily Mood Tracker
      </h2>

      <div className="flex justify-around mb-8 gap-4">
        {moodEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(index + 1)}
            className={`text-3xl p-3 rounded-full transition-transform hover:scale-110 
              ${mood === index + 1 ? 'bg-blue-100 transform scale-110' : 'bg-gray-50'}`}
            aria-label={`Select mood ${index + 1}`}
          >
            {emoji}
          </button>
        ))}
      </div>

      <p className="text-center mb-8 text-lg">
        {mood 
          ? `Today's Mood: ${moodEmojis[mood - 1]}` 
          : 'Select your mood for today'}
      </p>

      <div className="h-96 mb-4 bg-gray-50 rounded-md shadow-inner">
        {moodHistory.length > 0 ? (
          <Line
            ref={chartRef}
            data={chartData}
            options={chartOptions}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Start logging your mood to see trends!
          </div>
        )}
      </div>

      {moodHistory.length > 0 && (
        <div className="mt-4 text-xl text-gray-600 text-center ">
          {`You've logged your mood ${moodHistory.length} time${moodHistory.length === 1 ? '' : 's'}`}
        </div>
      )}
      <div className="mt-6 text-lg text-center text-gray-700">
        <strong>Interpretation:</strong> {getMoodInterpretation()}
      </div>
    </div>
  );
};

export default MoodTracker;