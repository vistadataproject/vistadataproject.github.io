---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DISCHARGE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DISCHARGE{:/}
 tag | {::nomarkdown}DISCHRG{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a patient and an admission date, return the discharge date/time.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get discharge movement information
 Input Parameters | {::nomarkdown}DFN<br/>ADMITDT{:/}
 Lines | ```
 N VAIP
 I +$G(ADMITDT)=0 S Y=DT Q
 S VAIP("D")=ADMITDT D 52^VADPT
 I +VAIP(17)=0 S Y=DT Q
 S Y=+VAIP(17,1)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The patient ien (i.e., DFN).{:/} | 
| {::nomarkdown}ADMITDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Date the patient was admitted.{:/} | 




 Generated on January 13th 2017, 6:55:29 am