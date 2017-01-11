---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORR AGET 

 property | value 
--- | --- 
 label | ORWORR AGET
 tag | AGET
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | GLOBAL ARRAY
 description | Get an abbreviated order list for a patient in the format:     ^TMP(\ORR\,$J,ORLIST,n)=IFN^DGrp^ActTm


### Method description

 property | value 
--- | --- 
 Method comment | Get abbrev. event delayed order list for patient
 Leading comment lines | returns ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm,see input parameters above,-- from ORWORR,-- section uses ORQ1 to get orders list rather than XGET --




Generated on January 11th 2017, 6:34:23 am