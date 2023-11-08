import { useMemo, useState } from "react"
import './index.css'

const sampleCode = `
const items = Array(20).fill(null).map((_, i) => \`Item #$\{i + 1}\`)
`

const App = () => {
	const [code, setCode] = useState(sampleCode)
	const result = useMemo(() => {

		if (!code?.length) return ''

		try {
			return eval(code)?.toString() ?? '-'
		} catch (e) {
			return e?.message ?? 'Unknown error'
		}

	}, [code])

	return (
		<div className="w-full h-screen grid grid-cols-2 gap-4 p-1">

			<aside className="overflow-y-auto bg-gray-100">
                <textarea
					className="w-full h-screen bg-transparent p-2"
					value={code}
					onChange={e => setCode(e.target.value)} />
			</aside>

			<main className="overflow-y-auto p-1">
                <pre>
                    <code>
                        {result}
                    </code>
                </pre>
			</main>

		</div>
	);
}

export default App
