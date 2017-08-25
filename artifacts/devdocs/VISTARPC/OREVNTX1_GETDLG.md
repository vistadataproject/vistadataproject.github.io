---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 GETDLG<br/>
# OREVNTX1 GETDLG



## Properties

Property | Value
--- | ---
Label | GETDLG
MUMPS Implementation | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return dialog infomation based on the DLGID
Input Parameters | DLGID
Code | {::nomarkdown}<pre><code> N DIEN,DFID,DTXT,DTYP,DGRP,X0,X5<br/> S DLGID=+DLGID<br/> Q:'DLGID<br/> S X0=^ORD(101.41,DLGID,0),X5=$G(^(5))<br/> S DGRP=+$P(X0,U,5),DFID=+$P(X5,U,5),DTXT=$P(X5,U,4),DTYP=$P(X0,U,4)<br/>    S:'$L(DTXT) DTXT=$P(X0,U,2)<br/> I $P(X0,U,4)="M" S:'DFID DFID=1001<br/> S LST=DLGID_";"_DFID_";"_DGRP_";"_DTYP_U_DTXT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}