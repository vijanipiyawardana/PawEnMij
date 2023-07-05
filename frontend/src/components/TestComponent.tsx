import { useState } from 'react'
import axios from 'axios';

const TestComponent = () => {
    const [message, setMessage] = useState<String>("Project name");

    const getMessage = async () => {
        await axios.get("http://localhost:3000/api/pets")
        .then(response => response.data)
        .then(data => setMessage(data));
    }
  return (
    <div>
        <p>{message}</p>
        <button onClick={getMessage}>Click Me!</button>
    </div>
  )
}

export default TestComponent
