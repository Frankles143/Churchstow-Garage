import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

// import Mechanic from '../images/Mechanic.jpg'
import Engine from '../images/Engine2.jpg'
import BobOne from '../images/Bob1.png'
import BobTwo from '../images/Bob2.png'

const useStyles = makeStyles(theme => ({

    title: {
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
        color: "#800020",
        fontWeight: "600",
    },
    subtitle: {
        marginBottom: "1.5rem",
    },
    homeImage: {
        width: "100%",
        height: "500px",
        objectFit: "cover",
        marginBottom: "2rem",
    },
    contact: {
        marginTop: "2rem"
    },
    map: {
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            height: "400px"
        },
        [theme.breakpoints.up('md')]: {
            height: "500px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "600px"
        },
    },
    bobContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    bob: {
        [theme.breakpoints.up('xs')]: {
            height: "200px"
        },
        [theme.breakpoints.up('md')]: {
            height: "400px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "600px"
        },
    }

}))

export const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Typography variant="h2" className={classes.title}>
                Churchstow Garage
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Everything from MOTS/services to repairs,<br /> whatever you need from your local, trustworthy garage!
            </Typography>

            <img src={Engine} className={classes.homeImage} alt="Mechanic looking at an engine" />

            <Divider />
            <br />

            <Typography variant="h6" style={{ color: "#800020" }}>
                Contact us
            </Typography>
            <br />

            {/* Embedded Google map */}
            <div className={classes.map}>
                <iframe
                    title="Map to the garage"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.89786791807506!2d-3.805046645047311!3d50.29774408676491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE3JzUxLjkiTiAzwrA0OCcxOC42Ilc!5e0!3m2!1sen!2suk!4v1636112137032!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"></iframe>
            </div>

            <Grid container className={classes.bobContainer}>
                <img src={BobOne} className={classes.bob} style={{marginRight: "-2px"}} alt="Owner Bob with a car"/>
                <img src={BobTwo} className={classes.bob} alt="The garage sign that reads Churchstow Garage Limited"/>
            </Grid>

            <Grid container className={classes.contact}>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Contact
                    </Typography>

                    01548 464001
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Address
                    </Typography>

                    Unit 4D, <br />
                    South Hams Business Park,<br />
                    Churchstow, <br />
                    Kingsbridge <br />
                    TQ7 3QH
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h6">
                        Opening Hours
                    </Typography>

                    Monday - Friday: 8:30am - 5:30pm <br />
                    Saturday: 9am - 1pm <br />
                    Sunday: Closed
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Home;