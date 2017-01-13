---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU CHKTXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU CHKTXT{:/}
 tag | {::nomarkdown}CHKTXT{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check for existence of text in TIU(8925,TIUDA, either in \TEXT\ or \TEMP\ nodes, before allowing signature.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Checks for presence of text before signature
 Input Parameters | {::nomarkdown}ORTIUDA{:/}
 Lines | ```{::nomarkdown} S ORY='$$EMPTYDOC^TIULF(ORTIUDA)  ;DBIA #4426<br/>```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to file 8925.{:/} | 




 Generated on January 13th 2017, 7:11:27 am