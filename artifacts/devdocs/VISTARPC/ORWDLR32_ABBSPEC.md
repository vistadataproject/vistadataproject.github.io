---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR32 ABBSPEC
# ORWDLR32 ABBSPEC

Returns a list of lab specimens with abbreviations.

Property | Value
--- | ---
Label | ABBSPEC
Routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ABBSPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Method Comment | procedure
First Comment | {::nomarkdown}<pre><code> returns specimens with abbreviation (uses 'E' xref)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,IEN,ILST S ILST=0<br/> S X="" F  S X=$O(^LAB(61,"E",X)) Q:X=""  S IEN=$O(^(X,0)) D<br/> . S LST($$NXT)=IEN_U_$P(^LAB(61,IEN,0),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}