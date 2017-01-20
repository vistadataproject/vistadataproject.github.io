---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR SHEETS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR SHEETS{:/}
 tag | {::nomarkdown}SHEETS{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns order sheets for a patient.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SHEETS^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return Order Sheets for a patient
 Input parameters | {::nomarkdown}ORVP{:/}
 Code | {::nomarkdown}  N ELST,ETYP,ORIFN,TS,I<br> S ORVP=ORVP_";DPT("<br> S ETYP="" F  S ETYP=$O(^OR(100,"AEVNT",ORVP,ETYP)) Q:ETYP=""  D<br> . S ORIFN=0 F  S ORIFN=$O(^OR(100,"AEVNT",ORVP,ETYP,ORIFN)) Q:'ORIFN  D<br> . . I (ETYP="A")!(ETYP="T") S ELST(ETYP,$P($G(^OR(100,+ORIFN,0)),U,13))=""<br> S LST(1)="C;O^Current View",I=1<br> S TS="" F  S TS=$O(ELST("A",TS)) Q:TS=""  D<br> . S I=I+1,LST(I)="A;"_TS_U_"Admit to "_$P($G(^DIC(45.7,TS,0)),U)<br> S I=I+1,LST(I)="A;-1^Admit..."<br> S TS="" F  S TS=$O(ELST("T",TS)) Q:TS=""  D<br> . S I=I+1,LST(I)="T;"_TS_U_"Transfer to "_$P($G(^DIC(45.7,TS,0)),U)<br> I $L($G(^DPT(+ORVP,.1))) D<br> . S I=I+1,LST(I)="T;-1^Transfer..."<br> . S I=I+1,LST(I)="D;0^Discharge"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}