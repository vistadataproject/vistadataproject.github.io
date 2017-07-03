---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWD FORMID
# ORWD FORMID

Returns the Form ID (mapping to a windows form) for an ordering dialog.

Property | Value
--- | ---
Label | FORMID
Routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FORMID^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | procedure
Input Parameters | ORIFN
First Comment | {::nomarkdown}<pre><code> Returns the Dialog Form ID</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X<br/> S VAL=0,X=$P(^OR(100,+ORIFN,0),U,5)<br/> Q:$P(X,";",2)'="ORD(101.41,"<br/> S VAL=+$P($G(^ORD(101.41,+X,5)),U,5)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}