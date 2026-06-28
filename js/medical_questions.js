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

var pillGuide = [
    {
        pill: 'Sudafed',
        color: '#87CEEB',
        treats: 'Common Cold',
        description: 'Pseudoephedrine-based decongestant that relieves nasal congestion, sinus pressure, and cold symptoms.'
    },
    {
        pill: 'Tamiflu',
        color: '#FF6B6B',
        treats: 'Influenza (Flu)',
        description: 'Oseltamivir-based antiviral that reduces flu duration and severity when taken early.'
    },
    {
        pill: 'Amoxicillin',
        color: '#98D8C8',
        treats: 'Strep Throat',
        description: 'Penicillin-type antibiotic commonly prescribed to treat streptococcal bacterial infections of the throat.'
    },
    {
        pill: 'Zyrtec',
        color: '#DDA0DD',
        treats: 'Allergic Reaction',
        description: 'Cetirizine-based antihistamine that blocks allergic responses including hives, itching, and sneezing.'
    },
    {
        pill: 'Imitrex',
        color: '#FFD700',
        treats: 'Migraine',
        description: 'Sumatriptan-based triptan medication that targets migraine pain, nausea, and light sensitivity.'
    },
    {
        pill: 'Augmentin',
        color: '#FFA07A',
        treats: 'Bacterial Infection',
        description: 'Amoxicillin-clavulanate broad-spectrum antibiotic for treating bacterial infections and preventing resistance.'
    }
];

var medicalQuestions = [
    {
        patientName: 'Sarah Mitchell',
        age: 28,
        symptoms: ['Congestion and runny nose', 'Tickle in throat', 'Forehead feels a bit warm', 'Occasional sneezes'],
        correctPill: 'Sudafed'
    },
    {
        patientName: 'James Cooper',
        age: 45,
        symptoms: ['Burning up with temperature of 103F', 'Exhaustion', 'Muscles ache everywhere', 'Shivering', 'Hacking cough but no phlegm'],
        correctPill: 'Tamiflu'
    },
    {
        patientName: 'Emily Zhang',
        age: 12,
        symptoms: ['Throat feels like it\'s on fire', 'Can barely drink water', 'White spots on extremely red tonsils', 'Hot to the touch'],
        correctPill: 'Amoxicillin'
    },
    {
        patientName: 'David Thornton',
        age: 34,
        symptoms: ['Red itchy patches all over arms', 'Eyes won\'t stop watering', 'Face looks puffy', 'Uncontrollable sneezing'],
        correctPill: 'Zyrtec'
    },
    {
        patientName: 'Linda Park',
        age: 39,
        symptoms: ['Head splitting apart', 'Seeing zigzag flashing lights', 'Can\'t stand loud noises', 'Feeling very sick to stomach'],
        correctPill: 'Imitrex'
    },
    {
        patientName: 'Carlos Rivera',
        age: 52,
        symptoms: ['Deep cut is red and warm to touch', 'Oozing yellowish fluid', 'Sharp pain in one specific area', 'Feeling incredibly drained and feverish'],
        correctPill: 'Augmentin'
    },
    {
        patientName: 'Anna Kowalski',
        age: 22,
        symptoms: ['Stuffy nose', 'Slightly elevated temperature', 'Throat scratchiness', 'Coughing gently'],
        correctPill: 'Sudafed'
    },
    {
        patientName: 'Michael Warren',
        age: 61,
        symptoms: ['Can hardly keep eyes open', 'Whole body hurts', 'Head is throbbing', 'Freezing cold then sweating'],
        correctPill: 'Tamiflu'
    },
    {
        patientName: 'Jessica Ortega',
        age: 17,
        symptoms: ['Swallowing feels like swallowing glass', 'Head pounding', 'Sweating with fever', 'Tonsils look enormous'],
        correctPill: 'Amoxicillin'
    },
    {
        patientName: 'Robert Chen',
        age: 48,
        symptoms: ['Sudden breakout of itchy welts', 'Scratchy skin', 'Tearing up constantly', 'Sneezing fits'],
        correctPill: 'Zyrtec'
    },
    {
        patientName: 'Grace Nakamura',
        age: 31,
        symptoms: ['Intense throbbing on right side of head', 'Need to lay down in a pitch-black room', 'Naseous feeling', 'Regular lights physically hurt eyes'],
        correctPill: 'Imitrex'
    },
    {
        patientName: 'Thomas Williams',
        age: 56,
        symptoms: ['Wounded area is swollen significantly', 'Thick discharge visible', 'Spiked a high temperature', 'Severe lethargy'],
        correctPill: 'Augmentin'
    },
    {
        patientName: 'William Taylor',
        age: 29,
        symptoms: ['Pressure in sinuses', 'Nose is completely blocked', 'Mild headache', 'Occasional dry cough'],
        correctPill: 'Sudafed'
    },
    {
        patientName: 'Maria Garcia',
        age: 38,
        symptoms: ['Fever of 102F', 'Severe muscle pain', 'Persistent dry cough', 'Extreme fatigue'],
        correctPill: 'Tamiflu'
    },
    {
        patientName: 'Kevin Smith',
        age: 15,
        symptoms: ['Painful to swallow', 'Red throat with white patches', 'Fever', 'Swollen lymph nodes in neck'],
        correctPill: 'Amoxicillin'
    },
    {
        patientName: 'Rachel Adams',
        age: 26,
        symptoms: ['Itchy, watery eyes', 'Runny nose', 'Sneezing repeatedly', 'Mild rash on arms'],
        correctPill: 'Zyrtec'
    },
    {
        patientName: 'Steven Clark',
        age: 41,
        symptoms: ['Severe pulsating pain on left side of head', 'Nausea', 'Light sensitivity', 'Blurry vision'],
        correctPill: 'Imitrex'
    },
    {
        patientName: 'Patricia Lewis',
        age: 63,
        symptoms: ['Skin infection on leg', 'Area is red, swollen, and warm', 'Pus draining from wound', 'Feverish'],
        correctPill: 'Augmentin'
    },
    {
        patientName: 'Daniel Wright',
        age: 33,
        symptoms: ['Stuffy head', 'Runny nose', 'Mild sore throat', 'Sneezing'],
        correctPill: 'Sudafed'
    },
    {
        patientName: 'Michelle Hill',
        age: 47,
        symptoms: ['Sudden high fever', 'Chills and sweats', 'Body aches', 'Severe fatigue'],
        correctPill: 'Tamiflu'
    }
];
