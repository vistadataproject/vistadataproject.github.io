---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC ICD9 ACTIVE 

 property | value 
--- | --- 
 label | DSIC ICD9 ACTIVE
 tag | ACTICD
 routine | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
 return value type | SINGLE VALUE
 description | Verify that an ICD9 code is active as of a certain date

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VICD | LITERAL | 7 | true | This is the ifn or .01 field value from the DIAGNOSIS file (#80 - ^ICD9) | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time. | 




 ###### Generated on January 11th 2017, 6:39:43 am