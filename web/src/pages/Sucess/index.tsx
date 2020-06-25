import React from 'react';
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import './styles.css'

const Sucess = () => {

    return (
        <div id="page">
            <FiCheckCircle color='green' size={50} />
            <h1 id='sucess-message'>Sucesso</h1>


            <Link to="/" className="link">
                <FiArrowLeft className='arrowLeft' />
					Voltar
			</Link>
        </div>
    )
}

export default Sucess