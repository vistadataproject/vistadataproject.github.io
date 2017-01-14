---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETROOTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETROOTS{:/}
 tag | {::nomarkdown}GETROOTS{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETROOTS^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Get template root info
 Input parameters | {::nomarkdown}USER{:/}
 Code | ```  N IDX,TYPE
 I +$G(USER) D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",USER,0)),1)
 F TYPE="R","TF","CF","OF" D
 .D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",$$ROOTIDX^TIUDDT(TYPE),0)),1)```




 Generated on January 14th 2017, 7:26:35 am