---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XIP 

 property | value 
--- | --- 
 label | DSIC XIP
 tag | ZIPCODE
 routine | [DSICXIP](http://code.osehra.org/dox/Routine_DSICXIP_source.html)
 return value type | SINGLE VALUE
 description | This returns address demographics for a 5 or 9 digit zip codeThe return value is for the primary location associated with the ZIP code. if an error:  -1 ^ ERROR MESSAGE if OK:   Input ZIP code ^ city ^ state ^ county ^ FIPS county code the return is for the primary location associated with the ZIP code.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ZIPCODE | LITERAL | 9 | true | 5 OR 9 DIGIT ZIP CODE | 
| ACTDATE | LITERAL | 7 | true | Active date in internal Fileman format.  If this parameter is passed, then only return zip code demographics for ones which were active as of the inputted date. If it is not passed, then return zip code info regardless of active status. | 




 ###### Generated on January 11th 2017, 6:39:43 am