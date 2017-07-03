---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE LEXCODE
# ORWPCE LEXCODE

Returns a code associated with a lexicon entry.

Property | Value
--- | ---
Label | LEXCODE
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [LEXCODE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | return code for a lexicon entry
Input Parameters | IEN, APP, ORDATE
Code | {::nomarkdown}<pre><code> S VAL=""<br/> S:'+$G(ORDATE) ORDATE=DT<br/> I APP="ICD"!(APP="10D") S VAL=$$ONE^LEXU(IEN,ORDATE,APP)_U_$S(APP="ICD":"ICD-9-CM",1:"ICD-10-CM")<br/> I APP="CPT"!(APP="CHP") S VAL=$$CPTONE^LEXU(IEN,ORDATE)_U_"CPT-4"<br/> I $P(VAL,U)="",(APP="CHP") S VAL=$$CPCONE^LEXU(IEN,ORDATE)_U_"HCPCS"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}