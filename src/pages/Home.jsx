import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import axios from "axios"
import { NavLink } from 'react-router-dom';
// icons
import { LuHeartHandshake } from "react-icons/lu";
import { RiParentLine } from "react-icons/ri";
import { TbBabyCarriage } from "react-icons/tb";

// seo component
import Seo from '../components/Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {
  const [stories, setStories] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const endpoint = `${baseUrl}/stories?_embed`
  
  console.log({ endpoint }, { baseUrl });

  function getFeaturedImage(story) {
    if (story && story._embedded && story._embedded['wp:featuredmedia'] && story._embedded['wp:featuredmedia'][0].source_url) {
      return story._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://via.placeholder.com/150';
    }
  }
  
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log("Fetched stories", res.data);
      setStories(res.data);
      setLoading(false);
    })
    .catch((err) => console.log("Error fetching stories", err))
    setLoading(false);
  }, [])

  const Stories = ({ stories }) => {
    console.log({ stories });

    if (!stories || stories.length === 0) {
      return <p>No stories available.</p>;
  }

    const mappedStories = stories.map((story, index) => {
      return (
        <div key={story.slug + "-" + index} className="post-container">
          <img id='story-img-home' src={getFeaturedImage(story)} alt={story.title.rendered + ' profile picture'}/>
            <h4 className="title">{story.title.rendered}</h4>
            <div dangerouslySetInnerHTML={{ __html: story.excerpt?.rendered }} />
            {/* <div>{story.slug + "-" + index}</div> */}
            <li key={story.slug + "-" + index}>
              <a href={`#/story/${story.id}`}>Read More...</a>
            </li>
        </div>
      )
    })
    
    console.log({ mappedStories });
    
    return (
      <>
        {/* All our posts are here! */}
        {mappedStories}
      </>
    )
  }
  
  return (
    <>
    <Seo
    title="Little Miracles - Home"
    description="Browse my amazing Wordpress Post for my custom site"
    url={window.location.href}
    />
    <div className='container' >
    <PageHeader/>
    <div className='home-text-sections'>
      <img src="/images/first-baby.jpg" alt="" />
      <div className='text-section'>
        <h2>We're here for you</h2>
        <p>We do this by supporting parents and whānau through a time that no one is prepared for.
        A newborn surrounded by monitors and tubes, not hugs and cuddles. A hospital stay lasting weeks or months, not hours or days. Eyes filled with tears of sadness and worry, not tears of happiness and joy.
        These are the times you need someone who knows what you're going through to tell you it's going be alright. Someone who can give you the kind of support and resources that will make all the difference.
        Someone who can say “We're here for you”.</p>
      </div>
    </div>
    
    <h2>What you can do</h2>
    <div className='lilac-centering'>
    <div className='whattodo-section'>
      <div className='graphic-post'>
        <LuHeartHandshake />
        <p>The first step is to connect with us so you can keep in touch with what is happening both locally and across New Zealand.</p>
        <NavLink to='/support'>
        <button className='secondary-btn'>Become a Supporter</button>
        </NavLink>
      </div>

      <div className='graphic-post middle'>
      <RiParentLine />
        <p>The Little Miracles Trust exists to provide, and coordinate, support to these families during this time, the transition home, and onwards.</p>
        <NavLink to='/findsupport'>
        <button className='secondary-btn'>Support Offered</button>
        </NavLink>
        

      </div>

      <div className='graphic-post'>
      <TbBabyCarriage />
        <p>The Trust works to provide and coordinate support to the whānau of premature and sick full-term babies</p>
        <NavLink to='/about'>
        <button className='secondary-btn'>Learn More</button>
        </NavLink>
        
      </div>
    </div>
    </div>
    

    <div className='home-text-sections'>
      <img src="/images/premature.webp" alt="" />
      <div className='text-section'>
        <h2>About The Little Miracles Trust</h2>
        <p>Originally called The Neonatal Trust, we were established in 1986 by two Wellington families with extremely premature babies.  We are a registered not-for-profit which now operates right across New Zealand.
The Trust works to provide and coordinate support to the whānau of premature and sick full-term babies, as they make their journeys through neonatal intensive care, the transition home, and onwards.  <br /><br />
 This is done in many ways: the provision of Care Packs on entry to a unit; morning teas to bring whānau and experts together; equipment for families to use in the units; post-discharge playgroups and coffee mornings. 
We currently have team members in Auckland, Middlemore, Hamilton, Wellington, Christchurch and Dunedin with a constant drive to expand into all areas. Most of our team members have first-hand experience of time in a NICU or SCBU. So we know exactly what it’s like – and just how to help.</p>
      </div>
    </div>

    <h2>Recent Stories</h2>
    <div className='lilac-centering'>
      <div id="homeCont">
        {loading ? <p>Loading</p> : <Stories stories={stories} />}
      </div>
      </div>
      
      <div className='home-text-sections'>
      <img src="/images/research.jpg" alt="" />
      <div className='text-section'>
        <h2>Supporting world-leading neonatal research</h2>
        <p>The Little Miracles Trust is proud to support neonatal research, as it creates enhanced outcomes for thousands of future neonatal babies. Note: All research we support has appropriate ethics sign off.
        A good example is the world leading research into the early care of neonatal babies undertaken by Dr Max Berry and her team. The long term view is being looked at, with the differences in circumstances and care – and how these can impact their life beyond the Neonatal Intensive Care Unit (NICU) and/or Special Care Baby Unit (SCBU).</p>
        <NavLink to='/about'>
        <button className='third-btn'>Learn More</button>
        </NavLink>
        
      </div>
    </div>
   

    <div className='sponsors'>
      <h3>Thank you to the Little Miracles Trust’s Supporters and Sponsors</h3>
      <div className='sponsors-img'>
        <img src="/images/huggies.png" alt="" />
        <img src="/images/mojo.jpg" alt="" />
        <img src="/images/baby-fact.png" alt="" />
        <img src="/images/registry.webp" alt="" />
        <img src="/images/weta.webp" alt="" />
        <img src="/images/woolworths.svg" alt="" />
        <img src="/images/hell.png" alt="" />
      </div>
    </div>

  </div>
    </>
  
 );
}




export default Home;