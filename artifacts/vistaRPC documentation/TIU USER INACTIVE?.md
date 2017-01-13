---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU USER INACTIVE? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU USER INACTIVE?{:/}
 tag | {::nomarkdown}USRINACT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC evaluates user's DIUSER status and termination status when selected.Returns 0 if active        1 if inactive{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is user inactive?
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 S TIUY=+$$GET1^DIQ(200,TIUDA_",",7,"I")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUUSR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the user in the NEW PERSON file (#200).{:/} | 




 Generated on January 13th 2017, 6:55:29 am