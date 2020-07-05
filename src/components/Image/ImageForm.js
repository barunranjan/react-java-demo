import React, { useState, useContext } from 'react';
import axios from 'axios';
import RegisterContext from '../../context/register/registerContext';
const ImageForm = () => {
  const registerContext = useContext(RegisterContext);

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    registerContext.uploadImage(formData);
    alert('image uploaded');
    setFileName('');

    // try {
    //   const res = axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log(res.data);
    // } catch (error) {}
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className='custom-file'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlfor='customFile'>
            {fileName}
          </label>
        </div>
        <input
          type='submit'
          value='upload'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ImageForm;
