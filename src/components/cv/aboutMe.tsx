import { Text } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export default function AboutMeSection(){
    return (
        <>
            <Flex direction={'column'} css={{gap: '$1', px: '$10' }}>
                <Text h3>About Me</Text>
                <Text span css={{color: '$accents8',}}>DOB: 01/02/1995</Text>
                <Text span css={{color: '$accents8',}}>I am very social person.</Text>
                <Text span css={{color: '$accents8',}}>I am a quick learner and always trying to improve my skills.</Text>
                <Text span css={{color: '$accents8',}}>I intend to stay here for a long time.</Text>
                <Text span css={{color: '$accents8',}}>Looking the right job where I can develop my technical and social skills.</Text>
                <Text b>Visa status: Work visa</Text>
            </Flex>
        </>
    )
}