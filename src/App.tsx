import {useState} from 'react';
import {BrowserRouter} from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <h1 className="text-2xl font-bold">Color config</h1>
            <div className="font-roboto">
                <button onClick={() => setCount((count) => count - 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="">
                Click on the Vite and React logos to learn more
            </p>
        </BrowserRouter>
    );
}

export default App;
