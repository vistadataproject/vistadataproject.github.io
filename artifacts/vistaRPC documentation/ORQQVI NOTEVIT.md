---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI NOTEVIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI NOTEVIT{:/}
 tag | {::nomarkdown}NOTEVIT{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NOTEVIT^[ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 Input parameters | {::nomarkdown}DFN, NOTEIEN{:/}
 Code | {::nomarkdown}  N VSTR,NOTEDATE<br> D NOTEVSTR^ORWPCE(.VSTR,NOTEIEN)<br> Q:$P(VSTR,";",2)=""<br> D FASTVIT(.ORY,DFN,$P(VSTR,";",2)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}