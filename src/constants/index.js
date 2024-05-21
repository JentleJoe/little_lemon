import greekSalad from '../assets/img/greek salad.jpg'
import user1 from '../assets/img/user1.png'
import people from '../assets/img/people03.png'
import user2 from '../assets/img/user2.png'

import bruchetta from '../assets/img/bruchetta.svg'
import lemonDessert from '../assets/img/lemon dessert.jpg'

export const cardInfo = [
    {
        img: greekSalad,
        meal: 'Greek Salad',
        price: '$12.99',
        details: 'The famous Greek salad of crispy lettuce, peppers,\
        olives, and our Chicago-grown tomatoes, topped with tangy feta\
         cheese and drizzled with our signature lemon-herb dressing.'
    },
    {
        img: bruchetta,
        meal: 'Bruschetta',
        price: "$12.99",
        details: `Our Bruschetta is made from grilled bread that has been
        smeared with garlic and topped with a flavorful medley of diced
        tomatoes, fresh basil, and a hint of balsamic glaze.`
    },
    {
        img: lemonDessert,
        meal: 'Lemon Dessert',
        price: "$12.99",
        details: `Indulge in our exquisite Lemon Dessert, a heavenly
        blend of zesty lemon curd layered between light sponge cake,
        topped with a velvety lemon cream and a sprinkle of citrus zest.`
    }
]

export const footerLinks = [
    {
      title: "Doormant Navigation",
      links: [
        {
          name: "Home",
          link: "#home",
        },
        {
          name: "About",
          link: "#about",
        },
        {
          name: "Menu",
          link: "#menu",
        },
        {
          name: "Reservations",
          link: "#reservations",
        },
        {
          name: "Order Online",
          link: "#reservations",
        },
        {
            name: "Login",
            link: "",
        }
      ],
    },
    {
      title: "Contact",
      links: [
        {
          name: "Address",
          link: "https://www.linkedin.com/in/joshua-oseghale",
        },
        {
          name: "Phone Number",
          link: "https://www.linkedin.com/in/joshua-oseghale",
        },
        {
          name: "Email",
          link: "https://www.linkedin.com/in/joshua-oseghale",
        },
      ],
    },
    {
      title: "Social Media Links",
      links: [
        {
          name: "Twitter|X",
          link: "https://www.twitter.com/Code_Chart",
        },
        {
          name: "Linkdin",
          link: "https://www.linkedin.com/in/joshua-oseghale",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/aigbokhaebholo.joshua",
        }
      ],
    },
  ];

  export const userReview = [
    {
      img: user1,
      date: "12th December, 2023",
      review: `Absolutely loved the authentic flavors at Little Lemon!
      The Mediterranean fusion dishes were a delightful surprise.
      Can't wait to return!`,
       name: "Dora Osagie",
       bio: "Lawyer | Content Writer"
    },
    {
      img: user2,
      date: "7th January, 2024",
      review: `Little Lemon is my new favorite spot in Chicago!
      The ambiance, the service, and, most importantly, the food
      exceeded my expectations. Highly recommend!`,
       name: "Blessing Eghwere",
       bio: "Digital Fashion Designer"
    },
    {
      img: people,
      date: "5th March, 2024",
      review: `From the first bite to the last, every dish at
      Little Lemon was bursting with flavor. A true gem
      in the heart of the city. I'm give them five stars!`,
       name: "David",
       bio: "Data Analyst"
    },
  ]