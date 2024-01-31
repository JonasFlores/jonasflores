export default function Page(){
  return(
    <>
    <h1 className="leading-normal text-center">Testing Flex Box with TailWindCSS</h1>
    <br />
      <div className="flex flex-row">
        <div className="basis-1/4 hover:basis-1/2 bg-purple-400">
          1
        </div>
        <div className="basis-1/2 bg-purple-900">
          2
        </div>
        
      </div>
    </>
  )
}