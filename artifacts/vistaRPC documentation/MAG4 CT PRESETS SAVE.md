---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 CT PRESETS SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CT PRESETS SAVE{:/}
 tag | {::nomarkdown}SAVECTP{:/}
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} Saves the CT Presets from the Radiology Viewer in Clinical Display  as site Specific Presets.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the string of CT Presets. {:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown} DATA is a set of Flags that determine where the CT Presets will be saved. Either as CT PRESETS  or CT PRESETS 2 for Client versions 72 and later{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}