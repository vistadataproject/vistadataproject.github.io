---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDAL32 SEND BULLETIN
# ORWDAL32 SEND BULLETIN



Property | Value
--- | ---
Label | SENDBULL
Routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SENDBULL^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Send bulletin if user attempts free-text entry
Input Parameters | ORDUZ, ORDFN, ORTEXT, ORCMTS
Code | {::nomarkdown}<pre><code> I '$D(ORCMTS) D<br/> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT)<br/> E  D<br/> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT,.ORCMTS)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}