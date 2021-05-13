import React from 'react'
import { Container, Typography, CssBaseline, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Gallery(props) {
    return (
        <>

            <Typography variant="h2" style={{ marginTop: "10%", paddingBottom: "10%" }} align="center" >  <b>Gallery</b> </Typography>

            <Container className="Cbox" maxWidth="xl" style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "100% 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-25%",
                flexDirection: props.direction
            }} >

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg1,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg2,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>


            </Container>


            <Container className="Cbox" maxWidth="xl" style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "100% 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: props.row2margintop,
                flexDirection: props.direction
            }} >

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg3,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg4,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>


            </Container>


            <Container className="Cbox" maxWidth="xl" style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "100% 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: props.row2margintop,
                flexDirection: props.direction
            }} >

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg5,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>

                <Container className = "Gimg" maxWidth="xl" style={{
                    width: props.imgwidth,
                    height: "50vh",
                    background: props.bg6,
                    backgroundSize: "100% 100%",
                    marginTop: "20%",
                    borderRadius: "50px"
                }}>
                </Container>


            </Container>



        </>
    )
}

export default Gallery;