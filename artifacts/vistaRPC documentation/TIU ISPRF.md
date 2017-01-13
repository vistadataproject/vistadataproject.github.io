---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ISPRF 

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
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```{::nomarkdown} N TIUCAT1,TIUCAT2,TIUD1<br/> S TIUY=0,TIUD1=""<br/> S TIUCAT1=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT I","DC")<br/> S TIUCAT2=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT II","DC")<br/> S TIUD1=$O(^TIU(8925.1,"AD",TIUDA,TIUD1))<br/> I TIUD1=TIUCAT1!(TIUD1=TIUCAT2) S TIUY=1<br/>```{:/}
 Leading comment lines | {::nomarkdown}and checks if it is a PRF title<br/>Cf ISPFTTL^TIUPRFL. which is a FUNCTION{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT TITLE IEN{:/} | 




 Generated on January 13th 2017, 7:11:27 am