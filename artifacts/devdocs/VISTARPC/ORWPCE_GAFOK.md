---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GAFOK
# ORWPCE GAFOK

Returns TRUE if supporting mental health code exists to read and writeGAF scores.

Property | Value
--- | ---
Label | GAFOK
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GAFOK^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns true if all supporting MH GAF Code exists
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I $T(GAFHX^YSGAFAPI)'="",$T(ENT^YSGAFAP1)'="" S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}