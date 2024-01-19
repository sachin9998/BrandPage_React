import '../App.css'

const Hero = () => {
    return <main className="hero container">

        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>

            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Availble On</p>

                <div className="brand-icons">
                    <img src="/public/images/amazon.png" alt="Amazon Logo"></img>
                    <img src="/public/images/flipkart.png" alt="Flipkart Logo"></img>
                </div>
            </div>

        </div>

        <div className="hero-image">
            <img src="/public/images/hero-image.png" alt="Nike Shoes"></img>
        </div>


    </main>
}

export default Hero;