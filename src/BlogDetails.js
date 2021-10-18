import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch.js'
import {useHistory} from 'react-router-dom'

const BlogDetails = () => {
	const { id } = useParams()
	const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)

	const history = useHistory()

 const handleClick = () => {
 	fetch('http://localhost:8000/blogs/' + blog.id, {
 		method: 'DELETE',
 	}) .then(() => {
 		history.push('/')
 	})
 }

	return (
		<div className='blog-details'>
			{ isPending && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ blog && (
				<article>
				<h2>{ blog.title }</h2>
				<p style={{fontSize: '22px'}}>Written by { blog.author }</p>
				<div className='bodyy'><p>{ blog.body }</p></div>
				<button className='blog-delete' onClick={handleClick}>Delete</button>
				</article>)}
		</div>
	)
}

export default BlogDetails