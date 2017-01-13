---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP FILE ENTRY GETSELECTION 

 property | value 
--- | --- 
 label | {::nomarkdown}SCRP FILE ENTRY GETSELECTION{:/}
 tag | {::nomarkdown}GETSEL{:/}
 routine | [SCRPBK11](http://code.osehra.org/dox/Routine_SCRPBK11_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns information assoicated with an entryon the entity selection form of the Query Template Utility.The RPC gets invoked as a result of the user clicking theright mouse button and selecting 'Details'.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENTITY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the entity type of the slecetion.The following types are possible:       DIVISION       TEAM       PRACTITIONER       ROLE       CLINIC       USER CLASS{:/} | 
| {::nomarkdown}INTERNAL ENTRY NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the internal entry number forthe entity.{:/} | 




 Generated on January 13th 2017, 6:24:32 am