---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HAS OPTION ACCESS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HAS OPTION ACCESS{:/}
 tag | {::nomarkdown}HASOPTN{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if the user has access to the specified menu option.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns TRUE if the user has access to a menu option
 Input Parameters | {::nomarkdown}OPTION{:/}
 Lines | ```
 S VAL=+$$ACCESS^XQCHK(DUZ,OPTION)
 I VAL'>0 S VAL=0
 E  S VAL=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Either the Option Name or Option IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am