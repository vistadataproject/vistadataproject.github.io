---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR RPT BY REQUESTOR 

 property | value 
--- | --- 
 label | DSIR RPT BY REQUESTOR
 tag | BYREQ
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves ROI requests for a given date range for use in GUI reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FROM DATE | LITERAL | 7 | true | The FileMan Date to start retrieval process. | 
| TO DATE | LITERAL | 7 | true | FileMan date to end retrieval process. | 
| STATUS | LITERAL | 7 | true | \A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^' or the word 'ALL'. | 
| CLERK(S) | LIST | 99 | true | This is an array of clerk IENs.        (1-n)=IEN to file 200 | 
| DIVISION(S) | LITERAL | 99 | true | This parameter is used by the routine if the person requesting this report holds the DSIR MDIV key.  It is a list of internal Institution File entry numbers (File 4), delimited by '^'. | 




 Generated on January 11th 2017, 7:15:04 am