import "./about.css"
import Ln from "../../img/linux-original.svg"
import Csh from "../../img/cplusplus-plain.svg"
import Bst from  "../../img/bootstrap-plain.svg"
import Ht5 from  "../../img/html5-plain.svg"
import Js from  "../../img/javascript-plain.svg"
import Mg from  "../../img/mongodb-original-wordmark.svg"
import My from  "../../img/mysql-plain.svg"
import Ng from  "../../img/nginx-original.svg"
import Nd from  "../../img/nodejs-plain.svg"
import Rc from  "../../img/react-original.svg"
import Ph from  "../../img/php-plain.svg"



import Me from "../../img/me_player.jpg"
export const About = () => {
  return (

<div className='a'>
<div className="a-left">

<div className="a-card bg"></div>

<div className="a-card">
<img src={Me} alt="" className="a-img" />
</div>
</div>

<div className="a-right">

<h1 className="a-title">About Me</h1>

<p className="a-sub">Im student of engineering at UNSAM, Backend Developer JS Php.</p>

<p className="a-desc">Have 2 years experience like IT HelpDesk
and less of one year like Dev, in this moments im looking an job in Backend Dev.</p>


<div className="tech">

<div className="a-tech-texts">
<h1 className="a-title">Skills</h1>
<img src={Js} alt="" className="a-tech-img" />
<img src={Ht5} alt="" className="a-tech-img" />
<img src={Bst} alt="" className="a-tech-img" />

<img src={Csh} alt="" className="a-tech-img" />
<img src={Ph} alt="" className="a-tech-img" />

<img src={My} alt="" className="a-tech-img" />
<img src={Mg} alt="" className="a-tech-img" />
<img src={Ng} alt="" className="a-tech-img" />

<img src={Nd} alt="" className="a-tech-img" />
<img src={Rc} alt="" className="a-tech-img" />
</div>
</div>

</div>
</div>
  )
}
export default About