import { Box } from "../styles/box"
import { Faq } from "./components/faq"
import { Features1 } from "./components/features1"
import { Features2 } from "./components/features2"
import { Features3 } from "./components/features3"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Plans } from "./components/plans"
import { Statistics } from "./components/statistics"
import { Testimonials } from "./components/tesminonials"
import { Trial } from "./components/trial"
import { Trusted } from "./components/trusted"
export default function LandingTemplateScreen(){
    return (
    <Box css={{maxW: '100%',background: '$background',}}>
        <Box as="main">
            <Hero />
            <Trusted />
            <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            <Plans />
            <Faq />
            <Trial />
            <Footer />
         </Box>
    
    
    </Box>
    )
}