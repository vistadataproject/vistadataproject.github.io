---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU ID CAN RECEIVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID CAN RECEIVE{:/}
 tag | {::nomarkdown}CANRCV{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the prospective ID Parent document in the TIU Documentfile.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CANRCV^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Can this document receive an ID Child?
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | ```  S TIUY=$$CANDO^TIULP(TIUDA,"ATTACH ID ENTRY")```




 Generated on January 14th 2017, 7:26:35 am