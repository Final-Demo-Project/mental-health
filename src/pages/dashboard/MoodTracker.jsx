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

  // Load mood history from API
  useEffect(() => {
    const fetchMoodHistory = async () => {
      try {
        const response = await fetch('https://mental-health-api-ur3r.onrender.com/moods');
        const data = await response.json();
        setMoodHistory(data);
      } catch (error) {
        console.error('Error fetching mood history:', error);
      }
    };

    fetchMoodHistory();
  }, []);

  const handleMoodSelect = async (selectedMoodIndex) => {
    const moodDescriptions = ["Sad", "Anxious", "Neutral", "Relieved", "Happy"]; // Map mood index to descriptions
    const selectedMood = moodDescriptions[selectedMoodIndex - 1];
    const today = new Date().toLocaleDateString('en-US');
    const newEntry = { date: today, mood: selectedMood };

    console.log('Sending data:', JSON.stringify(newEntry));

    try {
      // Save new mood entry to the API
      const response = await fetch('https://mental-health-api-ur3r.onrender.com/moods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
      if (response.ok) {
        setMood(selectedMood);
        setMoodHistory([...moodHistory.filter(entry => entry.date !== today), newEntry]);
      } else {
        const errorData = await response.json();
        console.error('Failed to save mood entry:', errorData);
      }
    } catch (error) {
      console.error('Error saving mood entry:', error);
    }
  };

  const getMoodInterpretation = () => {
    if (moodHistory.length === 0) return 'No data available. Start tracking your mood';

    const moodDescriptions = ["Sad", "Anxious", "Neutral", "Relieved", "Happy"];
    const moodNumericValues = moodHistory.map(entry => moodDescriptions.indexOf(entry.mood) + 1);

    const averageMood = moodNumericValues.reduce((sum, moodValue) => sum + moodValue, 0) / moodNumericValues.length;
    const lowMoodStreak = moodNumericValues.reduce((streak, moodValue) => moodValue <= 2 ? streak + 1 : 0, 0);
    if (averageMood <= 2) {
      return 'Your average mood is low. Consider taking time for self-care or talking to a mental health professional if this persists.';
    } else if (lowMoodStreak >= 5) {
      return 'You have had several consecutive days of low moods. Reaching out for support could be beneficial.';
    } else {
      return 'Your mood seems generally balanced. Keep tracking to notice any patterns over time.';
    }
  };

  const chartData = {
    labels: moodHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Mood Score Over Time',
        data: moodHistory.map(entry => ["Sad", "Anxious", "Neutral", "Relieved", "Happy"].indexOf(entry.mood) + 1),
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
             const moodEmojis = ["😞 Sad", "😕 Anxious", "😐 Neutral", "😊 Relieved", "😄 Happy"];
            // const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];
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
            const moodEmojis = ["😞 Sad", "😕 Anxious", "😐 Neutral", "😊 Relieved", "😄 Happy"];

            // const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];
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

  const moodEmojis = ["😞 Sad", "😕 Anxious", "😐 Neutral", "😊 Relieved", "😄 Happy"];

  // const moodEmojis = ["😞", "😕", "😐", "😊", "😄"];

  return (
    <div className="flex flex-col w-80%  mx-auto p-6 bg-white rounded-lg shadow-lg h-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Daily Mood Tracker
      </h2>

      <div className="flex justify-around mb-8 gap-4">
        {moodEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(index + 1)}
            className={`text-3xl p-3 rounded-full transition-transform hover:scale-110 
              ${mood === emoji ? 'bg-blue-100 transform scale-110' : 'bg-gray-50'}`}
            aria-label={`Select mood ${emoji}`}
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

      <div className="h-96 mb-4 bg-gray-50 rounded-md shadow-inner p-4">
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
        <div className="mt-4 text-xl text-gray-600 text-center">
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