---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN RESUBMIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN RESUBMIT{:/}
 tag | {::nomarkdown}RESUBMIT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows resubmission of a cancelled consult or procedure request afterediting.  This is a backdoor resubmission, and CPRS will be notified viathe HL7 proocess.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Edit/Resubmit a cancelled consult/procedure request

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ConsultID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ChangeArray{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 5:52:13 am