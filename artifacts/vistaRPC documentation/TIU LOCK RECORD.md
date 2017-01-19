---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LOCK RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU LOCK RECORD{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will issue an incremental LOCK on the record identified by theTIUDA parameter, returning an integer truth value indicating successor failure in obtaining the LOCK.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the record in the TIU DOCUMENT FILE (#8925).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOCK^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | Bid for lock on a TIU Document record
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  L +^TIU(8925,+TIUDA):1 I  S ERR=0<br> E  S ERR="1^ Another session has this record locked."{:/}


### CPRS

[rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}