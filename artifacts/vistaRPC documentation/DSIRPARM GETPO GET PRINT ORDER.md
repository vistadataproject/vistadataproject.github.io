---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRPARM GETPO GET PRINT ORDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRPARM GETPO GET PRINT ORDER{:/}
 tag | {::nomarkdown}GETPO{:/}
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will return the document Print Order for the specified ROI type and facility.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PRTORD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Print Order Name or IEN to DSIR ROI PRINT ORDER file 19620.702.{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Facility IEN to file 19620.701 - Optional if PRTORD is IEN, Required if PRTORD is Free Text.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}