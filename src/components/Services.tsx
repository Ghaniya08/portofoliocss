import React from 'react'
import "./Services.css"
import {FaYoutube , FaCode , FaDesktop , FaBook} from "react-icons/fa";
const Services = () => {
  return (
    <div id="servises">
    <div className="container">
        <h1 className="sub_title">My servises</h1>
        <div className="servises_list">
            <div>
                <FaCode className='text-3xl'/>
                <h2>𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭</h2>
                <p>As a skilled web developer, I craft robust, scalable, and efficient web applications that meet your business needs. With expertise in HTML, CSS, and JavaScript, I deliver high-quality solutions that drive results. From e-commerce platforms to custom web applications, I ll help you achieve your online goals.</p>
            </div>
            <div>
                <FaYoutube className='text-3xl'/>
                <h2>𝐌𝐚𝐤𝐢𝐧𝐠 𝐓𝐡𝐮𝐦𝐛𝐧𝐚𝐢𝐥</h2>
                <p>As a skilled thumbnail maker, I create eye-catching and engaging thumbnails that capture the essence of your content. My thumbnails are designed to increase click-through rates and drive more traffic to you website. With my expertise, you can elevate your brand s online presence and make a lasting</p>
            </div>
        </div>
        <div className="servises_list">
        <div>
                <FaDesktop className='text-3xl'/>
                <h2>𝐔𝐈/𝐔𝐗 𝐃𝐞𝐬𝐢𝐠𝐧𝐢𝐧𝐠</h2>
                <p>As a seasoned UI/UX designer, I specialize in creating intuitive and user-centered interfaces that enhance user experience. My designs are tailored to meet your business goals and ensure seamless interactions between your users and your digital products. From wireframing to prototyping, I ll work closely with you to bring your vision to life.</p>
            </div>
            <div>
                <FaBook className='text-3xl'/>
                <h2>𝐂𝐨𝐧𝐭𝐞𝐧𝐭 𝐖𝐫𝐢𝐭𝐢𝐧𝐠</h2>
                <p>With my content writing services, I produce high-quality, engaging, and informative content that resonates with your target audience. Whether you need blog posts, articles, website content, or social media posts, I ll craft compelling stories that drive results. My content is optimized for SEO, ensuring your brand s online visibility and credibility.</p>
            </div>
        </div>
       
    </div>
</div>
  )
}

export default Services
