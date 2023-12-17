import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import headerImg from '../assets/pexels-binyamin-mellish-186078.png';

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: '#3498db', // Change the background color to blue
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            <BoxText component='section'>
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#2c3e50', // Change the text color to a darker color
                }}
                >
                    We'll build the house of your dream
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#2c3e50', // Change the text color to a darker color
                }}
                >
                    We have 9000 more reviews, and our customers trust our property and quality products.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#2c3e50', // Change the border color to a darker color
                        color: '#fff',
                        backgroundColor: '#2c3e50', // Change the background color to a darker color
                        "&&:hover": {
                            backgroundColor: "#34495e", // Change the hover color to a darker shade
                        },
                        "&&:focus": {
                            backgroundColor: "#34495e", // Change the focus color to a darker shade
                        }
                    }}
                    >
                        buy now
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#2c3e50', // Change the text color to a darker color
                        backgroundColor: 'transparent',
                        borderColor: '#2c3e50', // Change the border color to a darker color
                        "&&:hover": {
                            color: '#34495e', // Change the hover color to a darker shade
                            borderColor: '#34495e', // Change the hover border color to a darker shade
                        },
                        "&&:focus": {
                            color: '#34495e', // Change the focus color to a darker shade
                            borderColor: '#34495e', // Change the focus border color to a darker shade
                        }
                    }}
                    >
                        explore
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header;
