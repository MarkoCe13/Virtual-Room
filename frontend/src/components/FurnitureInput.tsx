import React, { useState, FormEvent } from 'react';
import '../styles/FurnitureInput.css'; 

interface FurnitureDimensions {
    width: string;
    length: string;
    height: string;
}

interface FurnitureInputProps {
    onFurnitureSubmit: (dimensions: FurnitureDimensions) => void; 
}

const FurnitureInput: React.FC<FurnitureInputProps> = ({ onFurnitureSubmit }) => {
    
    const [url, setUrl] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
         
        const scrapedDimensions: FurnitureDimensions = {
            width: '100', 
            length: '200', 
            height: '50', 
        };

        onFurnitureSubmit(scrapedDimensions);
    };

    return (
        <div>
            <h2>Enter Furniture URL</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="url">Furniture URL</label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FurnitureInput;
