import './SpecialsStyle.css'
import Special from "./Special"
import greekSaladImage from '../assets/greek_salad.jpg'
import bruschettaImage from '../assets/bruschetta.jpg'
import lemmomDessertImage from '../assets/lemon_dessert.jpg'

const specialsInfo = [
    {
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        src: greekSaladImage,
        alt: "Greek salad"
    },
    {
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        src: bruschettaImage,
        alt: "Bruschetta"
    },
    {
        title: "Lemmon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
        src: lemmomDessertImage,
        alt: "Lemmon dessert"
    },
]

export default function Specials() {
    return (
        <div className="specials">
            <h1>This week's specials</h1>
            {/* Using map function, display three specials */}
            <div className='cards'>
                {specialsInfo.map((special, index) => {
                    return (
                        <Special
                            key={index}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            src={special.src}
                            alt={special.alt}
                        />
                    )
                })}
            </div>
        </div>
    )
}