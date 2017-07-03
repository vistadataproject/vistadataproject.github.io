---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXQ GETQLST
# ORWDXQ GETQLST

Return quick list for a display group.

Property | Value
--- | ---
Label | GETQLST
Routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Method Comment | Return quick list for a display group
Input Parameters | DGRP, PRE
Code | {::nomarkdown}<pre><code> N LVW,ILST,I,X0<br/> S PRE=$G(PRE),ILST=0<br/> D QV4DG^ORWUL(.LVW,DGRP) S LVW=+LVW Q:'LVW<br/> S I=0 F  S I=$O(^ORD(101.44,LVW,10,I)) Q:'I  D<br/> . S X0=$G(^ORD(101.44,LVW,10,I,0))<br/> . I $P($G(^ORD(101.41,+X0,0)),U,3)]"" Q  ; quick order is disabled<br/> . S ILST=ILST+1,LST(ILST)=PRE_X0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}