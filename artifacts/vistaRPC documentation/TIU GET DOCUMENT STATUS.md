---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT STATUS 

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

 Leading comment lines | {::nomarkdown}Returns STATIEN^STATNAME{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT IEN (8925){:/} | 




 Generated on January 13th 2017, 6:15:57 am