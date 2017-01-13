---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG DTTM 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG DTTM{:/}
 tag | {::nomarkdown}DTTM{:/}
 routine | [MAGGTU5](http://code.osehra.org/dox/Routine_MAGGTU5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Does a FileMan conversion using %DT=\T\ D ^%DT,$$FMTE^XLFDT(Y,\8\){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}  X{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}User input to date/time field {:/} | 
| {::nomarkdown}INDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Date to be converted in External or Internal Format.{:/} | 
| {::nomarkdown}NOFDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Flag to tell if Future Dates are allowed.The defaults is 0, so Future Dates Are Allowed.If 1, then NOFDT is true and NO Future Dates are Allowed.{:/} | 




 Generated on January 13th 2017, 6:55:29 am