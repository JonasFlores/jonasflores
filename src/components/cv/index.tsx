import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Card, Divider, Text } from "@nextui-org/react";
import AboutMeSection from "./aboutMe";
import JobSection from "./jobExperience";

export default function CV(){
    return(
        <>
        <Box css={{ py: '$10', px: '$15'}}>

            {/* My name */}
            <Flex direction={'column'} align={'center'} >
                <Text h1 css={{ lineHeight: '1', mb: '$0'}}>
                    Jonas Flores{' '}
                </Text>
                <Text h2 color="primary">
                    <span>&#60;</span>{' '}Software Developer{' '}/<span>&#62;</span>
                </Text>
            </Flex>

            {/* About me */}
            <Divider css={{my: '$10'}}/>
            <AboutMeSection />

            {/* Experience */}
            <Divider css={{my: '$10'}}/>
            <JobSection />
  
  
            {/* Education */}
            <Divider css={{my: '$10'}}/>
            <Flex css={{
                'gap': '$5',
                'mt': '$10',
                'flexWrap': 'wrap',
                "@sm": {
                    'flexWrap': 'nowrap',
                    'gap': '$10'
                }
            }}>
                <Card>
                <Card.Header>
                    <Text b>Patagonia Chocolates</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text b>Kitchen hand</Text>
                    <Text>Since July 2022</Text>
                </Card.Body>
                </Card>
                <Card>
                <Card.Header>
                    <Text b>Sispro | Brazil</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text b>Software Developer</Text>
                    <Text>Activities: ERP Tax development and analysis</Text>
                    <Text>January 2019 - February 2021</Text>
                </Card.Body>
                </Card>
                <Card>
                <Card.Header>
                    <Text b>Building Supplies Bom Sucesso | Brazil</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>Since July 2022</Text>
                    <Text>Kitchen hand</Text>
                </Card.Body>
                </Card>
            </Flex>
        </Box>
        </>
    )
}