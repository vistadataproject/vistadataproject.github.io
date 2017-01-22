---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA LNKMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA LNKMSG{:/}
 tag | {::nomarkdown}LNKMSG{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Returns the text of the OR DEA PIV LINK MSG parameter.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LNKMSG^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | message to display after successful PIV link for admin contact person
 Code | {::nomarkdown}  N I,ORTY<br> D GETWP^XPAR(.ORTY,"DIV^SYS^PKG","OR DEA PIV LINK MSG")<br> S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/uOrders.pas">Orders/uOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}