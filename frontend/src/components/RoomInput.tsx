//Input za dimenzije sobe

import React, { useState, FormEvent } from 'react';
import '../styles/RoomInput.css'; 


interface RoomDimensions {
    width: string;
    length: string;
    height: string;
}


interface RoomInputProps { 
    onRoomSubmit: (dimensions: RoomDimensions) => void;
}


const RoomInput: React.FC<RoomInputProps> = ({ onRoomSubmit }) => {
    
    const [width, setWidth] = useState<string>('');
    const [length, setLength] = useState<string>('');
    const [height, setHeight] = useState<string>('');

  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        onRoomSubmit({ width, length, height });
    };

    return (
        <div className="room-input-container">
            <h2>Enter Room Dimensions</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="width">Width (in cm)</label>
                    <input
                        type="number"
                        id="width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="Width"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="length">Length (in cm)</label>
                    <input
                        type="number"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Length"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="height">Height (in cm)</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Height"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Create Room</button>
            </form>
        </div>
    );
};

export default RoomInput;
