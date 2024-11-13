import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet';
import Seo from './Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Story = () => {
  const { id } = useParams(); // get id parameter from url
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seoData, setSeoData] = useState(null); // YOAST DATA


  const navigate = useNavigate();

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    }

  const endpoint = `${baseUrl}/stories/${id}?_embed`;

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((response) => {
      console.log(response.data);
      setStory(response.data);
      setSeoData(response.data.yoast_head_json); // Set Yoast Data
      setLoading(false);
    })
    .catch((error) => console.log(error))
  }, [id]);

  // Featured image check
  function getFeaturedImage(story) {
    if (story && story._embedded && story._embedded['wp:featuredmedia'] && story._embedded['wp:featuredmedia'][0].source_url) {
      return story._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://via.placeholder.com/150';
    }
  }

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
    <Seo
        title={story.yoast_head_json?.title || `${story.title.rendered} - Little Miracles`}
        description={story.yoast_head_json?.description}
        image={story.yoast_head_json?.og_image?.[0]?.url}
        url={window.location.href}
      />
    <Helmet>
      {/* basic seo */}
      <title>{story.title.rendered}</title>
      {seoData?.description && <meta name="description" content={seoData.description}/>}
    </Helmet>
      <div className='single-container'>
        <div className='single-title'>
        <p id='back-arrow' onClick={handleBackClick}> <IoArrowBackOutline />Back</p>
        <h4 className='title'>{story.title.rendered}</h4>
        </div>
      <div className='single-post-container'>
        <img src={getFeaturedImage(story)} alt={story.title.rendered + ' profile picture'}/>
        <div dangerouslySetInnerHTML={{__html: story.content.rendered}}/>
      </div>
    </div>
    </>
  )
}

export default Story
