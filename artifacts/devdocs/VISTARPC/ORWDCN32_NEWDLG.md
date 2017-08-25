---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDCN32 NEWDLG<br/>
# ORWDCN32 NEWDLG

Returns dialog information when NEW CONSULT/PROCEDURE is selected fromthe consults tab.

## Properties

Property | Value
--- | ---
Label | NEWDLG
MUMPS Implementation | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
dialog type | LITERAL | 1 | true | &quot;C&quot; for consult, &quot;P&quot; for procedure



## MUMPS Method Description

Property | Value
--- | ---
Method | [NEWDLG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Method Comment | Return order dialog info for New Consult OR PROCEDURE
Input Parameters | ORTYPE, ORLOC
Code | {::nomarkdown}<pre><code> N DGRP,ID,IEN,TXT,TYP,X,X0,X5,ENT<br/> S ENT="ALL"<br/> I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC<br/> I ORTYPE="C" S X=$$GET^XPAR(ENT,"ORWDX NEW CONSULT",1,"I") ;ICR 2263<br/> E  S X=$$GET^XPAR(ENT,"ORWDX NEW PROCEDURE",1,"I")<br/> S IEN=+X,X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))<br/> S TYP=$P(X0,U,4),DGRP=+$P(X0,U,5),ID=+$P(X5,U,5),TXT=$P(X5,U,4)<br/> S Y=IEN_";"_ID_";"_DGRP_";"_TYP_U_TXT<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}