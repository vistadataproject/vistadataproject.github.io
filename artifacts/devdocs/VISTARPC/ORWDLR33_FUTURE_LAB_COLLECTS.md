---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR33 FUTURE LAB COLLECTS
# ORWDLR33 FUTURE LAB COLLECTS

Returns the number of days in the future to allow Lab Collects.

Property | Value
--- | ---
Label | LCFUTR
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORLOC | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [LCFUTR^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Get # of days for future Lab Collects
Input Parameters | ORLOC, ORDIV
First Comment | {::nomarkdown}<pre><code> For Event Delay Order<br/>  --ORLOC Event default location<br/>  --ORDIV Event default division</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORDY=0<br/> Q:'$D(^XTV(8989.51,"B","LR LAB COLLECT FUTURE"))<br/> I $G(ORDIV) S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","LR LAB COLLECT FUTURE",1,"I")<br/> E  S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^DIV^SYS^PKG","LR LAB COLLECT FUTURE",1,"I")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}