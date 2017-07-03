---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX MSG
# ORWDX MSG

Return message text for an orderable item.

Property | Value
--- | ---
Label | MSG
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [MSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Msg text for orderable item
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> N I<br/> S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S LST(I)=^(I,0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}