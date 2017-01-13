---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN CANEDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN CANEDIT{:/}
 tag | {::nomarkdown}CANEDIT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns indication of whether a consult/procedure request can beresubmitted.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return whether consult can be edited and resubmitted
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | ```
 S Y=$$EDRESOK^GMRCEDT2(GMRCO)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to record  in file 123.{:/} | 




 Generated on January 13th 2017, 6:55:29 am