// Disease Reference — lists diseases and their symptoms
var diseaseReference = [
    {
        disease: 'Common Cold',
        symptoms: ['Runny nose', 'Sneezing', 'Sore throat', 'Mild cough', 'Low-grade fever']
    },
    {
        disease: 'Influenza (Flu)',
        symptoms: ['High fever', 'Body aches', 'Chills', 'Fatigue', 'Headache', 'Dry cough']
    },
    {
        disease: 'Strep Throat',
        symptoms: ['Severe sore throat', 'Painful swallowing', 'Red swollen tonsils', 'Fever', 'Headache']
    },
    {
        disease: 'Allergic Reaction',
        symptoms: ['Skin rash', 'Itching', 'Swelling', 'Watery eyes', 'Sneezing', 'Hives']
    },
    {
        disease: 'Migraine',
        symptoms: ['Intense headache', 'Nausea', 'Sensitivity to light', 'Sensitivity to sound', 'Visual aura']
    },
    {
        disease: 'Bacterial Infection',
        symptoms: ['High fever', 'Localized pain', 'Swelling', 'Redness', 'Pus or discharge', 'Fatigue']
    }
];

// Pill Guide — lists pills and the diseases they treat
var pillGuide = [
    {
        pill: 'ColdAway',
        color: '#87CEEB',
        treats: 'Common Cold',
        description: 'Relieves cold symptoms including congestion, sore throat, and mild fever.'
    },
    {
        pill: 'FluGuard',
        color: '#FF6B6B',
        treats: 'Influenza (Flu)',
        description: 'Antiviral medication that reduces flu duration and severity.'
    },
    {
        pill: 'StrepCure',
        color: '#98D8C8',
        treats: 'Strep Throat',
        description: 'Antibiotic that targets streptococcal bacteria in the throat.'
    },
    {
        pill: 'AllergiX',
        color: '#DDA0DD',
        treats: 'Allergic Reaction',
        description: 'Antihistamine that blocks allergic responses and reduces inflammation.'
    },
    {
        pill: 'MigraRelief',
        color: '#FFD700',
        treats: 'Migraine',
        description: 'Targets migraine pain, nausea, and light sensitivity.'
    },
    {
        pill: 'BactaShield',
        color: '#FFA07A',
        treats: 'Bacterial Infection',
        description: 'Broad-spectrum antibiotic for treating bacterial infections.'
    }
];

// Patient scenarios
var medicalQuestions = [
    {
        patientName: 'Sarah Mitchell',
        age: 28,
        symptoms: ['Congestion and runny nose', 'Tickle in throat', 'Forehead feels a bit warm', 'Occasional sneezes'],
        correctPill: 'ColdAway'
    },
    {
        patientName: 'James Cooper',
        age: 45,
        symptoms: ['Burning up with temperature of 103F', 'Exhaustion', 'Muscles ache everywhere', 'Shivering', 'Hacking cough but no phlegm'],
        correctPill: 'FluGuard'
    },
    {
        patientName: 'Emily Zhang',
        age: 12,
        symptoms: ['Throat feels like it\'s on fire', 'Can barely drink water', 'White spots on extremely red tonsils', 'Hot to the touch'],
        correctPill: 'StrepCure'
    },
    {
        patientName: 'David Thornton',
        age: 34,
        symptoms: ['Red itchy patches all over arms', 'Eyes won\'t stop watering', 'Face looks puffy', 'Uncontrollable sneezing'],
        correctPill: 'AllergiX'
    },
    {
        patientName: 'Linda Park',
        age: 39,
        symptoms: ['Head splitting apart', 'Seeing zigzag flashing lights', 'Can\'t stand loud noises', 'Feeling very sick to stomach'],
        correctPill: 'MigraRelief'
    },
    {
        patientName: 'Carlos Rivera',
        age: 52,
        symptoms: ['Deep cut is red and warm to touch', 'Oozing yellowish fluid', 'Sharp pain in one specific area', 'Feeling incredibly drained and feverish'],
        correctPill: 'BactaShield'
    },
    {
        patientName: 'Anna Kowalski',
        age: 22,
        symptoms: ['Stuffy nose', 'Slightly elevated temperature', 'Throat scratchiness', 'Coughing gently'],
        correctPill: 'ColdAway'
    },
    {
        patientName: 'Michael Warren',
        age: 61,
        symptoms: ['Can hardly keep eyes open', 'Whole body hurts', 'Head is throbbing', 'Freezing cold then sweating'],
        correctPill: 'FluGuard'
    },
    {
        patientName: 'Jessica Ortega',
        age: 17,
        symptoms: ['Swallowing feels like swallowing glass', 'Head pounding', 'Sweating with fever', 'Tonsils look enormous'],
        correctPill: 'StrepCure'
    },
    {
        patientName: 'Robert Chen',
        age: 48,
        symptoms: ['Sudden breakout of itchy welts', 'Scratchy skin', 'Tearing up constantly', 'Sneezing fits'],
        correctPill: 'AllergiX'
    },
    {
        patientName: 'Grace Nakamura',
        age: 31,
        symptoms: ['Intense throbbing on right side of head', 'Need to lay down in a pitch-black room', 'Naseous feeling', 'Regular lights physically hurt eyes'],
        correctPill: 'MigraRelief'
    },
    {
        patientName: 'Thomas Williams',
        age: 56,
        symptoms: ['Wounded area is swollen significantly', 'Thick discharge visible', 'Spiked a high temperature', 'Severe lethargy'],
        correctPill: 'BactaShield'
    }
];
