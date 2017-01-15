---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN RESUBMIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN RESUBMIT{:/}
 tag | {::nomarkdown}RESUBMIT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows resubmission of a cancelled consult or procedure request afterediting.  This is a backdoor resubmission, and CPRS will be notified viathe HL7 proocess.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ConsultID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ChangeArray{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RESUBMIT^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Edit/Resubmit a cancelled consult/procedure request
 Input parameters | {::nomarkdown}GMRCO<br>OREDITED{:/}
 Code | {::nomarkdown}  N ORNODE<br> S ORNODE=$NAME(^TMP("GMRCR",$J))<br> M @ORNODE=OREDITED<br> D FILE^GMRCGUIC(GMRCO,ORNODE)<br> S Y=0{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}