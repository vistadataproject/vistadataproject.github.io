---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LINK TO FLAG 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LINK TO FLAG{:/}
 tag | {::nomarkdown}LINK{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to link a Progress Note to a Patient Record Flag{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC Link TIU Doc TIUIEN to
 Input Parameters | {::nomarkdown}TIUIEN<br/>ASSGNDA<br/>ACTIEN<br/>DFN{:/}
 Lines | ```
 N TIUTTL
 S TIUTTL=+$G(^TIU(8925,TIUIEN,0))
 I 'TIUTTL S TIUY="0^Document does not exist" Q
 D UNLINK^TIUPRF1(TIUIEN)
 S TIUY=$$STOTIU^DGPFAPI2(DFN,ASSGNDA,ACTIEN,TIUIEN)```
 Leading comment lines | {::nomarkdown}the PRF action{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT IEN (8925){:/} | 
| {::nomarkdown}PRFIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Flag IEN (26.11 or 26.15){:/} | 
| {::nomarkdown}ACTIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PRF Assignment History IEN (26.14){:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN (File 2){:/} | 




 Generated on January 13th 2017, 6:55:29 am