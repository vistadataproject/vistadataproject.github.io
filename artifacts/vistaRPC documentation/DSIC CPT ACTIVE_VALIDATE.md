---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT ACTIVE_VALIDATE 

 property | value 
--- | --- 
 label | DSIC CPT ACTIVE_VALIDATE
 tag | ACTIVE
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | SINGLE VALUE
 description | This will tell you whether or not a CPT code is active as of the date that you pass in.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code from file 81 in either internal or external format. | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. | 
| SRC | LITERAL | 1 | true | This boolean flag (1 or 0) indicates whether or not Level III codes should be screened out.  If SCR=1 then allow Level III codes.  Default value is 0. | 