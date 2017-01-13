---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE LOCK 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE LOCK{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Locks Template{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Lock Template
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```{::nomarkdown} L +^TIU(8927,TIUDA,0):1<br/> S TIUY=$T```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of template to lock.{:/} | 




 Generated on January 13th 2017, 7:11:27 am