import React, { useState } from 'react';
import RoomInput from "../components/RoomInput";


interface RoomDimensions {
    width: string;
    length: string;
    height: string;
}

const MainPage: React.FC = () => {
    
    const [roomDimensions, setRoomDimensions] = useState<RoomDimensions>({
        width: '',
        length: '',
        height: '',
    });

    
    const handleRoomSubmit = async (dimensions: RoomDimensions) => {
        
        setRoomDimensions(dimensions);
    };

    return (
        <div>
            <RoomInput onRoomSubmit={handleRoomSubmit} />

            <div>
                <h2>Room Dimensions:</h2>
                <p>Width: {roomDimensions.width}</p>
                <p>Length: {roomDimensions.length}</p>
                <p>Height: {roomDimensions.height}</p>
            </div>
        </div>
    );
};

export default MainPage;
