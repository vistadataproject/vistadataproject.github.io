---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET AOD 

 property | value 
--- | --- 
 label | DSIR GET AOD
 tag | ACCOFDIS
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  Requestor Address .81   DocumentCaption   .05  Patient Address   .82   DocumentDate      .07  Current Status  10.05  Date Received   10.06  Date Closed     10.07  Clerk Assigned    .03  Comment           .31

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| AODIEN | LITERAL | 20 | true | AODIEN = The request IEN for which you want an Accounting of Disclosure. | 




 ###### Generated on January 11th 2017, 6:39:43 am