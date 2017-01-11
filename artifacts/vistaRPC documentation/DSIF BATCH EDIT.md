---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH EDIT 

 property | value 
--- | --- 
 label | DSIF BATCH EDIT
 tag | EDITBAT
 routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
 return value type | SINGLE VALUE
 description | Used to edit an existing batch in Fee BasisReturns 1^edit successfull or-1^error message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FBIN | LIST | 999 | true | Pass in an array formatted as follows:  ; FBIN(.01)=BATCH NUMBER ; FBIN(1)=OBLIGATION NUMBER  (DO NOT SEND STATION NUMBER WITH OBLIGATION \500-C09045\, PASS ONLY \C09045\) ; FBIN(3)=DATE OPENED | 




 ###### Generated on January 11th 2017, 6:39:43 am