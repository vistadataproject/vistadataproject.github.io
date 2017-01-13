---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ID CAN RECEIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID CAN RECEIVE{:/}
 tag | {::nomarkdown}CANRCV{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Can this document receive an ID Child?
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```{::nomarkdown} S TIUY=$$CANDO^TIULP(TIUDA,"ATTACH ID ENTRY")```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the prospective ID Parent document in the TIU Documentfile.{:/} | 




 Generated on January 13th 2017, 7:11:27 am