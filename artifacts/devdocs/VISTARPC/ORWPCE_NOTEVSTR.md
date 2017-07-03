---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE NOTEVSTR
# ORWPCE NOTEVSTR

Returns VISIT LOCATION;EPISODE BEGIN DATE;VISIT TYPE from the TIU DOCUMENTfile.

Property | Value
--- | ---
Label | NOTEVSTR
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NOTEVSTR^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | return the VSTR^AUTHOR for a note
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> N X0,X12,VISIT<br/> S X0=$G(^TIU(8925,+IEN,0)),X12=$G(^(12)),VISIT=$P(X12,U,7)<br/> I +VISIT S VAL=$$VSTRBLD^TIUSRVP(VISIT) I 1<br/> E  S VAL=$P(X12,U,11)_";"_$P(X0,U,7)_";"_$P(X0,U,13)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}