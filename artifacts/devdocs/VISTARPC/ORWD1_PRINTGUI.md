---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWD1 PRINTGUI
# ORWD1 PRINTGUI

RPC used by CPRS GUI to print orders to a designated print device.

Property | Value
--- | ---
Label | PRINTGUI
Routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTGUI^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | File|Print orders from GUI
Input Parameters | HLOC, ORWDEV, PRTLST
First Comment | {::nomarkdown}<pre><code>ORRACT is set here to identify this as a manual reprint</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ADEVICE,ORRACT,ORPLST,I,PKG,DLG<br/> N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))<br/> S PRTLST="",I=0<br/> K ORPLST M ORPLST=PRTLST<br/> S ORRACT=1,ADEVICE=$P(ORWDEV,U,1),ORESULT=1<br/> I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"C",HLOC)<br/> S ADEVICE=$P(ORWDEV,U,2)<br/> K ORPLST M ORPLST=PRTLST<br/> D INSRTBB^ORWD2(.ORPLST) ; insert BB child Lab orders into ORPLST for printing labels<br/> I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"L",HLOC)<br/> S ADEVICE=$P(ORWDEV,U,3)<br/> K ORPLST M ORPLST=PRTLST<br/> F  S I=$O(ORPLST(I)) Q:'I  D<br/> . S PKG=+$P($G(^OR(100,+ORPLST(I),0)),U,14),DLG=+$P($G(^OR(100,+ORPLST(I),0)),U,5)<br/> . I PKG=$O(^DIC(9.4,"B","DIETETICS",0)),DLG'=$O(^ORD(101.41,"B","FHW SPECIAL MEAL",0)) K ORPLST(I)<br/> D INSRTBB^ORWD2(.ORPLST) ; insert BB child Lab orders into ORPLST for printing requisitions<br/> I +ADEVICE,$D(ORPLST) D GUI^ORPR02(.ORPLST,ADEVICE,"R",HLOC)<br/> S ADEVICE=$P(ORWDEV,U,4)<br/> K ORPLST M ORPLST=PRTLST<br/> I +ADEVICE D GUI^ORPR02(.ORPLST,ADEVICE,"W",HLOC)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}