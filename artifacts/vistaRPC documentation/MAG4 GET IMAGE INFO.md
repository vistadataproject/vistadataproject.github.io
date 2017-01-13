---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 GET IMAGE INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 GET IMAGE INFO{:/}
 tag | {::nomarkdown}GETINFO{:/}
 routine | [MAGGTU31](http://code.osehra.org/dox/Routine_MAGGTU31_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns specific fields of an image entry, to be displayedin the image information window.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Image File internal entry number.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Flags that control the execution (can be combined):\D\  Deleted Image Information is relevant{:/} | 




 Generated on January 13th 2017, 6:55:29 am