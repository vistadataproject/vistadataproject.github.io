---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ACKQAUD2 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ACKQAUD2{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ACKQAG02](http://code.osehra.org/dox/Routine_ACKQAG02_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Input the IEN of the 509850.9 file entry as the second parameter.Input the DFN as the third parameter, array by reference as firstreturns a subscripted array of data values for this audiogramdata for the patient. Currently only uses 0 node for information.Used in the Enter/Edit Audiogram Delphi program{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DFN of patient - IEN from DPT({:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the 509850.9 fileUsed in the Audiogram Enter/Edit program{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}