---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF GETFLG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF GETFLG{:/}
 tag | {::nomarkdown}GETFLG{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETFLG^[ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 Method comment | Return detailed flag info for flag FLAGID
 Input parameters | {::nomarkdown}PTDFN, FLAGID{:/}
 Code | {::nomarkdown}  I '$D(^TMP("ORPRF",$J,FLAGID)) Q<br> N IX,CNT<br> S (IX,CNT)=0<br> F  S IX=$O(^TMP("ORPRF",$J,FLAGID,IX)) Q:'IX  D<br> . S CNT=CNT+1,ORY(CNT)=$G(^TMP("ORPRF",$J,FLAGID,IX)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}