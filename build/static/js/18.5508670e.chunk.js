(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[18],{711:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return l}));var r=o(1),n=o(0),i=(o(2),o(691)),a=o(663),s=o(152),p=o(5),c=[{name:"primaryCta",type:"node",default:"",description:"Primary CTA of the list"},{name:"title",type:"string",default:"",description:"Title of the list"},{name:"align",type:"enum",default:"center",description:"Alignment of the items. One of: left, right, center"},{name:"buttonGroupProps",type:"object",default:"",description:"Additional properties to pass to the button group div container"},{name:"className",type:"string",default:"",description:"External classes"},{name:"primaryButtonWrapperProps",type:"object",default:"",description:"Additional properties to pass to the primary button wrapper div container"},{name:"secondaryButtonWrapperProps",type:"object",default:"",description:"Additional properties to pass to the secondary button wrapper div container"},{name:"secondaryCta",type:"node",default:"",description:"Secondary CTA of the list"},{name:"subtitle",type:"string",default:"",description:"Subtitle of the list"},{name:"subtitleProps",type:"object",default:"",description:"Additional properties to pass to the subtitle Typography components"},{name:"titleProps",type:"object",default:"",description:"Additional properties to pass to the title Typography components"},{name:"wrapperProps",type:"object",default:"",description:"Additional properties to pass to the wrapper Grid item components"}],l=function(t){var e=Object.assign({},t);return Object(n.jsxs)("div",Object(r.a)(Object(r.a)({},e),{},{children:[Object(n.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(n.jsx)(s.b,{title:"DescriptionCta",path:"src/components/molecules/DescriptionCta/DescriptionCta.js",description:"Component to display the description with CTA's"})}),Object(n.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(n.jsx)(s.a,{code:"\nimport { DescriptionCta } from 'components/molecules';\n// or\nimport DescriptionCta from 'components/molecules/DescriptionCta';\n"})}),Object(n.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(n.jsx)(s.d,{dataProperties:c})}),Object(n.jsx)(s.e,{title:"Example",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(p.b,{title:"Apply in 15 minutes",subtitle:"Get your dream job without the hassle.",primaryCta:Object(n.jsx)(a.a,{variant:"outlined",color:"primary",size:"large",children:"Learn More"}),secondaryCta:Object(n.jsx)(a.a,{variant:"contained",color:"primary",size:"large",children:"Apply now"}),align:"left"})}),Object(n.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, Button } from \'@material-ui/core\';\nimport { DescriptionCta } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionCta\n          title="Apply in 15 minutes"\n          subtitle="Get your dream job without the hassle."\n          primaryCta={<Button variant="outlined" color="primary" size="large">Learn More</Button>}\n          secondaryCta={<Button variant="contained" color="primary" size="large">Apply now</Button>}\n          align="left"\n      />\n    </Box>\n  );\n}\n'})]})})]}))}}}]);