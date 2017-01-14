---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT DISCHARGE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DISCHARGE{:/}
 tag | {::nomarkdown}DISCHRG{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a patient and an admission date, return the discharge date/time.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The patient ien (i.e., DFN).{:/} | 
| {::nomarkdown}ADMITDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Date the patient was admitted.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DISCHRG^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Get discharge movement information
 Input parameters | {::nomarkdown}DFN<br/>ADMITDT{:/}
 Code | ```  N VAIP
 I +$G(ADMITDT)=0 S Y=DT Q
 S VAIP("D")=ADMITDT D 52^VADPT
 I +VAIP(17)=0 S Y=DT Q
 S Y=+VAIP(17,1)```




 Generated on January 14th 2017, 7:26:35 am