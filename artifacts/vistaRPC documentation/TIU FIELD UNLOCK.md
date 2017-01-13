---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD UNLOCK 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD UNLOCK{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Unlock Template Field{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Unlock Template Field
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 L -^TIU(8927.1,TIUDA,0)
 S TIUY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of Template Field{:/} | 




 Generated on January 13th 2017, 6:55:29 am