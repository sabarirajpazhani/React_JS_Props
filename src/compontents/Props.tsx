import React from 'react'
import blogs from '../DB/Blog.json'
import MultiProps from './MultiProps'

const Props = () => {
  return (
    <div className='text-center mt-6'>
      <h1 >Props Practice</h1>
      <h3>Multi Props values</h3>

      {blogs.users.map((blog)=>(
        <MultiProps key={blog.id} id={blog.id} name={blog.name} role={blog.role}> 
            <div>
                <p>Developer and Production</p>
                <button onClick={()=>alert("Hello Developer")}>Click Me!</button>
            </div>
        </MultiProps>
      ))}
      
    </div>
  )
}

export default Props
