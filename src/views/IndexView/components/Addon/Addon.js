import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Button from '@material-ui/core/Button';


export default function Example() {
  return (
    <Box bgcolor="text.secondry"  marginBottom={2} marginLeft={1} marginRight={1} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title={<>Featured Products</>}
        subtitle={<>The rare diseases community includes all of the stakeholders involved in the research and development and dissemination of products and information for the diagnosis, prevention or treatment of rare diseases or conditions.</>}
        ctaGroup={[ (
            <Button color="primary" variant="outlined">EXPLORE ALL PRODUCTS</Button>
        )]}
      />
    </Box>
  );
}
