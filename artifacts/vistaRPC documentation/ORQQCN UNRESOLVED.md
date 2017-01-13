---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN UNRESOLVED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN UNRESOLVED{:/}
 tag | {::nomarkdown}UNRSLVD{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if current user has unresolved consults for current patient, 0 if not.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns true if unresolved consults for user/pt

 Leading comment lines | {::nomarkdown}S ORY=0
Q:+$$GET^XPAR("ALL","ORWOR SHOW CONSULTS",1,"I")=0
S ORY=+$$ANYPENDG^GMRCTIU(ORDFN,DUZ)   ;DBIA #3473
Q{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:15:57 am