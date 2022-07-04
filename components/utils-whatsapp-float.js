import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsappLogo() {
  return (
    <a href="https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo" className="whatsapp-icon">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon-float"/>
    </a>
      
  );
}