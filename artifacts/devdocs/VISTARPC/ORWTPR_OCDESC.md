---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPR OCDESC
# ORWTPR OCDESC



Property | Value
--- | ---
Label | OCDESC
Routine | [ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [OCDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html)
Method Comment | from RPC
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> N CNT,LINE,NUM K TEXT<br/> S IEN=+$G(IEN) I IEN<1 Q<br/> S TEXT(1)=$P($G(^ORD(100.8,IEN,0)),U)<br/> S TEXT(2)=""<br/> S CNT=2<br/> S NUM=0 F  S NUM=$O(^ORD(100.8,IEN,1,NUM)) Q:NUM<1  S LINE=$G(^(NUM,0)) D<br/> .S CNT=CNT+1<br/> .S TEXT(CNT)=LINE<br/> S TEXT(CNT+1)=""</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}