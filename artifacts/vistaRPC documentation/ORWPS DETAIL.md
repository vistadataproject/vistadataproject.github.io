---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns text of details for a specific mediction order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETAIL^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | show details for a med order
 Input parameters | {::nomarkdown}DFN, ID{:/}
 Code | {::nomarkdown}  K ^TMP("ORXPND",$J)<br> N LCNT,ORVP<br> S LCNT=0,ORVP=DFN_";DPT("<br> D MEDS^ORCXPND1<br> S ROOT=$NA(^TMP("ORXPND",$J)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}