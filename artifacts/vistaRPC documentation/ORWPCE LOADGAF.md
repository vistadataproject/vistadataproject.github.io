---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LOADGAF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LOADGAF{:/}
 tag | {::nomarkdown}LOADGAF{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of GAF Scores{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORINPUT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ORINPUT(\DFN\) = Patient DFN.ORINPUT(\LIMIT\) = Number of most recent GAF scores to retrieve.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOADGAF^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Retrieve GAF scores
 Input parameters | {::nomarkdown}ORINPUT{:/}
 Code | {::nomarkdown}  D GAFHX^YSGAFAPI(.ORY,.ORINPUT){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}