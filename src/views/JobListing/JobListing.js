import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Box ,Grid , Typography} from '@material-ui/core';
import { HeroSideImage } from 'components/organisms';
import {
  AboutBottom,
  AboutMiddle,
  AboutTop,
  Advantages,
  Customers,
  Features,
  Hero,
  Jobs,
  Newsletter,
  Partners,
 
  PromoNumbers,
  PromoSwiper,
  
  TrustedCompanies,
} from './components';

import {
  partners,
 
  features,
  jobs,
  advantages,
  companies,
  promo,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  promoSection: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
}));

const JobListing = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>

      <Box marginBottom={0} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroSideImage imageSrc="https://ik.imagekit.io/j6phbjneuop/premasweb/LRM_EXPORT_16960852736595_20190716_173122977_sRkmLTnqO.jpeg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" >
              Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" >
              Download our overview and a member of our specialist team will be in touch.
            </Typography>
          </Grid>
        </Grid>
      </HeroSideImage>
      <br/>
      <br/>
      <SectionHeader
        title="
        Premas Life Sciences (PLS) is a young, dynamic, and focused organization introducing game-changing niche technologies in the field of Genomics, Cell Biology, and Biopharma to boost innovative research and diagnostics in India. We are also the knowledge partners to several reputed research institutes and hospitals, enabling them to set up core genomics facilities with complete support at all fronts. The biggest motivation behind the inception of PLS was to set up an organization that could
         contribute significantly to the life science research landscape in India, and have the convergence of a committed and highly skilled workforce to catalyze this process."
        subtitle="The foundation of Premas was laid down when ‘start-up culture’ was not a buzz 
        word. Two major obstacles that we faced were attracting talent as well as customers because for both the groups we were a new, unknown, and untested brand. Our vision for the future, our passion coupled with the technical prowess helped us establish faith in our customers ultimately conquering these hurdles down the line.

        "
      />


    </Box>


     
   
      
     
     
      <SectionAlternate>
        <AboutTop />
      </SectionAlternate>
      <Section className={classes.sectionNoPaddingTop}>
        <Partners data={partners} />
      </Section>
      <Section>
        <Jobs data={jobs} />
      </Section>
      <SectionAlternate>
        <PromoNumbers />
      </SectionAlternate>
      <AboutMiddle />
      <Section>
        <Features data={features} />
      </Section>
      <section className={classes.promoSection}>
        <PromoSwiper data={promo} />
      </section>
      <Section>
        <Advantages data={advantages} />
      </Section>
      <SectionAlternate>
        <TrustedCompanies data={companies} />
      </SectionAlternate>
      <AboutBottom />
      <Section>
        <Customers data={reviews} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  );
};

export default JobListing;
