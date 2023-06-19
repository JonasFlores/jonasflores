import { Text } from "@nextui-org/react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { ILandingScreenProps } from "../../shared/interfaces/landing";
import { NextPage } from "next";

const LandingScreen: NextPage<ILandingScreenProps> = ({title, description}: ILandingScreenProps) => {

    return(
        <Box css={{py: '$24'}}>
            <Flex justify={'center'}>
                <Box css={{textAlign: 'center'}}>
                    <Text h1>{title}</Text>
                    <Text b>{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default LandingScreen