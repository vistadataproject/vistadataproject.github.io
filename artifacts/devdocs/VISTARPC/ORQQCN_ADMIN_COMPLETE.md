---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN ADMIN COMPLETE
# ORQQCN ADMIN COMPLETE



Property | Value
--- | ---
Label | ADMCOMPL
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ADMCOMPL^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Admin users
Input Parameters | ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE
First Comment | {::nomarkdown}<pre><code> Administrative complete action</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$$SFILE^GMRCGUIB(ORIEN,10,ORFL,ORRESP,DUZ,.ORCOM,ORALRT,ORALTO,ORDATE) ; "10"=Admin Complete</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}