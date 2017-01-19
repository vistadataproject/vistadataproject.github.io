---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ISPRF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU ISPRF{:/}
 tag | {::nomarkdown}ISPRFTTL{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT TITLE IEN{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISPRFTTL^[TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 Method comment | RPC Takes as input 8925.1 IEN
 First comment | {::nomarkdown}<pre> and checks if it is a PRF title<br/> Cf ISPFTTL^TIUPRFL. which is a FUNCTION</pre>{:/}
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUCAT1,TIUCAT2,TIUD1<br> S TIUY=0,TIUD1=""<br> S TIUCAT1=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT I","DC")<br> S TIUCAT2=+$$DDEFIEN^TIUFLF7("PATIENT RECORD FLAG CAT II","DC")<br> S TIUD1=$O(^TIU(8925.1,"AD",TIUDA,TIUD1))<br> I TIUD1=TIUCAT1!(TIUD1=TIUCAT2) S TIUY=1<br>{:/}


### CPRS

[rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}