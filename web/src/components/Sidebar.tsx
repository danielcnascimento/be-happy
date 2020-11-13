import  React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/Smile-map.svg';

import '../styles/components/sidebar.css';

export default function Sidebar(){
    const {goBack} = useHistory(); //retorna para pagina onde voce estava !

    return(
       <aside className={"app-sidebar"}>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    )
}

