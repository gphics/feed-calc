import FirstHero from "./assets/farm-calc-hero.jfif"
import SecondHero from "./assets/farm-calc.jfif"
import Nav from "./Nav"
function Home() {
    const rand = Math.floor(Math.random() * 2)
    const heroArr = [FirstHero, SecondHero]
    return (
        <div className='home-page'>
            <Nav />
            <main className="home-main">
                <section className='home-intro'>
                    <p>Farm calc is a website that enables farmers to get an estimate of the total input needed for their intended farm cultivation and also get the estimate for the farm total output.
                    </p>
                    <a href="/calc" className="get-started-link">get started now</a>
                </section>
                <section className='home-hero'>
                    <img src={heroArr[rand]} alt="farm-calc-hero" />
                </section>
            </main>
        </div>
    )
}

export default Home