---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXQ DLGSAVE
# ORWDXQ DLGSAVE

Return IEN of new or existing quick order.

Property | Value
--- | ---
Label | DLGSAVE
Routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DLGSAVE^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Method Comment | Return IEN of new or existing quick order
Input Parameters | CRC, DNAME, DGRP, RSP
Code | {::nomarkdown}<pre><code> N ROOT,NM,IEN<br/> S ROOT="ORWDQ "_CRC,VAL=0,IEN=+$O(^ORD(101.41,"B",ROOT,0))<br/> I IEN=0 D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP) I 1<br/> E  I $$MATCH(IEN,DGRP,.RSP) S VAL=IEN I 1<br/> E  D<br/> . D UPDQNAME^ORCMEDT8(IEN)<br/> . S ROOT=$$ENSURNEW^ORCMEDT8(ROOT)<br/> . D SAVENEW(.VAL,ROOT,DNAME,DGRP,.RSP)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}