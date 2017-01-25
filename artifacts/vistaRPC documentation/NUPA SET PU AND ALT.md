---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA SET PU AND ALT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA SET PU AND ALT{:/}
 tag | {::nomarkdown}SL{:/}
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets Pressure Ulcer and Skin Alteration data.  Deletes old info for this careplan and inserts from the reassessment.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ALT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown} String List.   Piece 1 = \A\ for alterations or \U\ for pressure ulcers Piece 2 = CarePlan DA Piece 3 = Text field 1 from the reassessment Piece 4 = Text field 2 from the reassessment Piece 5 = Text field 3 from the reassessment Piece 6 = Comments number of Lines Piece 7 = Comments Text Piece 8 = A 1 if the alteration is healed{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}