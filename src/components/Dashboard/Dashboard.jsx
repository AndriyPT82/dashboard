import React from "react";
import './Dashboard.scss';
import dollar_icon from '../../utils/icons/dollar_icon.svg'
import phone_icon from '../../utils/icons/phone_icon.svg'
import saved_2_icon from '../../utils/icons/saved_2_icon.svg'
import { Link } from "react-router-dom";


const links = [
  { path: 'pricing_plans', title: 'Pricing plans', icon: dollar_icon },
  { path: 'contact_details', title: 'Contact details', icon: phone_icon },
  { path: 'saved_pictures', title: 'Saved pictures', icon: saved_2_icon }
]

export function Dashboard({ name = "James" }) {
  return (
    <div className="dashboard">
      <h2 className="dashboard__welcome"> Welcome back, {name}!</h2>
      <div className="dashboard__images">
        <img src={require('../../utils/images/photo1.png')} className="dashboard__main-photo" />
        <div className="dashboard__image-container">
          <img src={require('../../utils/images/photo2.png')} width="264" height="180" />
          <img src={require('../../utils/images/photo3.png')} width="264" height="180" />
          <img src={require('../../utils/images/photo4.png')} width="264" height="180" />
          <img src={require('../../utils/images/photo5.png')} width="264" height="180" />

        </div>
      </div>
      <div className="dashboard__info">
        <div className="dashboard__description">
          <h3>What's New</h3>
          <p>
            Introducing the latest addition to our cutting-edge 3D room rendering software: Dynamic Lighting! With Dynamic Lighting, you can now bring your virtual rooms to life with realistic and immersive lighting effects. Whether you're designing a cozy living room, a sleek office space, or a futuristic sci-fi environment, Dynamic Lighting allows you to manipulate light sources in real-time, creating stunning visual effects and adding depth and realism to your virtual spaces.
          </p>
          <p>
            With just a few clicks, you can adjust the intensity, direction, and color of the light sources in your virtual room, casting dynamic shadows, creating highlights, and setting the mood exactly as you envision it. Experiment with different lighting scenarios to achieve the perfect ambiance for your scene, from warm and inviting to cool and dramatic.
            Get ready to elevate your designs with the power of light in our latest 3D room rendering feature!
          </p>

        </div>
        <div className="dashboard__links">
          <h3 className="dashboard__links-title">Fast links</h3>
          <div className="dashboard__links-container">
            {
              links.map(({ path, title, icon }) => (
                <Link
                  to={path}
                  className="dashboard__link"
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

