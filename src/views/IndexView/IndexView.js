import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { GetStarted,  Reviews,  Services, Hero } from './components';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';
import {  Grid, Typography } from '@material-ui/core';
import  Example  from './components/Addon';
import { SectionHeader } from 'components/molecules';
import Overlapped from './components/Overlapped'




const item = {
  images: [{
      src: 'https://ik.imagekit.io/j6phbjneuop/controller-front_cL1ezyGhL.png',
      alt: '10x genomics', 
  }, {
      src: 'https://ik.imagekit.io/j6phbjneuop/Controller1_Eo-BKTUkR.jpg',
      alt: '10x genomics', 
  }, {
      src: 'https://ik.imagekit.io/j6phbjneuop/Controller3_izbzohoQO.jpg',
      alt: '10x genomics', 
  }],
  title: 'Chromium Controller',
  address: 'Compact , Sleek And Efficient the Chromium Controller uses advanced microfluidics to perform single cell partitioning and barcoding in a matter of minutes. Powered by Next GEM technology, the Chromium Controller enables integrated analysis of single cells at massive scale.',
  price: '$980 / month',
};

const Novaseq= {
  images: [{
      src: 'https://ik.imagekit.io/j6phbjneuop/novaseq-6000-front-center-down_U22NV2YKh.png',
      alt: 'Novaseq', 
  }, {
      src: 'https://ik.imagekit.io/j6phbjneuop/novaseq-6000-rendering-front-open-web-graphic_px3P0F63x.png',
      alt: 'Novaseq', 
  }, {
      src: 'https://ik.imagekit.io/j6phbjneuop/novaseq-overview-web-graphic-4_dNt4zEQU3.jpg',
      alt: 'Novaseq', 
  }],
  title: 'Novaseq600',
  address: 'Scalable throughout any flexibility for virtually any genome , sequencing method, and scale of the project. NovaSeq 6000 Sequencing System is by far our most powerful instrument, designed to adapt to your needs so groundbreaking discoveries are always within reach.',
  price: '$980 / month',
};


const Juno = {
  images: [{
      src: 'https://ik.imagekit.io/j6phbjneuop/junofamily-600_9uRdSqGQh.jpg',
      alt: 'juno', },{
      src: 'https://ik.imagekit.io/j6phbjneuop/DSC2064_LKLwor7Uxw.jpg',
      alt: 'juno', 
  }, {
      src: 'https://ik.imagekit.io/j6phbjneuop/100-5763_pEQrSXjxv.jpg',
      alt: 'juno', 
  }],
  title: 'JUNO',
  address: 'Increase productivity and efficiency with automated,cost-effective,and easy-to-use workflows for targeted DNAnext-generation sequencing(NGS) library preparation, gene expression analysis and genotyping by allele-specific PCR',
  price: '$980 / month',

};



const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />

     
   
      <Services />

      <Example/>
      <div   style={{ display:'flex', justifyContent:'center' }}>
 
        



    
      
      <CardProduct
        style={{ maxWidth: 400 } }
      
        
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
     
   
      </div>
      <br/>
      <br/>
      <div style={{ display:'flex', justifyContent:'center' }}>
        

 
      <CardProduct
        style={{ maxWidth: 400 }}
        mediaContent={(
          <>
            <SwiperImage
              items={Novaseq.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {Novaseq.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {Novaseq.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{Novaseq.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
   
      </div>
      <br/>
      <br/>

      <div style={{ display:'flex', justifyContent:'center' }}>
        

 
        <CardProduct
          style={{ maxWidth: 400 }}
          mediaContent={(
            <>
              <SwiperImage
                items={Juno.images}
              />
              <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '20px' }}>
                <Typography variant="body1" color="primary">
                  {Juno.price}
                </Typography>
              </div>
            </>
          )}
          cardContent={(
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary" align="left">
                  {Juno.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary" align="left">{Juno.address}</Typography>
              </Grid>
            </Grid>
          )}
        />
    
        </div>
        <br/>
      <br/>
        <SectionAlternate>
        <SectionHeader title="WHO WE ARE" />
          
        <Overlapped/>
       
          <SectionHeader 
          
        subtitle="Incepted in 2011 by a team of highly experienced and proficient professionals, Premas Life Sciences Pvt Ltd (PLS) is a young and focused Life Science company based out of Delhi, with a vision to be the technology & knowledge partners for Indian research & clinical diagnostics community.
        Premas Life sciences endeavors to bring to researchers and innovation-focused organisations cutting edge tools for applications across human health, agriculture, pharma, environment, forensics, energy and much more. With the advent of the era of genomics & proteomics, leveraging the latest technology to gain an edge in mining and interpreting information has become imperative. With our ensemble range of products, we facilitate to answer the vital questions of people's research using some of the smartest tools from across the world.
        Our dynamic portfolio of leading global technologies boasts of some of the most exciting genomics, genetics and cell biology applications, manufactured by global giants like Illumina, Fluidigm, 10X genomics etc.. has tremendously boosted the popularity of the company. Over the years, PLS’s dedicated and persistent client-centric approach has transformed this enterprise from a young start-up to an established leader with a CAGR of 60% in a very short span of time."
      />

    
        </SectionAlternate>
        
     
      {/* <SectionAlternate>
        <Features />
      </SectionAlternate> */}
      <Section>
        <Reviews />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted />
      </Section>
    </div>
  );
};

export default IndexView;
