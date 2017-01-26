---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DISCHARGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DISCHARGE{:/}
 tag | {::nomarkdown}DISCHRG{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a patient and an admission date, return the discharge date/time.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The patient ien (i.e., DFN).{:/} | 
| {::nomarkdown}ADMITDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Date the patient was admitted.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DISCHRG^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Get discharge movement information
 Input parameters | {::nomarkdown}DFN, ADMITDT{:/}
 Code | {::nomarkdown}  N VAIP<br> I +$G(ADMITDT)=0 S Y=DT Q<br> S VAIP("D")=ADMITDT D 52^VADPT<br> I +VAIP(17)=0 S Y=DT Q<br> S Y=+VAIP(17,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}