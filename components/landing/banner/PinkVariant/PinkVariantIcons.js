import Image from "next/image"
import hands from "../../../../public/landing page/heart-hands.svg"
import nature from "../../../../public/landing page/nature.svg"
import bunny from "../../../../public/landing page/bunny.svg"

const generatePinkVariantIcon = () => {
    return[
        {
            label: "Reliable",
            url: (
                <Image src={hands} alt="hands icon" />
            ),
            description: "We stand behind our products and give genuine advice with customer s best interest at heart"
        },
        {
            label: "Customizable nature",
            url: (
                <Image src={nature} alt="nature" />
            ),
            description: "Our products allow user to assume control of the color"
        },
        {
            label: "Cruelty-free",
            url: (
                <Image src={bunny} alt="bunny" />
            ),
            description: "We made our products not only inclusive for human but also crutely free for animals"
        },
    ]
}

export default generatePinkVariantIcon