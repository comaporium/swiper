import './App.css';
import Slider from './Slider';

function App() {

  const slike =[
    {
      id: 1,
      url:"https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      opis: "opis ove slike"
    },
    {
      id: 2,
      url:"https://c4.wallpaperflare.com/wallpaper/731/235/710/karol-nienartowicz-sunrise-landscape-snowy-peak-mountains-hd-wallpaper-preview.jpg",
      opis: "opet neki opis"
    },
    {
      id: 3,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor51kPCtwUHu5x29-7WINBdxYN_tzbwahyJoosdQlry-iXbNi3IIqMdqgZzaWXi0Dw4w&usqp=CAU",
      opis: "bla bla bla"
    },
    {
      id: 4,
      url:"https://t4.ftcdn.net/jpg/05/25/08/09/360_F_525080936_JEpnKXh2siYKBPpsqd98pbbcIzy4ySKz.jpg",
      opis: "neki random opis"
    },
    {
      id: 5,
      url:"https://i.pinimg.com/originals/9c/12/35/9c12352fe66c1625f34ca299cb9cae3f.png",
      opis: "opis 5"
    }
  ]

  return(
    <>
      <Slider items={slike} />
    </>
  )
}

export default App;
