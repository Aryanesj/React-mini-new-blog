import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('Artem')
	const [isPending, setIsPending] = useState(false)

	const history = useHistory()


// NEW POST(blog)
	const handleSubmit =(e) => {
		e.preventDefault()
		const blog = { title, body, author}

		setIsPending(true)

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify(blog)
		}) .then(() => {
			console.log('new blog added')
			setIsPending(false)
			history.push('/')
		})
	}

	return (
		<div className='create'>
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label style={{fontSize: '24px'}}>Blog title: </label>
				<input
				   type="text"
				   required
				   value={title}
				   onChange={(e) => setTitle(e.target.value)}
				/>
				<label style={{fontSize: '24px'}}>Blog body: </label>
				<textarea
				   required
				   value={body}
				   onChange={(e) => setBody(e.target.value)}
				 ></textarea>
				<label style={{fontSize: '24px'}}>Blog author: </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)} >
					<option value="Artem">Artem</option>
					<option value="Adam">Adam</option>
				</select>
				{ !isPending && <button style={{fontSize: '18px'}}>Add Blog</button>}
				{ isPending && <button disabled style={{fontSize: '18px'}}>Adding blog...</button>}
			</form>
		</div>
	)
}

export default Create