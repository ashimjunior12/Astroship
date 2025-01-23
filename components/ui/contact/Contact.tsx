
import { Button } from "../button"
import { Input } from "../input"
import { Textarea } from "../textarea"



const contact = () => {
  
  return (
    <div className="flex gap-6 flex-col mt-16">
      <Input placeholder="Full Name" className="placeholder:text-black h-12 border border-gray-300"/>
      <Input placeholder="Email Address" className="border border-gray-300 placeholder:text-black h-12 "/>
      <Textarea placeholder="Your Message" className="placeholder:text-black h-48 text-wrap"/>
      <Button className="h-14">Send Message</Button>
    </div>
    
  )
}
export default contact
