import axios from 'axios';
import { BASE_URL } from "../../utils/request";
import icon from '../../assets/img/notification-icon.svg';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(saleId:number) {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log("Sucesso!");
    })
}

function NotificationButton({saleId} : Props) {
    return (

        <div className="dsmeta-red-btn" onClick={() => handleClick({saleId}.saleId)}>
            <img src={icon} alt="Notificar" />
        </div>

    )
}

export default NotificationButton;