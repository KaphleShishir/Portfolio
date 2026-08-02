import { ArrowUpRight } from 'lucide-react';

const Card = (props) => {
    const isBlack = (Math.floor(props.number/2)%2==0 && props.number%2==1) || (Math.floor(props.number/2)%2==1 && props.number%2==0)
    const row = Math.floor(props.number/2)
    const col = props.number%2
  return (
    <a
      href={props.link || 'https://github.com/KaphleShishir'}
      target='_blank'
      rel='noreferrer'
      className={`row_${row} col_${col} flex justify-between w-full md:w-[45vw] border-2 h-65 border-black rounded-3xl shadow-[0_7px_0_0_black] py-6 pl-12 pr-3 ${isBlack ? "bg-black" : "bg-transparent"}`}
    >
        <div className='h-full w-2/3 flex flex-col justify-between items-start'>
            <div>
              <h2 className={`font-semibold text-3xl ${isBlack ? "text-white" : "text-black"} leading-tight`}>{props.title}</h2>
              <p className={`text-sm italic mt-2 ${isBlack ? "text-gray-300" : "text-gray-500"}`}>{props.description}</p>
            </div>
           <div className='flex gap-4 items-center'>
                <ArrowUpRight size={40} strokeWidth={5} color={`${isBlack ? "black" : "white"}`} className={`${isBlack ? "bg-white" : "bg-black"} p-2 rounded-full`}/>
                <p className={`font-semibold ${isBlack ? "text-white" : "text-black"}`}>View on GitHub</p>
           </div>
        </div>
    </a>
  )
}

export default Card
