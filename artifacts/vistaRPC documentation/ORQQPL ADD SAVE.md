---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL ADD SAVE{:/}
 tag | {::nomarkdown}ADDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add new problem record{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | SAVE NEW RECORD

 Leading comment lines | {::nomarkdown}RETURN - Problem IFN if success, 0 otherwise
ADDARRAY - array used for indirect sets of  GMPFLDS(){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}GMPROV{:/} |  |  |  |  | 
| {::nomarkdown}GMPVAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} | 




 Generated on January 13th 2017, 6:15:57 am