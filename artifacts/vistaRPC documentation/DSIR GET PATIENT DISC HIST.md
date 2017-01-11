---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET PATIENT DISC HIST 

 property | value 
--- | --- 
 label | DSIR GET PATIENT DISC HIST
 tag | DISHISTR
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | This routine returns the data nescessary for the patient disclosure history report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  RequestIEN        .01   DocumentCaption   .05  DateReceived    10.06   DocumentDate      .07  Requestor         .11  Reason          10.02  RequestorType   10.04  Status          10.08  Comment           .31

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 20 | true | PAT = fully qualified patient pointer    Examples:   \125325;DPT(\              \152;DSIR(19620.96,\, | 
| FRDT | LITERAL | 7 | true | FRDT is the starting date which will be reported on.  FILEMAN date format - 3101225 = Dec 25,2010 | 
| TODT | LITERAL | 20 | true | TODT is the ending date which will be reported on.This is an optional field and if not provided, the current date will be used. FILEMAN date format - 3101225 = Dec 25,2010 | 




Generated on January 11th 2017, 6:34:23 am