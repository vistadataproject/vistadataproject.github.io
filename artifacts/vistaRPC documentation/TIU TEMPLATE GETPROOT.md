---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETPROOT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETPROOT{:/}
 tag | {::nomarkdown}GETPROOT{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETPROOT^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Get personal template root info only
 Input parameters | {::nomarkdown}USER{:/}
 Code | ```  N IDX
 I +$G(USER) D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",USER,0)),1)```




 Generated on January 14th 2017, 7:26:35 am