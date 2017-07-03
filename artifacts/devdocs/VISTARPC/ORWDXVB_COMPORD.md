---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXVB COMPORD
# ORWDXVB COMPORD

Get sequence order of Blood Components for selection.

Property | Value
--- | ---
Label | COMPORD
Routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [COMPORD^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Get sequence order of Blood Components
Code | {::nomarkdown}<pre><code> N ORLIST,I,X<br/> D GETLST^XPAR(.ORLIST,"ALL","OR VBECS COMPONENT ORDER")<br/> S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}