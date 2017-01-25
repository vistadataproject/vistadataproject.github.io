---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH EDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH EDIT{:/}
 tag | {::nomarkdown}EDITBAT{:/}
 routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to edit an existing batch in Fee BasisReturns 1^edit successfull or-1^error message{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBIN{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in an array formatted as follows:  ; FBIN(.01)=BATCH NUMBER ; FBIN(1)=OBLIGATION NUMBER  (DO NOT SEND STATION NUMBER WITH OBLIGATION \500-C09045\, PASS ONLY \C09045\) ; FBIN(3)=DATE OPENED{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}