import './Faq.scss';
import FaqCard from './FaqCard/FaqCard';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus modi ipsum explicabo, ducimus repellendus odit voluptatibus odio reprehenderit sapiente neque ab rem accusamus doloribus, laudantium deleniti beatae molestias quasi minus.",
    },
    {
      id: 2,
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus modi ipsum explicabo, ducimus repellendus odit voluptatibus odio reprehenderit sapiente neque ab rem accusamus doloribus, laudantium deleniti beatae molestias quasi minus.",
    },
    {
      id: 3,
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus modi ipsum explicabo, ducimus repellendus odit voluptatibus odio reprehenderit sapiente neque ab rem accusamus doloribus, laudantium deleniti beatae molestias quasi minus.",
    },
    {
      id: 4,
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus modi ipsum explicabo, ducimus repellendus odit voluptatibus odio reprehenderit sapiente neque ab rem accusamus doloribus, laudantium deleniti beatae molestias quasi minus.",
    },
  ]
  return (
  <section class="faq wrap" id="faq">
    <h2 class="headers-h2">Часто задаваемые вопросы</h2>
    {faqData.map(cardData => (
        <FaqCard key={cardData.id} cardData={cardData} />
      ))}  
  </section>
  )
}

export default Faq;