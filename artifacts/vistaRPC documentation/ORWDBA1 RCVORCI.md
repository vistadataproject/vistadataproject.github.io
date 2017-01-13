---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 RCVORCI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 RCVORCI{:/}
 tag | {::nomarkdown}RCVORCI{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Receive Order Entry Billing Aware data from CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Receive order related Clinical Indicators & Diagnoses from GUI
 Leading comment lines | {::nomarkdown}Store data in ^OR(100,ODN,5.1) & ^OR(100,0DN,5.2){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIAG{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Orders and Clinical Indicators returned from CPRS{:/} | 




 Generated on January 13th 2017, 6:24:32 am