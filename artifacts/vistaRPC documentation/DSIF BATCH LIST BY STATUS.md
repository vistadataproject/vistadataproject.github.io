---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST BY STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH LIST BY STATUS{:/}
 tag | {::nomarkdown}LISTSTAT{:/}
 routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of batches sorted by entered status (O^C)  [open and closed]  Screens to users who opened and supervisors{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Status to search: 'C' FOR CLERK CLOSED;'S' FOR SUPERVISOR CLOSED;'O' FOR OPEN;'T' FOR TRANSMITTED;'V' FOR VOUCHERED;'P' FOR FORWARDED TO PRICER;'A' FORASSIGNED PRICE;'R' FOR REVIEWED AFTER PRICER;'F' FOR CENTRAL FEE ACCEPTED Delimited by \^\, multiple status can be entered: \C^S^R\{:/} | 
| {::nomarkdown}FEE PROGRAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}STARTDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start date to display batches, defaults to all batches if not entered{:/} | 
| {::nomarkdown}ENDDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter the end of the date rand\\ge to display default to all dates. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}