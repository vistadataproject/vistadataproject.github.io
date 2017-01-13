---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LOADGAF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LOADGAF{:/}
 tag | {::nomarkdown}LOADGAF{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of GAF Scores{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve GAF scores
 Input Parameters | {::nomarkdown}ORINPUT{:/}
 Lines | ```{::nomarkdown} D GAFHX^YSGAFAPI(.ORY,.ORINPUT)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORINPUT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ORINPUT(\DFN\) = Patient DFN.ORINPUT(\LIMIT\) = Number of most recent GAF scores to retrieve.{:/} | 




 Generated on January 13th 2017, 7:11:27 am