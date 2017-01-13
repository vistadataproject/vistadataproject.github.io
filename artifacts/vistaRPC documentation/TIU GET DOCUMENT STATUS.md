---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT STATUS{:/}
 tag | {::nomarkdown}GETSTAT{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to retrieve the Status (8925.6 IEN) of a TIU DOCUMENT.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC Gets the status of TIU Doc TIUIEN
 Input Parameters | {::nomarkdown}TIUIEN{:/}
 Lines | ```
 N TIUTTL
 S TIUTTL=+$G(^TIU(8925,TIUIEN,0))
 I 'TIUTTL S TIUY="0^Document does not exist" Q
 S TIUY=$P(^TIU(8925,TIUIEN,0),U,5)
 S TIUY=TIUY_U_$P($G(^TIU(8925.6,TIUY,0)),U,1)```
 Leading comment lines | {::nomarkdown}Returns STATIEN^STATNAME{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT IEN (8925){:/} | 




 Generated on January 13th 2017, 6:55:29 am