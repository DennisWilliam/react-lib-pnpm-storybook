import { useEffect, useState } from 'react'
import viteLogo from '../../../../../../../vite.svg'
import './App.css'
import reactLogo from './assets/react.svg'

const App = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		setCount(2)
	}, [])

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React 1</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((c) => c + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
