---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE ANYTIME
# ORWPCE ANYTIME

Returns TRUE if encounters can be entered at any time

Property | Value
--- | ---
Label | ANYTIME
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ANYTIME^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns status of the ORWPCE ANYTIME ENCOUNTERS parameter
Code | {::nomarkdown}<pre><code> N SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE ANYTIME ENCOUNTERS",1,"Q")<br/> I +ORY S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}