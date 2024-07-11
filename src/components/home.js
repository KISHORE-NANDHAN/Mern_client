import { useState } from "react";
import '../index.css';

export default function Home() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    const handleButton = () => {
        setShowName(`Welcome, ${name}`);
    }
    
    return (
        <div>
            <input 
                class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleChange}
            />
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleButton}
            >
                Submit
            </button>
            <h3>{showName}</h3>
        </div>
    );
}
