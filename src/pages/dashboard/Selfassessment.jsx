import React, { useState } from 'react'



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

    const [totalScore, setTotalScore] = useState(null);
    const [severity, setSeverity] = useState(null);

    const questions =[
        {
        id: 'anhedonia',
        text: 'little interest or pleasure in doing things',
        category: 'Mood and Enjoyment'
    },
    {
        id: 'depressedMood',
        text: 'Feeling down, depressed, or hopeless',
        category: 'Emotional State'
    },
    {
        id: 'sleepIssues',
        text: 'Trouble falling or staying asleep, or sleep too much',
        category: 'Sleep patterns'
    }
    ]
  return (
    <div>Selfassessment</div>
  )
}

export default Selfassessment