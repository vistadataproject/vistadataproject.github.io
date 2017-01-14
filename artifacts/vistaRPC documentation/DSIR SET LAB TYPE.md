---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIR SET LAB TYPE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIR SET LAB TYPE{:/}
 tag | {::nomarkdown}STLABTYP{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Routine for setting the requested lab type for a given request.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INPUT PARAMETER   ROI = REQUEST IEN{:/} | 
| {::nomarkdown}TYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INPUT PARAMETER    TYP = SELECTED LAB TYPE - A NUMERIC VALUE >= 0{:/} | 




 Generated on January 14th 2017, 7:26:36 am