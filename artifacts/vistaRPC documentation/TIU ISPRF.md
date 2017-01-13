---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ISPRF 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU ISPRF{:/}
 tag | {::nomarkdown}ISPRFTTL{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC Takes as input 8925.1 IEN
 Leading comment lines | {::nomarkdown}and checks if it is a PRF title<br/>Cf ISPFTTL^TIUPRFL. which is a FUNCTION{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT TITLE IEN{:/} | 




 Generated on January 13th 2017, 6:24:32 am