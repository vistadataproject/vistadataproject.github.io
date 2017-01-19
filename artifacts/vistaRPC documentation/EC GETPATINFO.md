---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETPATINFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETPATINFO{:/}
 tag | {::nomarkdown}PATINF{:/}
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is a general purpose call that provides segments of the patient data from the Event Capture Patient File #721.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input variable ECARY contains the following values:-    ECIEN - Event Capture Patient ien (#2)    ECTYP - Data type to return            Types are:-            DXS - primary and secondary diagnosis codes            MOD - modifiers            CLASS - classification data            OTH - other type data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}