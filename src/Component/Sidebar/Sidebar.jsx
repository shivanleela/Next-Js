
import './Sidebar.css'
import { CiSearch} from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";


const Sidebar = () => {
  return (
    <>
    <aside>
        <h4>Filter Templates</h4>
        <div className='icon'> 
        <p><CiSearch/></p>
        <input type="text" placeholder='Search....'/>
        </div>
        <hr />
        <p><IoIosArrowForward/>Use Case</p>
        <hr />
        <p><IoIosArrowForward/>Framework</p>
        <hr />
        <p><IoIosArrowForward/>CSS</p>
        <hr />
        <p><IoIosArrowForward/>Database</p>
        <hr />
        <p><IoIosArrowForward/>CMS</p>
        <hr />
        <p><IoIosArrowForward/>Authentication</p>
        <hr />
        <p><IoIosArrowForward/>Analytics</p>

    </aside>
    
    
    </>
  )
}

export default Sidebar