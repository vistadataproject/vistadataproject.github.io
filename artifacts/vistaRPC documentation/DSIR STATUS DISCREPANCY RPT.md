---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR STATUS DISCREPANCY RPT 

 property | value 
--- | --- 
 label | DSIR STATUS DISCREPANCY RPT
 tag | STATDISC
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns data from the DSIR STATUS HISTORY file to review which request are being entered as closed on one day yet the status date is a previous date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| START DATE | LITERAL | 7 | true | FileMan format start date. | 
| END DATE | LITERAL | 7 | true | FileMan end date. Optional - defaults to current date. | 
| CLERK(S) | LIST | 99 | true | Array where each element is equal to the DUZ of selected clerks.  Optional - no entries passed will return all clerks for time period. | 




 Generated on January 11th 2017, 7:15:04 am