
import React, { useState } from 'react';
import  {RadioGroup}  from '@radix-ui/themes';
import axios from 'axios';

const Selfassessment = () => {
    const [responses, setResponses] = useState({
        anhedonia: null,
        depressedMood: null,
        sleepIssues: null,
        fatigue: null,
        appetite: null,
        selfFailure: null,
        concentration: null,
        movement: null,
        suicidalThoughts: null
    });

    const [score, setScore] = useState(null);
    const [severity, setSeverity] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [type, setType] = useState('');

    const questions = [
        { id: 'anhedonia', text: 'Little interest or pleasure in doing things', category: 'Mood and Enjoyment' },
        { id: 'depressedMood', text: 'Feeling down, depressed, or hopeless', category: 'Emotional State' },
        { id: 'sleepIssues', text: 'Trouble falling or staying asleep, or sleeping too much', category: 'Sleep Patterns' },
        { id: 'fatigue', text: 'Feeling tired or having little energy', category: 'Energy Levels' },
        { id: 'appetite', text: 'Poor appetite or overeating', category: 'Eating Habits' },
        { id: 'selfFailure', text: 'Feeling bad about yourself or that you are a failure', category: 'Self-Perception' },
        { id: 'concentration', text: 'Trouble concentrating on things, such as reading or watching TV', category: 'Cognitive Function' },
        { id: 'movement', text: 'Moving or speaking slowly, or being fidgety', category: 'Motor Activity' },
        { id: 'suicidalThoughts', text: 'Thoughts of self-harm or death', category: 'Suicide Risk' }
    ];

    const responseOptions = [
        { value: 0, label: 'Not at all' },
        { value: 1, label: 'Several days' },
        { value: 2, label: 'More than half the days' },
        { value: 3, label: 'Nearly every day' }
    ];

    const handleResponseChange = (questionId, value) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: parseInt(value,10)
        }));
    };

    const calculateScore = async () => {
        setIsLoading(true);
        setSubmissionMessage('');

        const score = Object.values(responses).reduce((sum, response) => (response !== null ? sum + response : sum), 0);
        setScore(score);

        let calculatedSeverity = '';
        if (score <= 4) calculatedSeverity = 'Minimal Depression';
        else if (score <= 9) calculatedSeverity = 'Mild Depression';
        else if (score <= 14) calculatedSeverity = 'Moderate Depression';
        else if (score <= 19) calculatedSeverity = 'Moderately Severe Depression';
        else calculatedSeverity = 'Severe Depression';

        setSeverity(calculatedSeverity);

        const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        const assessmentType = "Assessment";
       setType(assessmentType);
        const assessmentData = {
            responses,
            score: score,
            severity: calculatedSeverity,
            date: currentDate,
            type: assessmentType,
        };
        try {
            const response = await axios.post('https://mental-health-api-ur3r.onrender.com/assessments', assessmentData);
            
            setSubmissionMessage('Assessment submitted successfully!');
        } catch (error) {
            console.error('Failed to submit assessment:', error);
            setSubmissionMessage('Error submitting assessment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const isFormComplete = () => {
        return Object.values(responses).every((response) => response !== null);
    };

    return (
        <div className="max-w-2xl  mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">PHQ-9 Depression Screening</h2>
            <p className="text-sm text-gray-600 mb-4">
                Over the last 2 weeks, how often have you been bothered by any of the following problems?
            </p>
            {questions.map((question) => (
                <div key={question.id} className="mb-6 p-4 bg-gray-50 rounded-md">
                    <h3 className="text-md font-semibold mb-2 text-gray-700">{question.text}</h3>
                    <p className="text-xs text-gray-500 mb-2">Category: {question.category}</p>

                    <RadioGroup.Root

                        value={responses[question.id] !== null ? responses[question.id].toString() : ''}
                        onValueChange={(value) => handleResponseChange(question.id, value)}
                        className="flex flex-wrap gap-2"
                    >
                        {responseOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroup.Item
                                    value={option.value.toString()}
                                    id={`${question.id}-${option.value}`}
                                    className="h-4 w-4 border border-gray-400 rounded-full"
                                />
                                <label htmlFor={`${question.id}-${option.value}`} className="text-sm text-gray-700">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </RadioGroup.Root>
                    
                </div>
            ))}

            <button
                onClick={calculateScore}
                disabled={!isFormComplete()}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            >
                {isLoading ? 'Submitting...' : 'Calculate Depression Score'}
                </button>

            {score !== null && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                    <h3 className="text-lg font-bold text-blue-800">Screening Results</h3>
                    <p className="text-md font-semibold mt-2">Total Score: {score}</p>
                    <p
                        className={`font-bold mt-2 ${severity === 'Minimal Depression'
                                ? 'text-green-600'
                                : severity === 'Mild Depression'
                                    ? 'text-yellow-600'
                                    : severity === 'Moderate Depression'
                                        ? 'text-orange-600'
                                        : severity === 'Moderately Severe Depression'
                                            ? 'text-red-600'
                                            : 'text-red-800'
                            }`}
                    >
                        severity: {severity}
                    </p>
                    {type && <p> Type: {type} </p>}
                    <p className="text-sm text-gray-700 mt-2">
                        Note: This is a screening tool. Please consult a mental health professional for a comprehensive
                        evaluation.
                    </p>
                </div>
            )}
            {submissionMessage && (
                <div className="mt-4 p-4 text-center text-white bg-blue-600 rounded">
                    {submissionMessage}
                </div>
            )}
        </div>
    );
};

export default Selfassessment;
