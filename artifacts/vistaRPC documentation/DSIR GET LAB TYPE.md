---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET LAB TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET LAB TYPE{:/}
 tag | {::nomarkdown}GTLABTYP{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This routine returns the type of lab requested for a given request.  Note that if no lab has been requested, this will contain a null or a zero.  In either case, this will be treated as a Cumulative Labs type.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INPUT PARAMETER   ROI = REQUEST IEN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}