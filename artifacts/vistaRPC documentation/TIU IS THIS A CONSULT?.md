---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS THIS A CONSULT? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A CONSULT?{:/}
 tag | {::nomarkdown}ISCNSLT{:/}
 routine | [TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC which evaluates whether the title indicated is that of aconsult.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Boolean RPC to evaluate whether TITLE is a CONSULT
 Input Parameters | {::nomarkdown}TITLE{:/}
 Lines | ```
 N TIUCLASS
 S TIUCLASS=+$$CLASS
 I +TIUCLASS'>0 S TIUY=0 Q
 S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number in file 8925.1 for the title selected.{:/} | 




 Generated on January 13th 2017, 6:55:28 am