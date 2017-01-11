---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT GET DETAIL DESC 

 property | value 
--- | --- 
 label | DSIC CPT GET DETAIL DESC
 tag | CPTD
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | ARRAY
 description | This returns the full description for a code

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format. | 
| DFN | LITERAL | 14 | true | This is the ien to the PATIENT file.  It is not used at this time. | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. | 




Generated on January 11th 2017, 6:34:23 am