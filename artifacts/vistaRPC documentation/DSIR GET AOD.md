---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET AOD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET AOD{:/}
 tag | {::nomarkdown}ACCOFDIS{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  Requestor Address .81   DocumentCaption   .05  Patient Address   .82   DocumentDate      .07  Current Status  10.05  Date Received   10.06  Date Closed     10.07  Clerk Assigned    .03  Comment           .31{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}AODIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}AODIEN = The request IEN for which you want an Accounting of Disclosure.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}