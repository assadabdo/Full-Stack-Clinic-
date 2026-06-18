import './Landing.css'
import logo from '../Navbar/clinic-logo.jpeg'

export const Landing = ()=> {
    return(
<div className="hero-gradient">
    <div className='landing'>
        <div className='content'>
            <div className='hero'>رعاية صحية متكاملة وموثوقة </div>
            <div className='intro'><span>مركز</span><span>العاليابي</span> الطبي المتخصص</div>


           
            <div className='desc'>نقدم لكم رعاية صحية شاملة بايدي نخبة من الأطباء المتخصصين مع احدث التقنيات الطبية لضمان صحتكم وراحتكم.

            </div>
            <div className='buttons'>
                <button>احجز موعدك</button>
                <button>تعرف علينا</button>
            </div>
        </div>
        <div className='animation'>
         
              <img className='animated-img' src={logo} alt='no image'/>
        
        </div>

    </div>
    <div className='desc-boxes'>
        <div>
            <span>+5000</span>
            <span>مريض سعيد</span>
        </div>
        <div>
            <span>+20</span>
            <span> طبيب متخصص</span>
        </div>
        <div> <span>+15</span>
            <span>قسم طبي</span></div>
        <div><span>24/7</span>
            <span>خدمة مستمرة</span></div>
    </div>
</div>

    )
}