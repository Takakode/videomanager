import React from "react";
import { Card, CardHeader, CardBody, Heading, StackDivider, Box, Stack, Text, Flex, Checkbox } from '@chakra-ui/react'

export function Video({video, onAddFavorite, onDeleteFavorite, isFavoriteList = false}) {


    function manageFavorite(e: React.ChangeEvent<HTMLInputElement>, video: any) {
        if(e.target.checked) {
            onAddFavorite(video)
        } else {
            onDeleteFavorite(video)
        }
    }

    return (
        <Card>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box>
                        <Heading size='md'>{video.title}</Heading>
                        </Box>
                    </Flex>
                    <Flex>
                        <Checkbox onChange={(e) => manageFavorite(e, video)} defaultChecked={isFavoriteList}>
                            Favorite
                        </Checkbox>
                    </Flex>
                </Flex>
            </CardHeader>
        
            <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                <Heading size='xs' textTransform='uppercase'>
                    Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {video.description}
                </Text>
                </Box>
            </Stack>
            </CardBody>
        </Card>       
    );
}