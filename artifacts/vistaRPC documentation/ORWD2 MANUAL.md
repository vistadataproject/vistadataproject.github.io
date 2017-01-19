---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD2 MANUAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD2 MANUAL{:/}
 tag | {::nomarkdown}MANUAL{:/}
 routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns device information for manual prints done via CPRS GUI.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MANUAL^[ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 Method comment | return device info for manual prints
 Input parameters | {::nomarkdown}LOC<br>ORDERS{:/}
 Code | {::nomarkdown}  N DOCHT,DOLBL,DOREQ,DOWRK,ORDERID,I<br> N PRMTCHT,PRMTLBL,PRMTREQ,PRMTWRK  ; (so undefined for DEFDEV call)<br> S (DOCHT,DOLBL,DOREQ,DOWRK,I,J)=0,LOC=+LOC_";SC("<br> N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))<br> D INSRTBB(.ORDERS) ; insert any blood bank child lab orders into ORDERS array<br> F  S I=$O(ORDERS(I)) Q:'I  D  Q:DOCHT&DOLBL&DOREQ&DOWRK<br> . S ORDERID=$P(ORDERS(I),U)<br> . I $$HASFMTC,$$NOTBB(+ORDERS(I)) S DOCHT=1<br> . I $$HASFMTL S DOLBL=1<br> . I $$HASFMTR S DOREQ=1<br> . I $$HASFMTW,$$NOTBB(+ORDERS(I)) S DOWRK=1<br> S REC=$$DEFDEV{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}