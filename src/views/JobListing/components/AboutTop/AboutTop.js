import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, } from '@material-ui/core';
import { Image , Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { colors } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: 400,
  },
}));

const AboutTop = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/premas_ceo_2_HRTFrMnum.png"
            alt="Find a Job"
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
         
            <SectionHeader
              title="Founder Chairman & CEO"
              
              subtitle="Avijit Singh"
              align="left"
            />
            <Typography align="left" variant="h6" color="textSecondary">
            Avijit was the Group Director, Eastern Hemisphere Operations for Gillette-Duracell and a management consultant with AT Kearney before becoming an entrepreneur. He is associated with several
             enterprises across the globe and has significant management experience of more than 30 years now
            </Typography>

            <br/>
            <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon fontIconClass="fab fa-facebook-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-twitter-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-linkedin" fontIconColor={colors.pink[50]} />

            </div>
          </div>
        </Grid>
      </Grid>

      <br/>
      <br/>
      <br/>
      <br/>

      <SectionHeader/>


      <div>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/premas_md_-NsxMsvR3.png"
            alt="Find a Job"
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
         
            <SectionHeader
              title="Managing Director & Founder"
              
              subtitle="Praveen Gupta"
              align="left"
            />
            <Typography align="left" variant="h6" color="textSecondary">
            Praveen has over 23 years of marketing experience in life science and molecular diagnostic arena handling solutions for cell biology, 
            proteomics, high-throughput screening and genomics. Praveen holds a Master’s degree in Genetics from Pune University coupled with a management degree from XLRI, Jamshedpur. His stints at Ranbaxy, Dr Reddys lab, Life Technologies Inc, Biorad and DSS has given him a fairly good insight of the Complex yet promising Indian biotech space.
            </Typography>

            <br/>
            <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon fontIconClass="fab fa-facebook-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-twitter-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-linkedin" fontIconColor={colors.pink[50]} />

            </div>
          </div>
        </Grid>
      </Grid>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>

      <SectionHeader/>


      <div>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/sanjayyadav_Gmj_sFDSd.png"
            alt="Find a Job"
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
         
            <SectionHeader
              title="VP - Support"
              
              subtitle="Sanjay Yadav"
              align="left"
            />
            <Typography align="left" variant="h6" color="textSecondary">
            Sanjay leads the pan- India Service Support in Premas. Having an experience of more than 21 years in the Lifesciences domain including his stints in leadership and service roles in Thermo Fisher Scientific.
             His problem-solving abilities are clearly seen in all aspects of work which has been instilled from his B. Tech days.
            </Typography>

            <br/>
            <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon fontIconClass="fab fa-facebook-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-twitter-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-linkedin" fontIconColor={colors.pink[50]} />

            </div>
          </div>
        </Grid>
      </Grid>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>

      <SectionHeader/>


      <div>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/groupproductmanager_sZoUWqksY.png"
            alt="Find a Job"
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
         
            <SectionHeader
              title="Group Product Manager"
              
              subtitle="Debjani Saha"
              align="left"
            />
            <Typography align="left" variant="h6" color="textSecondary">
            Debjani ventured from academia to industry, carrying a unique blend of technical expertise with product management. She holds a PhD in Molecular Biology from the renowned Indian Institute of Science, Bangalore. With over 8 years of work experience, she now heads the expansion and marketing of all product portfolios at Premas.Her in-depth knowledge of the 
            Biotechnology domain and innovative approach towards consultative selling sets her class apart
            </Typography>

            <br/>
            <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon fontIconClass="fab fa-facebook-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-twitter-square" fontIconColor={colors.pink[50]} />
            <Icon fontIconClass="fab fa-linkedin" fontIconColor={colors.pink[50]} />

            </div>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
    
  );
};

AboutTop.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutTop;
