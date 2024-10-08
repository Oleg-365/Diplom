import './Reviews-Cards.scss';
import Plug from 'assets/media/icons/reviews/plug.svg';
import ReviewsCard from './Review-Card/Review-Card';

const ReviewsCards = () => {
  const revCardsData = [
    {
      id: 1,
      imgPath: Plug,
      text: "ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ",
    },
    {
      id: 2,
      imgPath: Plug,
      text: "ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ",
    },
    {
      id: 3,
      imgPath: Plug,
      text: "ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ",
    },
    {
      id: 4,
      imgPath: Plug,
      text: "ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ",
    }
  ];
  return (
    <div class="reviews-cards">
      {revCardsData.map(cardData => (
        <ReviewsCard key={cardData.id} cardData={cardData} />
      ))}  
    </div>
  )
}

export default ReviewsCards;