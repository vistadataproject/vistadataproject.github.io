---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE UNLOCK 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE UNLOCK{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Unlocks a template.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Unlock Template
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 L -^TIU(8927,TIUDA,0):1
 S TIUY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of Template to unlock.{:/} | 




 Generated on January 13th 2017, 6:55:29 am