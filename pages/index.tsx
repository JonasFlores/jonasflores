import Head from "next/head"
import LandingScreen from "../src/components/landing"
import { useEffect, useState } from "react"
import { ILandingScreenProps } from "../src/shared/interfaces/landing"

export default function LandingPage(){

    const [props, setProps] = useState<ILandingScreenProps>({
        title: "No DB Conection found",
        description: "Please initialize the server API",
    })

    useEffect(() => {
        
        fetch("http://localhost:3000/pages?page=index")
            .then(res => res.json())
            .then(data => {
                setProps(data[0])
            })
            .catch(err => {
                console.log("Fetch error: " + err)
            })
    },[])


    return(
    <>
        <Head>
            <title>{props.head_title ? props.head_title : "Title not found" }</title>
        </Head>
        <LandingScreen description={props.description} title={props.title}/>
    </>
    )
}