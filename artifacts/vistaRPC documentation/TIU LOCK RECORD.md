---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LOCK RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LOCK RECORD{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will issue an incremental LOCK on the record identified by theTIUDA parameter, returning an integer truth value indicating successor failure in obtaining the LOCK.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Bid for lock on a TIU Document record
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```{::nomarkdown} L +^TIU(8925,+TIUDA):1 I  S ERR=0<br/> E  S ERR="1^ Another session has this record locked."```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the record in the TIU DOCUMENT FILE (#8925).{:/} | 




 Generated on January 13th 2017, 7:11:26 am