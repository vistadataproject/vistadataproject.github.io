---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA DEATEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA DEATEXT{:/}
 tag | {::nomarkdown}DEATEXT{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Returns the text to show on the signature dialog mandated by DEA for when a controlled substance order is selected to be signed.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEATEXT^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | returns the mandatory dea text to show when a user checks a controlled substance order to be signed on the signature dialog
 Code | {::nomarkdown}  N I,ORTY<br> D GETWP^XPAR(.ORTY,"SYS","OR DEA TEXT")<br> S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}