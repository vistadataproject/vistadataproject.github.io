---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC DISPLAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DISPLAY{:/}
 tag | {::nomarkdown}DISPLAY{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of Order Checks for a FillerID (namespace).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DISPLAY^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return list of Order Checks for a FillerID (namespace)
 Input parameters | {::nomarkdown}DFN, FID{:/}
 Code | {::nomarkdown}  N I,ORX,ORY<br> S ORX=1,ORX(1)="|"_FID<br> D EN^ORKCHK(.ORY,DFN,.ORX,"DISPLAY")<br> S I=0 F  S I=$O(ORY(I)) Q:I'>0  S LST(I)=$P(ORY(I),U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}