---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL NOTES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVS DETAIL NOTES{:/}
 tag | {::nomarkdown}DETNOTE{:/}
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the progress notes based on patient and visit identifier.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return progress notes for a patient's visit

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from File #2 (Patient).{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Visit identifier.{:/} | 




 Generated on January 13th 2017, 5:52:13 am