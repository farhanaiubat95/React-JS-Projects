
import image1 from '../assets/images/tourimg01.jpg';
import image2 from '../assets/images/tourimg02.jpg';
import image3 from '../assets/images/tourimg03.jpg';
import image4 from '../assets/images/tourimg04.jpg';
import image5 from '../assets/images/tourimg05.jpg';
import image6 from '../assets/images/tourimg06.jpg';
import image7 from '../assets/images/tourimg07.jpg';
import image8 from '../assets/images/tourimg08.jpg';
import image9 from '../assets/images/tourimg09.jpg';


const tours = [
  {
    id: "01",
    flightFrom: "Dhaka",
    flightTo: "Germany",
    departureDate: "17.12.24",
    duration: "17.12.24",
    price: 99,
    maxPersion: 10,
    description: "this is the description",
    reviews: [
      {
        name: "Farhana Benet Islam",
        rating: 4.6,
        comment: "This is a nice and comfortable tour. I enjoyed the history and culture of the place.",
      },
      {
        name: "Rabby",
        rating: 2,
        comment: "I didn't enjoy this tour. The service was slow and the food was bland.",
      },
    ],
    avgRating: 4.5,
    photo: image1,
    featured: true,
  },
  {
    id: "02",
    flightFrom: "Sylhet",
    flightTo: "London",
    departureDate: "17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "this is the description",
    reviews: [
  
    ],
    avgRating:"",
    photo: image2,
    featured: false,
  },
  {
    id: "03",
    flightFrom: "Sylhet",
    flightTo: "Denmark ",
    departureDate:"17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "",
    reviews: [
      {
        name: "Mimona",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: image3,
    featured: true,
  },
  {
    id: "04",
    flightFrom: "Sylhet",
    flightTo: "Abu dabi",
    departureDate: "17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "this is the description",
    reviews: [

    ],
    photo: image4,
    featured: false,
  },
  {
    id: "05",
    flightFrom: "Dhaka",
    flightTo: "Qatar",
    departureDate: "17.12.24",
    duration:"17.12.24",
    price: 300,
    maxPersion: 10,
    description: "",
    reviews: [
      {
        name: "Rabby",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: image5,
    featured: true,
  },
  {
    id: "06",
    flightFrom: "Sylhet",
    flightTo: "Australia ",
    departureDate: "17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "this is the description",
    reviews: [
      {
        name: "Lina",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: image6,
    featured: true,
  },
  {
    id: "07",
    flightFrom: "Dhaka",
    flightTo: "USA",
    departureDate:"17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "this is the description",
    reviews: [
      {
        name: "Ria",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: image7,
    featured: true,
  },
  {
    id: "08",
    flightFrom: "Dhaka",
    flightTo: "Paris",
    departureDate:"17.12.24",
    duration: "17.12.24",
    price: 200,
    maxPersion: 8,
    description: "this is the description",
    reviews: [
      {
        name: "Ria",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: image8,
    featured: true,
  },
  {
    id: "09",
    flightFrom: "Dhaka",
    flightTo: "Finland",
    departureDate:"17.12.24",
    duration: "17.12.24",
    price: 100,
    maxPersion: 10,
    description: "this is the description",
    reviews: [
     
    ],
    avgRating: 3.5,
    photo: image9,
    featured: false,
  },
];

export default tours;
