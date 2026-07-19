import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiGithub
} from 'react-icons/si';
import { FaCss } from "react-icons/fa6";

const icons = [
                    <SiHtml5 size={40} color='#696969'/>,
                    <FaCss size={40} color='#696969'/>,
                    <SiJavascript size={40} color='#696969'/>,
                    <SiReact size={40} color='#696969'/>,
                    <SiTailwindcss size={40} color='#696969'/>,
                    <SiNodedotjs size={40} color='#696969'/>,
                    <SiMongodb size={40} color='#696969'/>,
                    <SiExpress size={40} color='#696969'/>,
                    <SiGithub size={40} color='#696969'/>
]

function Skills() {
    return (
        <main className="w-150 pt-24 max-lg:w-full max-lg:p-4 max-lg:pt-28 ">
            <div className="p-4 bg-neutral-900/30 border border-neutral-600 rounded-2xl">
                <div className="pb-8">
                    <h2 className="text-2xl font-bold text-mauve-200 ">Le mie competenze</h2>
                </div>
                <div className='grid grid-cols-4 gap-8 cursor-pointer' >
                    {
                        icons.map((items, i) =>(
                            <div  key={i}>
                                <li className='p-4 bg-neutral-800 rounded-xl'>{items}</li>   
                            </div>
                        ))
                    }

                </div>
                   <div>
                 <div className="py-8">
                    <h2 className="text-2xl font-bold text-mauve-200 ">Certificazioni</h2>
                </div>
           
           <div className='grid grid-cols-2'>
 <div className='p-2 w-full bg-neutral-800 rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-110'>
             <img src="public/assets/20260715_212202.png" alt="certificato-bootcamp" className='w-72'/>
                </div>
           </div>
               
            </div>
            </div>
         
        </main>
    )
}

export default Skills
