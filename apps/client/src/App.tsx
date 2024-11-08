import React, { useEffect } from 'react';
import './App.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

function App() {
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text Change');
        console.log(quill.getText());
        console.log(quill.getContents());
        console.log(quill.root.innerHTML);
        console.log(quillRef.current.firstChild.innerHTML);
      })
    }
  }, [quill, quillRef]);

  return (
    <div style={{ width: "100%", minHeight: "500px" }}>
      <div ref={quillRef} />
    </div>
  );
}

export default App;
