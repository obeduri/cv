import {Inter} from 'next/font/google'
import {Avatar, Box, Grid, GridItem, Heading, List, ListItem,} from '@chakra-ui/react'
import React from "react";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Box>
            <Grid
                h='100vh'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(12, 1fr)'
                gap={4}
            >
                <GridItem colSpan={12} bg='tomato' p={6} pos={'relative'}>
                    <Avatar size='2' name='Segun Adebayo' src='/images/obed.png' pos={'absolute'} bottom={1}/>
                    <Heading as='h1' size='4xl' mb={6} noOfLines={1}>
                        Obed David Pérez Uri
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            Address: Urb. Miramar Sto. Dgo. D.N. Dominican Republic
                        </ListItem>
                        <ListItem>
                            E-mail: enobe220@gmail.com
                        </ListItem>
                        <ListItem>
                            Phone: +(1) 849 203 2200
                        </ListItem>
                    </List>
                </GridItem>
                <GridItem colSpan={6} bg='papayawhip'/>
                <GridItem colSpan={6} bg='papayawhip'/>
                <GridItem colSpan={6} bg='papayawhip'/>
                <GridItem colSpan={6} bg='papayawhip'/>
            </Grid>
        </Box>
    )
}
