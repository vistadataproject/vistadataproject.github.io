---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD2 MANUAL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD2 MANUAL{:/}
 tag | {::nomarkdown}MANUAL{:/}
 routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns device information for manual prints done via CPRS GUI.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MANUAL^[ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 Method comment | return device info for manual prints
 Input parameters | {::nomarkdown}LOC<br/>ORDERS{:/}
 Code | ```  N DOCHT,DOLBL,DOREQ,DOWRK,ORDERID,I
 N PRMTCHT,PRMTLBL,PRMTREQ,PRMTWRK  ; (so undefined for DEFDEV call)
 S (DOCHT,DOLBL,DOREQ,DOWRK,I,J)=0,LOC=+LOC_";SC("
 N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))
 D INSRTBB(.ORDERS) ; insert any blood bank child lab orders into ORDERS array
 F  S I=$O(ORDERS(I)) Q:'I  D  Q:DOCHT&DOLBL&DOREQ&DOWRK
 . S ORDERID=$P(ORDERS(I),U)
 . I $$HASFMTC,$$NOTBB(+ORDERS(I)) S DOCHT=1
 . I $$HASFMTL S DOLBL=1
 . I $$HASFMTR S DOREQ=1
 . I $$HASFMTW,$$NOTBB(+ORDERS(I)) S DOWRK=1
 S REC=$$DEFDEV```




 Generated on January 14th 2017, 7:26:35 am