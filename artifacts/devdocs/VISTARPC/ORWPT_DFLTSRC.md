---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT DFLTSRC
# ORWPT DFLTSRC

Return user's default patient list source.

Property | Value
--- | ---
Label | DFLTSRC
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DFLTSRC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | return default patient list source (T, W, C, P, S)
Code | {::nomarkdown}<pre><code> N SRV S SRV=+$G(^VA(200,DUZ,5))<br/> S VAL=$$GET^XPAR("ALL^SRV.`"_SRV,"ORLP DEFAULT LIST SOURCE")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}