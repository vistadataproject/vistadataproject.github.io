---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT MOD PAIR 

 property | value 
--- | --- 
 label | DSIC CPT MOD PAIR
 tag | MODP
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | SINGLE VALUE
 description | This will check to see if a modifier can be used with a code as of the input date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 7 | true | This is the ifn or CPT code name (file 81) | 
| MOD | LITERAL | 5 | true | This is the ifn or modifier .01 field value from file 81.3 | 
| MFT | LITERAL | 1 | true | This parameter works in conjunction with the MOD parameter.Default value = \E\If MFT=\E\ then MOD parameter is an .01 field value for file 81.3If MFT=\I\ then MOD parameter is an ifn value for file 81.3 | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the CPT/Modifier pair was acceptable as of that date. | 




 Generated on January 11th 2017, 7:15:04 am