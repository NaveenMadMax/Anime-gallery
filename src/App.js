import Gallerycard from './components/gallery';
import './App.css';
import one from './components/assets/images/1.jpg';
import two from './components/assets/images/2.jpg';
import three from './components/assets/images/3.jpg';
import four from './components/assets/images/4.jpg';
import five from './components/assets/images/5.jpg';
import six from './components/assets/images/6.jpg';
import seven from './components/assets/images/7.jpg';
import eight from './components/assets/images/8.jpg';
import nine from './components/assets/images/9.jpg';
import ten from './components/assets/images/10.jpg';
import eleven from './components/assets/images/11.jpg';
import twelve from './components/assets/images/12.jpg';
import thirteen from './components/assets/images/13.jpg';
import fourteen from './components/assets/images/14.jpg';
import fifteen from './components/assets/images/15.jpg';
import sixteen from './components/assets/images/16.jpg';
import seventeen from './components/assets/images/17.jpg';
import eighteen from './components/assets/images/18.jpg';
import './index.css'

const GalleryData = [
  {
    image: one,
    title: "Black cover",
  }
  ,
  {
    image: two,
    title: "Attack on Titan",
  },
  {
    image: three,
    title: "Blue Lock",
  },
  {
    image: four,
    title: " Classroom",
  }
  ,
  {
    image: five,
    title: "Dan Da Dan",
  },
  {
    image: six,
    title: "Death Note",
  },
  {
    image: seven,
    title: "Demon Slayer",
  }
  ,
  {
    image: eight,
    title: "Dragon Ball",
  },
  {
    image: nine,
    title: "DR Stone",
  },
  {
    image: ten,
    title: "Jujutsu Kaisen",
  }
  ,
  {
    image: eleven,
    title: "Mashle",
  },
  {
    image: twelve,
    title: "My Hero Academia",
  },
  {
    image: thirteen,
    title: "Naruto",
  }
  ,
  {
    image: fourteen,
    title: "One Piece",
  },
  {
    image: fifteen,
    title: "One Punch Man",
  }
  ,
  {
    image: sixteen,
    title: "Parasyte",
  }
  ,
  {
    image: seventeen,
    title: "Solo Leveling",
  },
  {
    image: eighteen,
    title: "Tekkon Bloodline",
  }
];
function App() {
  return (
    <div className='gallery'>
        <h1>Anime Gallery</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", gap:"35px"}}>
      {
        GalleryData.map((gallery)=>{
          const {image, title} = gallery;
          return (
            <Gallerycard image={image} title={title} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
