import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

function Developer() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python'); 

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const runCode = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/run_code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code })
      });

      const result = await response.json();
      if (response.ok) {
        setOutput(result.output);
      } else {
        console.error('Error from backend:', result.error);
        setOutput(result.error);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setOutput('An error occurred while running the code.');
    }
  };

  return (
    <div className="Developer"  id='Developer'>
      <div className="Developer-container">
        <div className="Developer-box">
          <div className="Developer-logo">
            <img
              width="67px"
              height="65px"
              src="https://yt3.googleusercontent.com/3gGGW3--EkaFuZgfMJezzAtKhRIu1rw3TNDmPRRDx0FeIJbc5Svk8tZX_Qkmx-F_NAn6nFe6OA=s160-c-k-c0x00ffffff-no-rj"
              alt="Developer"
            />
            <h1>Developer</h1>
          </div>
          <p>
            We now support 24 popular coding languages. At your core, LeetCode is about developers. Our powerful
            development tools such as Playground help you test, debug, and even write your own projects online.
          </p>
        </div>
      </div>

      <div className="Playground">
        <div className="language-selector">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </div>

        <MonacoEditor
          height="400px"
          defaultLanguage={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
        />

        <button onClick={runCode}>Run Code</button>

        <div className="output">
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Developer;
