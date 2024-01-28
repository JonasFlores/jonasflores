import { Collapse, Text } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export default function JobSection(){
    return (
        <>
            <Flex direction={'column'} css={{gap: '$1', px: '$10' }}>
                {/* <Flex> */}
                    <Text h3>Experience</Text>
                {/* </Flex> */}
                {/* <Flex> */}
                    <Collapse
                    bordered
                    title="Option"
                    subtitle="More description about Option"
                    >
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                    </Collapse>

                    <Collapse.Group bordered>
                    <Collapse title="Option A">
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Option B">
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Option C">
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    </Collapse.Group>
                {/* </Flex> */}
            </Flex>
        
        </>
    )
}