---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORECS01 VSITID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 VSITID{:/}
 tag | {::nomarkdown}VSITID{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VSITID^[ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 Method comment | Return Visit IEN ptr to #9000010
 Input parameters | {::nomarkdown}VSTSTR{:/}
 First comment | {::nomarkdown}<pre>VSTSTR=HospLoc;DateTime;Category;PtIEN</pre>{:/}
 Code | {::nomarkdown}  N DTREF,PTID<br> S ORY=0<br> S DTREF=9999999-$P($P(VSTSTR,";",2),".")_"."_$P($P(VSTSTR,";",2),".",2)<br> S PTID=+$P(VSTSTR,";",4)<br> S:$D(^AUPNVSIT("AA",PTID,DTREF)) ORY=$O(^(DTREF,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rECS.pas">rECS.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}