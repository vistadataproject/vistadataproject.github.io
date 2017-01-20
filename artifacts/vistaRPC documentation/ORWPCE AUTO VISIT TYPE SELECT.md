---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE AUTO VISIT TYPE SELECT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE AUTO VISIT TYPE SELECT{:/}
 tag | {::nomarkdown}AUTOVSIT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if visit type should be automatically selected.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | AUTOVSIT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns TRUE if automatic selection of Visit Type
 Input parameters | {::nomarkdown}LOC{:/}
 Code | {::nomarkdown}  N SRV<br> S SRV=$P($G(^VA(200,DUZ,5)),U)<br> S ORY=$$GET^XPAR(DUZ_";VA(200,^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE DISABLE AUTO VISIT TYPE",1,"Q")<br> I +ORY S ORY=1<br> S ORY='ORY{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}