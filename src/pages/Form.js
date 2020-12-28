import React, { useState } from 'react'

const Form = () => {
    const [username, setUserName] = useState("");
    const [comments, setComments] = useState("")
    const [topic, setTopic] = useState("")


   const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleCommentsChange = (event) => {
        setComments(event.target.value)
    }

    const handleTopicChange = (event) => {
        setTopic(event.target.value)
    }

    const handleSubmit = event => {
        alert(`${username} ${comments} ${topic}`)
        event.preventDefault()
    }



    return (
        <form className="form-header" onSubmit={handleSubmit}>
         <div>
             <label className="labels">Username</label>
             <input
             className="form-input" 
             type="text" 
             value={username} 
             onChange={handleUserNameChange}>    
             </input>
         </div>
         <div>
             <label className="labels">Comments</label>
             <textarea
             className="form-textarea" 
             value={comments} 
             onChange={handleCommentsChange}>
             </textarea>
         </div>
         <div>
             <label className="labels">Topic</label>
             <select value={topic} onChange={handleTopicChange} className="select-value">
             <option value="react" className="form-option">React</option>
             <option value="angular" className="form-option">Angular</option>
             <option value="vue" className="form-option">Vue</option>
             </select>
         </div>
         <button type="submit" className="btnn">Submit</button>
                
        </form>
        
    )
}

export default Form;