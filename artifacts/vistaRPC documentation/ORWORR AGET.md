---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORR AGET 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR AGET{:/}
 tag | {::nomarkdown}AGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Get an abbreviated order list for a patient in the format:     ^TMP(\ORR\,$J,ORLIST,n)=IFN^DGrp^ActTm{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get abbrev. event delayed order list for patient

 Leading comment lines | {::nomarkdown}returns ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm
see input parameters above
-- from ORWORR
-- section uses ORQ1 to get orders list rather than XGET --{:/}




 Generated on January 13th 2017, 6:15:57 am