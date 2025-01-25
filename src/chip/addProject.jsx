// frontend/src/components/AddProject.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
    const [title, setTitle] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('projectLink', projectLink);
        formData.append('image', image); // Append the image file

        try {
            const response = await axios.post('http://localhost:5000/api/projects', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type for file upload
                },
            });
            console.log('Project added:', response.data);
            // Clear the form
            setTitle('');
            setProjectLink('');
            setImage(null);
        } catch (error) {
            console.error('Error adding project:', error.response?.data || error.message);
        }
    };

    return (
        <div className='h-60 w-96 bg-slate-400 '>
            <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className='text-black'
                    />
                </div>
                <div>
                    <label>Project Link:</label>
                    <input
                        type="text"
                        value={projectLink}
                        onChange={(e) => setProjectLink(e.target.value)}
                        required
                        className='text-black'

                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])} // Set the selected file
                        required
                        className='text-black'

                    />
                </div>
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;