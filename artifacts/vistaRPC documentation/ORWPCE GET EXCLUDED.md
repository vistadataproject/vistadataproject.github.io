---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET EXCLUDED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET EXCLUDED{:/}
 tag | {::nomarkdown}EXCLUDED{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of excluded PCE entries{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Excluded PCE data items are stored in one of five parameters.Type dictates the parameter this call will retrieve. Type  Parameter  1    ORWPCE EXCLUDE IMMUNIZATIONS  2    ORWPCE EXCLUDE SKIN TESTS  3    ORWPCE EXCLUDE PATIENT ED  4    ORWPCE EXCLUDE HEALTH FACTORS  5    ORWPCE EXCLUDE EXAMS{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EXCLUDED^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns list of excluded PCE data elements
 Input parameters | {::nomarkdown}LOC, TYPE{:/}
 Code | {::nomarkdown}  N SRV,PARAM<br> S PARAM=$S(TYPE=1:"IMMUNIZATIONS",TYPE=2:"SKIN TESTS",TYPE=3:"PATIENT ED",TYPE=4:"HEALTH FACTORS",TYPE=5:"EXAMS",1:"")<br> Q:PARAM=""<br> S SRV=$P($G(^VA(200,DUZ,5)),U)<br> S PARAM="ORWPCE EXCLUDE "_PARAM<br> D GETLST^XPAR(.ORY,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG",PARAM,"Q",.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}