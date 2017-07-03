---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL CLIN SRCH
# ORQQPL CLIN SRCH

Returns list of clinics for problem list. Should be replaced by CLIN^ORQPT

Property | Value
--- | ---
Label | CLINSRCH
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [CLINSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | Get LIST OF CLINICS
Input Parameters | X
First Comment | {::nomarkdown}<pre><code> Note: This comes from CLIN^ORQPTQ2, where it was commented out in place of<br/> a call to ^XPAR. I would have just used CLIN^ORQPTQ2, but it didn't work - at<br/> least on SLC OEX directory.<br/> X has no purpose other than to satisfy apparent rpc and tcallv requirement for args</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,NAME,IEN<br/> S I=1,IEN=0,NAME=""<br/> F  S NAME=$O(^SC("B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br/> . I $P(^SC(IEN,0),"^",3)="C" S Y(I)=IEN_"^"_NAME,I=I+1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}