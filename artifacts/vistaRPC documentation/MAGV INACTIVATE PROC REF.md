---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE PROC REF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE PROC REF{:/}
 tag | {::nomarkdown}INPROC{:/}
 routine | [MAGVRS07](http://code.osehra.org/dox/Routine_MAGVRS07_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates an entry on the IMAGING PROCEDURE REFERENCE File(#2005.61).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROCIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the requested procedure on the IMAGING PROCEDURE REFERENCE File (#2005.61).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient reference with which this procedure reference is associated.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}This parameter should be used with EXTREME CAUTION.  It suppresses the validation of the patient reference against the procedure reference with which it is associated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}