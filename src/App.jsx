import './App.css';
import { useState } from 'react';

const processors = [
    { name: "i7", price: 50000 },
    { name: "i9", price: 75000 },
    { name: "Ryzen 7", price: 60000 },
    { name: "Ryzen 9", price: 85000 }
];

const memories = [
    { name: "16 Gb - DDR4", price: 70000 },
    { name: "32 Gb - DDR4", price: 135000 },
    { name: "64 Gb - DDR4", price: 200000 }
];

const gpus = [
    { name: "RTX 4060 8GB", price: 125000 },
    { name: "RTX 4070 12GB", price: 245000 },
    { name: "RX 7800 XT 16GB", price: 215000 }
];

const cases = [
    { name: "Zalman S2", price: 18000 },
    { name: "NZXT H5 Flow", price: 36000 },
    { name: "Corsair 4000D", price: 42000 }
];

const powerSupplies = [
    { name: "650W Gold", price: 32000 },
    { name: "750W Gold", price: 42000 },
    { name: "850W Platinum", price: 58000 }
];

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
    return (
        <>
        <div
        style={{margin: "20px", padding: "5px"}}
        >
            <h3>{name}</h3>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(option)}
                    style={{
                        backgroundColor:
                            selectedOption?.name === option.name ? "green" : "lightgrey",
                        color: selectedOption?.name === option.name ? "white" : "black",
                        margin: "5px",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    {option.name} - {option.price} HUF
                </button>
            ))}
        </div>
        </>
    );
};

export const App = () => {
    const [processor, setProcessor] = useState(null);
    const [memory, setMemory] = useState(null);
    const [gpu, setGpu] = useState(null);
    const [caseItem, setCaseItem] = useState(null);
    const [powerSupply, setPowerSupply] = useState(null);

    const totalPrice =
        (processor?.price || 0) +
        (memory?.price || 0) +
        (gpu?.price || 0) +
        (caseItem?.price || 0) +
        (powerSupply?.price || 0);

    return (
        <div>
            <ComponentSelector
                name="Processzorok"
                options={processors}
                selectedOption={processor}
                onSelect={setProcessor}
            />

            <ComponentSelector
                name="Memóriák"
                options={memories}
                selectedOption={memory}
                onSelect={setMemory}
            />

            <ComponentSelector
                name="Videokártyák"
                options={gpus}
                selectedOption={gpu}
                onSelect={setGpu}
            />

            <ComponentSelector
                name="Gépházak"
                options={cases}
                selectedOption={caseItem}
                onSelect={setCaseItem}
            />

            <ComponentSelector
                name="Tápegységek"
                options={powerSupplies}
                selectedOption={powerSupply}
                onSelect={setPowerSupply}
            />

            <h3>Teljes ár: {totalPrice.toLocaleString()} HUF</h3>
        </div>
    );
};
