---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST BY STATUS 

 property | value 
--- | --- 
 label | DSIF BATCH LIST BY STATUS
 tag | LISTSTAT
 routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of batches sorted by entered status (O^C)  [open and closed]  Screens to users who opened and supervisors

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL | 20 | true | Status to search: 'C' FOR CLERK CLOSED;'S' FOR SUPERVISOR CLOSED;'O' FOR OPEN;'T' FOR TRANSMITTED;'V' FOR VOUCHERED;'P' FOR FORWARDED TO PRICER;'A' FORASSIGNED PRICE;'R' FOR REVIEWED AFTER PRICER;'F' FOR CENTRAL FEE ACCEPTED Delimited by \^\, multiple status can be entered: \C^S^R\ | 
| vs:Input_Parameter-8994_02 | FEE PROGRAM | LITERAL | 3 | true |  | 
| vs:Input_Parameter-8994_02 | STARTDT | LITERAL | 7 | true | Start date to display batches, defaults to all batches if not entered | 
| vs:Input_Parameter-8994_02 | ENDDATE | LITERAL | 7 | true | Enter the end of the date rand\\ge to display default to all dates.  | 