---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS CHECK PAID EMP DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS CHECK PAID EMP DATA{:/}
 tag | {::nomarkdown}VALEMP{:/}
 routine | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call checks to make sure that if the PERSONNEL STATUS (field #2)is an employee and the Pay Plan is equal to \OT\ that the Grade (#16), Step(#17), and Retirement (#60) fields contain valid responses.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The input parameter, IEN, contains the record identifier for the ASISTS claimthat is being validated.{:/} | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Parameter INPUT is the FORM name and IEN of OOPS(2260 claim number that needsto be checked. The input format is:FORM^IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am