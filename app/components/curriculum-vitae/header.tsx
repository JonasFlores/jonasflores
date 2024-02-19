export default function Header(){
  return(
    <>
    <div className="my-10 text-center">
      <h1 className="font-semibold text-4xl tracking-widest text-slate-500">JONAS FLORES</h1>
      
      <h2 className="text-slate-500 font-medium text-xl tracking-widest"> 
        {'\u007B'}
          <span className="text-cyan-500"> SOFTWARE</span>
          <span className="text-orange-500"> DEVELOPER </span>
        {'\u007D'}
      </h2>

      <div className="mt-3 text-sm">
        <div className="text-pretty">4 Masons Court, Lower Shotover, Queenstown 9300</div> 
        <div className="mt-1">+64 022 097 1522</div>
        <div className="mt-1">jonas95nz@hotmail.com | linkedin.com/in/jonassflores</div>
      </div>
    </div>
    </>
  )
} 