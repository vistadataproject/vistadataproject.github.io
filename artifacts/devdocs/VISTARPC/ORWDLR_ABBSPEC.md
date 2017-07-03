---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR ABBSPEC
# ORWDLR ABBSPEC

Returns lab specimens that have an abbreviation (used as default list).

Property | Value
--- | ---
Label | ABBSPEC
Routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ABBSPEC^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Method Comment | procedure
First Comment | {::nomarkdown}<pre><code> returns specimens with abbreviation (uses 'E' xref)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,IEN,ILST S ILST=0<br/> S X="" F  S X=$O(^LAB(61,"E",X)) Q:X=""  S IEN=$O(^(X,0)) D<br/> . S LST($$NXT)=IEN_U_$P(^LAB(61,IEN,0),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}