---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR UPDATE FOIA OFFSETS 

 property | value 
--- | --- 
 label | DSIR UPDATE FOIA OFFSETS
 tag | MANUFOIA
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | SINGLE VALUE
 description | This RPC updates the manually entered offsets for the annual FOIA report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FOIA | LITERAL | 99 | true | This is the internal number from file 19620.3. | 
| DATA | LIST | 99 | true | This is an array '^' delimited containing the following:         Field Number (File 19620.3) ^ Numeric Value to store Field numbers must be 100.02 thru 137.02 and all .02, the .01 fields are populated by the annual FOIA report. | 




Generated on January 11th 2017, 6:34:23 am