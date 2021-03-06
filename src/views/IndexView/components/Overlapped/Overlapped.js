

import React from 'react';
import { Box } from '@material-ui/core';
import { OverlapedImages } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2}  borderRadius="4px">
      <OverlapedImages
        image1={{
            src: 'https://ik.imagekit.io/j6phbjneuop/PLS_Gallery_New_Pic_2_Fw7foyMjx.jpeg',
            srcSet: 'https://ik.imagekit.io/j6phbjneuop/PLS_Gallery_New_Pic_2_Fw7foyMjx.jpeg',
            alt: '...',
        }}
        image2={{
            src: 'https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_16960852736595_20190716_173122977_M3mfdE-_w.jpeg',
            srcSet: 'https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_16960852736595_20190716_173122977_M3mfdE-_w.jpeg',
            alt: '...',
        }}
        image3={{
            src: 'https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_29731947359915_20190705_002835450_s1TZjkv9a.jpeg',
            srcSet: 'https://ik.imagekit.io/j6phbjneuop/LRM_EXPORT_29731947359915_20190705_002835450_s1TZjkv9a.jpeg',
            alt: '...',
        }}
      />
    </Box>
  );
}