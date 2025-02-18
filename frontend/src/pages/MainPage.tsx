import React, { useState } from 'react';
import RoomInput from "../components/RoomInput";
import Room3D from "../components/Room3D";

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

    const handleRoomSubmit = (dimensions: RoomDimensions) => {
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

            
            <Room3D 
                width={parseFloat(roomDimensions.width)} 
                length={parseFloat(roomDimensions.length)} 
                height={parseFloat(roomDimensions.height)} 
                furniture={null} 
            />
        </div>
    );
};

export default MainPage;
