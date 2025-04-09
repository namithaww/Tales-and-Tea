// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white rounded-2xl shadow-xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind! 💙</h1>
        <p className="text-gray-700">If you see styling, Tailwind is working! 🎉</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
