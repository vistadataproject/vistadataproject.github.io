---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR33 LC TO WC<br/>
# ORWDLR33 LC TO WC



## Properties

Property | Value
--- | ---
Label | LCTOWC
MUMPS Implementation | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [LCTOWC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | return text instructing user when LC changed to WC on accept/release
Input Parameters | ORLOC
Code | {::nomarkdown}<pre><code> N ORDIV,ORSVC<br/> S ORDIV=DUZ(2)<br/> S ORSVC=+$G(^VA(200,DUZ,5))<br/> I ORSVC S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORSVC)_";DIC(49,^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")<br/> E  S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^SVC^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}