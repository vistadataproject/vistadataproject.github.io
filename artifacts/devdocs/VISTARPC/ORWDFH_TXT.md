---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDFH TXT
# ORWDFH TXT

RPC to return the text of the current and any future diets for a patient.

Property | Value
--- | ---
Label | TXT
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TXT^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return text of current &amp; future diets for a patient
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S LST(1)="Current Diet:  "_$$DIET^ORCDFH(DFN)<br/> N FUTLST D FUT(.FUTLST,DFN) I $D(FUTLST)>1 D<br/> . S LST(2)="Future Diet Orders:",ILST=2<br/> . S I=0 F  S I=$O(FUTLST(I)) Q:'I  D<br/> . . S X=$$FMTE^XLFDT(I,2)_"  "_$P(FUTLST(I),U,2)<br/> . . S LST(ILST)=$S(ILST=2:"Future Diet Orders:  "_X,1:"   "_X)<br/> . . S ILST=ILST+1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}