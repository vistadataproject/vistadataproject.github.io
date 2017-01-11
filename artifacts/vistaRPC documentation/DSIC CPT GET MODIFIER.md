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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MOD | LITERAL | 5 | true | This is the ifn or name of the MODIFIER, file 81.3 | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. | 




 Generated on January 11th 2017, 7:15:04 am