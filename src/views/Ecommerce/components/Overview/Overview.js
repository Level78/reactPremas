import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

import { Box } from '@material-ui/core';
import { Accordion } from 'components/organisms';

const items = [{
  id: 'faq-1',
  title: 'Specification',
  subtitle: 'The smallest, most affordable Illumina sequencing system delivers fast and efficient lowthroughput sequencing for virtually any lab.',
  text: 'Rapid Data Generation run smaller projects on a dedicated, low-throughput instrument with fast turnaround times.Convenient Library Quality and Proof-of-Principle Testing Evaluate library quality before large runs, perform pilot studies, or generate grant submission data.Independent, Convenient Operations control the sequencing process from beginning to end and maintain an independent sequencing schedule instead of outsourcing.High Analytical Sensitivity and Exceptional Data Accuracy Leverage higher analytical sensitivity forthe detection of rare variants and transcripts compared to qPCR orSanger sequencing1',
  link: 'Check it out',
}, {
  id: 'faq-2',
  title: 'Snacks, drinks, coffee, and more.',
  subtitle: 'Our new key fobs make it so easy!',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  link: 'Check it out',
}, {
  id: 'faq-3',
  title: 'On site tech support.',
  subtitle: 'Our new key fobs make it so easy!',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  link: 'Check it out',
}, ];

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
  },
  image: {
    objectFit: 'contain',
    maxWidth: '90%',
    width: 300,
  },
  imageLeft: {
    objectFit: 'cover',
  },
  copy: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 2),
  },
}));

const Overview = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container data-aos="fade-up">
        <Grid item container alignItems="flex-start" xs={12} md={4}>
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/iSEQ100_1__RiBoaYuGJ.png"
            srcSet="https://ik.imagekit.io/j6phbjneuop/premasweb/iSEQ100_1__RiBoaYuGJ.png"
            className={clsx(classes.image, classes.imageLeft)}
            lazy={false}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          className={classes.copy}
        >
          <p>ILLUMINIA</p>
          <SectionHeader
            title={
              <span className={clsx(classes.textWhite, classes.title)}>
             ISEQ 100 SYSTEM 
            
              </span>
            
            }
            />
            <SectionHeader
            subtitle={
              <span className={classes.textWhite}>
               The smallest, most affordable Illumina sequencing system delivers fast and efficient 
               lowthroughput sequencing for virtually any lab
              </span>
            }
            ctaGroup={[
              <Button variant="contained" color="default" size="large">
               Explore QuickBook
              </Button>,
            ]}
            align="center"
            disableGutter
          />
       
        </Grid>
        <Box marginBottom={0} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="0px solid #ccc" borderRadius="4px">
      <Accordion items={items} />
    </Box>
        <Grid item container justify="flex-end" xs={12} md={4}>
        
        </Grid>
      </Grid>
    </div>
  );
};

Overview.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Overview;
