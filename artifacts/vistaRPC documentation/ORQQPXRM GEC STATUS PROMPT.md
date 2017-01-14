---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM GEC STATUS PROMPT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GEC STATUS PROMPT{:/}
 tag | {::nomarkdown}GECP{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure will return the text value to display in CPRS of the status of the current GEC Referral.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GECP^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  S RESULT=$$STATUS^PXRMGECU(DFN)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}