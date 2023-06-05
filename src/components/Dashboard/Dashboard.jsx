import { dollar_icon, phone_icon, saved2_icon } from 'utils/icons'
import { photos, photo1 } from 'utils/images';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import s from './Dashboard.module.scss';

const links = [
  { path: 'test_page', title: 'Pricing plans', icon: dollar_icon },
  { path: 'test_page', title: 'Contact details', icon: phone_icon },
  { path: 'test_page', title: 'Saved pictures', icon: saved2_icon }
]

function Dashboard() {

  const user = useSelector(state => state.user)

  return (
    <div className={s.container}>
      <h1 className={s.welcome}> Welcome back, {user.firstName }!</h1>
      <div className={s.images}>
        <img src={photo1} className={s.main_image} alt="main-img" />
        <div className={s.image_container}>
          {
            photos.map((photo, i) => (
              <img
                key={'test_page'+i}
                src={photo}
                width="264"
                height="180"
                alt="small-img"
              />
            ))
          }
        </div>
      </div>
      <div className={s.info}>
        <div className={s.description}>
          <h3>What's New</h3>
          <p>
            Introducing the latest addition to our cutting-edge 3D room rendering software: Dynamic Lighting! With Dynamic Lighting, you can now bring your virtual rooms to life with realistic and immersive lighting effects. Whether you're designing a cozy living room, a sleek office space, or a futuristic sci-fi environment, Dynamic Lighting allows you to manipulate light sources in real-time, creating stunning visual effects and adding depth and realism to your virtual spaces.
          </p>
          <p>
            With just a few clicks, you can adjust the intensity, direction, and color of the light sources in your virtual room, casting dynamic shadows, creating highlights, and setting the mood exactly as you envision it. Experiment with different lighting scenarios to achieve the perfect ambiance for your scene, from warm and inviting to cool and dramatic.
            Get ready to elevate your designs with the power of light in our latest 3D room rendering feature!
          </p>

        </div>
        <div className={s.links}>
          <h3 className={s.links_title}>Fast links</h3>
          <div className={s.links_container}>
            {
              links.map(({ path, title, icon }) => (
                <Link
                  to={path}
                  key={title}
                  className={s.link}
                  style={{ backgroundImage: `url(${icon})` }}
                >
                  {title}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;