import Header from "../components/curriculum-vitae/header"

export default function Page(){
  return(
    <>
      <TestTypography header="text by props">
        <h1 className="font-bold text-4xl">Jonas Flores</h1>
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">Word h2</h2>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Word h3</h3>
        <h4 className="font-semibold text-md sm:text-lg md:text-xl">Word h4</h4>
        <h5>Word h5</h5>
        <h6>Word h6</h6>
        <p>Paragraph</p>
        <a href="">Link</a>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis repudiandae deserunt dolorem ex voluptatum voluptatibus, adipisci ratione labore, sit officiis corrupti iure eveniet explicabo consectetur itaque obcaecati vero nostrum unde.</p>
      </TestTypography>
    </>
  )
}

function TestHeaderCV(){
  return(
  <>
    <Header></Header>
  </>
  )
}

function TestTypography({children, header}:{children: React.ReactNode, header?: string}){
  return(<>

    <div className="">
      {children}

    </div>  
    </>)
}

function TestFlexBox(){
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