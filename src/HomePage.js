import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { colors } from './common';

const useHomeInfoStyles = makeStyles({
  homeInfo: {
    width: "90%",
    fontSize: "1.25em",
    display: "flex",
  },
  infoHeader: {
    borderRadius: ".3em",
    backgroundColor: colors.secondary,
    color: colors.white,
    padding: ".25em",
    marginTop: "1.3em",
    margin: "1em 0 1em 0 ",
  },
  infoContent: {
    textAlign: "center",
    lineHeight: "1.4em",
    maxWidth: "100%",
    height: "auto",
  },
});

function HomeInfo() {
  const classes = useHomeInfoStyles();

  return (
    <div style={{marginRight: "1em"}}>
      <h2 className={classes.infoHeader}>About Us</h2>
      <p className={classes.infoContent}><strong style={{color: colors.primary}}>A Ya So Nice</strong> commits itself to the food and culture that is rooted in Jamaica.<br/>
We have welcomed an authentic Jamaican style to Delaware that is known for recipes passed down from generation to generation. Although the premier destination in the Caribbean is not near, the
<br/><br/>
Jamaican traditions and hospitality are kept live in every bite. <strong style={{color: colors.primary}}>A Ya So Nice</strong> is the ideal family-friendly destination for anyone in search of an authentic Jamaican restaurant that offers a
full menu with accommodation of almost any plate. </p>
      <img className={classes.infoContent} alt="ayasonice_logo" src="http://ayasonice.com/files/resized/632018/1170;1779;08f8f456ae7039e7486ed43030db38bef7df7a5f.png" />
    </div>
  );
}

const useExternalLinkStyles = makeStyles({
  exLinkSection: {
    width: "50%",
  },
  exLinkBox: {
    borderRadius: ".3em",
    backgroundColor: colors.secondary,
    color: colors.white,
    padding: ".3em",
    marginTop: "1.3em",
    margin: "1em 0 1em 0 ",
  },
  exLinkButton: {
    color: colors.white,
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline",
    }
  },
});

function ExternalLinks() {
  const classes = useExternalLinkStyles();

  const elData = [
    { key: "Google",    title: "Review Us! Google",    link: "https://www.google.com/maps/place/A+Ya+So+Nice:+Authentic+Jamaican+Food/@39.6590817,-75.6142679,17z/data=!4m5!3m4!1s0x89c70363d014cbc7:0x1abb76f403c6d7ed!8m2!3d39.6590817!4d-75.6120792?hl=en-US" },
    { key: "Yelp",      title: "Review Us! Yelp",      link: "https://www.yelp.com/biz/a-ya-so-nice-authentic-jamaican-food-new-castle" },
    { key: "Instagram", title: "Follow Us! Instagram", link: "https://www.instagram.com/ayasonice165/" },
    { key: "Facebook",  title: "Like Us! Facebook",    link: "#" },
  ];

  return ( 
    <div className={classes.exLinkSection}>
      {elData.map((el) =>
        <div className={classes.exLinkBox} key={el.key}>
          <h2 style={{margin: "0px"}}>
            <a className={classes.exLinkButton} href={el.link}>{el.title}</a>
          </h2>
        </div>
      )}
    </div>
  )
}

function HomePage() {
  const classes = useHomeInfoStyles();

  return (
    <Container classes={{root: classes.homeInfo}}>
      <HomeInfo />
      <ExternalLinks />
    </Container>
  )
}

export default HomePage;