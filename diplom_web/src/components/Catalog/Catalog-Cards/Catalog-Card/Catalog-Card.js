import './Catalog-Card.scss';
import CatalogCardDesc from './Catalog-Card-Desc/Catalog-Card-Desc';
import ImgPlug from 'assets/media/images/plug.png';

const CatalogCard = ({ cardData }) => {
  const { title } = cardData;
  return (
    <div className="catalog-card">
      <img src={ImgPlug} alt="plug"/>
      <h3>{title}</h3>
      <CatalogCardDesc cardData={cardData}/>
    </div>
    
  )
}

export default CatalogCard;