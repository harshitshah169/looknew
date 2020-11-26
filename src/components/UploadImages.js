import React , { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../index.css';

const UploadImages = () => {
    
    const fileTypes = ['image/jpg','image/jpeg','image/png'];
    const [password, setPassword] = useState('');
    const [productType, setProductType] = useState('MansClothing');
    const [productPrice, setProductPrice] = useState('399');
    const [accessAllowed, setAccessAllowed] = useState(false);
    const [permissionText, setPermissionText] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    

    const handleOnPasswordChange = (event) => {
            setPassword(event.target.value);
    }
    const handleOnPasswordSubmit = (event) => {
        event.preventDefault();
        if(password === "cricket"){
            setAccessAllowed(true);
            setPermissionText("Access Allowed");
            setPassword('');
            ;
        } else {
            setAccessAllowed(false);
            setPassword('');
            setPermissionText("Access Denied");
        }
    }

    const handleProductTypeChange = (e) => {
        setProductType(e.target.value);
    }
    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    }

    const handleImageChange = (e) => {
        let selectedFile = e.target.files[0];

        if(selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError("please select an image file");
        }
        console.log(selectedFile);
    }

    const handleOnFileUploadSubmit = (e) => {

        e.preventDefault();
    }

    const handleLogOut = () => {
        setAccessAllowed(false);
        setPermissionText('');
    }
    
        return (
            <div className="upload-image-wrapper" style={{textAlign: 'center', marginTop: '20px'}}>
                <h3>Please do not make changes to this page</h3>
                <form onSubmit={handleOnPasswordSubmit}>
                    <input className="btn-upload-image" style={{background: '#ffffff', cursor: 'default'}} onChange={handleOnPasswordChange} type="password" value={password} placeholder="Enter password"/>
                    <div><button  style={{width: '100px', height: '25px', fontSize: '16px', cursor: 'pointer'}} type="submit">Submit</button></div>
                </form>
                {permissionText && <h4 style={{marginTop: '15px'}}>{permissionText}</h4>}
                <form style={{display: !accessAllowed ? "none" : "block"}} onSubmit={handleOnFileUploadSubmit}>
                    <select className="btn-upload-image" style={{background: '#ffffff'}} value={productType} onChange={handleProductTypeChange}>
                        <option value="MansClothing">Mans Clothing</option>
                        <option value="MansShoes">Mans Shoes</option>
                        <option value="MansAccessories">Mans Accessories</option>
                        <option value="WomansClothing">Womans Clothing</option>
                        <option value="WomansShoes">Womans Shoes</option>
                        <option value="WomansAccessories">Womans Accessories</option>
                    </select><br/>
                    <select className="btn-upload-image" style={{background: '#ffffff'}} value={productPrice} onChange={handleProductPriceChange}>
                        <option value="399">399</option>
                        <option value="499">499</option>
                        <option value="599">599</option>
                        <option value="749">749</option>
                        <option value="999">999</option>
                        <option value="1199">1199</option>
                        <option value="1499">1499</option>
                        <option value="1749">1749</option>
                        <option value="1999">1999</option>
                        <option value="moreThan2000">More than 2000</option>
                    </select><br/>
                    <input style={{marginLeft: '175px', color: 'transparent',alignSelf:'center'}} type="file" onChange={handleImageChange}/><br/>
                    <div>
                        { error && <div>{error}</div>}
                        { file && <div>{file.name}</div>}
                        { file && <ProgressBar file={file} setFile={setFile} productType={productType} productPrice={productPrice} />}
                    </div>
                    <h5 style={{marginTop: '20px'}}>{productType} - {productPrice}</h5>
                </form>
                <button onClick={handleLogOut} style={{marginTop: '15px', width: '100px', height: '25px', fontSize: '16px', cursor: 'pointer', display: accessAllowed ? 'inline' :'none'}}>Log Out</button>
            </div>
        )
    }


export default UploadImages;
