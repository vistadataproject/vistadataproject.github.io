---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR RPT REQUESTS BY TYPE 

 property | value 
--- | --- 
 label | DSIR RPT REQUESTS BY TYPE
 tag | REQTYP
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FROM DATE | LITERAL | 7 | true |  | 
| TO DATE | LITERAL | 7 | true |  | 
| STATUS | LITERAL | 99 | true | \A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^'or the word 'ALL'. | 
| DIVISIONS | LITERAL | 99 | true | This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by '^'. | 
| TYPES | LIST | 99 | true | This is an array of internal numbers to file 19620.61 DSIR TYPE OF REQUEST.  It is used for reporting criteria if no types are specified then all types will be included in the report. | 




 Generated on January 11th 2017, 7:15:04 am