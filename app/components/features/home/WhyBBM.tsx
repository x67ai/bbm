import { Button } from "~/components/ui/button"

const WhyBBM = () => {
  return (
    <div className="bg-black2 text-white ">  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-30">
        <div>
            <h1>Why BBM is More Than Just a Club</h1>
            <p>BBM is India’s premium motorcycling platform combining a vetted rider community, exclusive group rides, handpicked gear, and member-only discounts. Whether you ride for thrill, brotherhood, or style.
BBM connects it all under one roof.</p>
<Button>Learn More</Button>
        </div>
        <div>
            <img className="w-[612px] h-[384px]" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Why BBM Image" />
        </div>
    </div></div>
  
  )
}

export default WhyBBM