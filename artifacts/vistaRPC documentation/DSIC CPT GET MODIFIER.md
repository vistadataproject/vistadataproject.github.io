---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT GET MODIFIER 

 property | value 
--- | --- 
 label | DSIC CPT GET MODIFIER
 tag | MOD
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | SINGLE VALUE
 description | This returns basic information for a MODIFIER, file 81.3

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MOD | LITERAL | 5 | true | This is the ifn or name of the MODIFIER, file 81.3 | 
| vs:Input_Parameter-8994_02 | CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. | 