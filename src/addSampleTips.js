// addSampleTips.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDn7NHMT1dQgV3Ynx7TvZwJYTHCFay0yTQ",
    authDomain: "green-tech-blog.firebaseapp.com",
    projectId: "green-tech-blog",
    storageBucket: "green-tech-blog.firebasestorage.app",
    messagingSenderId: "1070207509071",
    appId: "1:1070207509071:web:8b3e51c460f82ecb0c003a",
    measurementId: "G-LM0EQZWDDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sampleTips = [
    {
        title: "Use energy-efficient monitors",
        content: "Choose monitors with ENERGY STAR certification and LED technology to minimize power usage while maintaining high display quality."
    },
    {
        title: "Enable Power Management Settings",
        content: "Configure your devices to automatically enter sleep mode after periods of inactivity. This can reduce energy consumption by up to 70% compared to active mode."
    },
    {
        title: "Shut Down Unused Devices",
        content: "Turn off computers, printers, and other IT equipment when not in use, especially during nights and weekends. This simple habit can significantly reduce energy waste."
    },
    {
        title: "Optimize Device Lifecycle",
        content: "Maintain and repair existing devices when possible instead of replacing them. When upgrading is necessary, choose energy-efficient models and properly recycle old equipment."
    }
];

async function addSampleTips() {
    try {
        for (const tip of sampleTips) {
            await addDoc(collection(db, 'tips'), tip);
            console.log(`Added tip: ${tip.title}`);
        }
        console.log('All sample tips have been added successfully!');
    } catch (error) {
        console.error('Error adding sample tips:', error);
    }
}

addSampleTips();