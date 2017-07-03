---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDCSLT DEF
# ORWDCSLT DEF

Load dialog data (lists & defaults) for a consult order. (16-BIT)

Property | Value
--- | ---
Label | DEF
Routine | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
Method Comment | load consult info    
Code | {::nomarkdown}<pre><code> N ILST,NAM,IEN,X<br/> S ILST=0<br/> S LST($$NXT)="~Services" D SRVC<br/> S LST($$NXT)="~Inpt Urgencies" D INURG<br/> S LST($$NXT)="~Outpt Urgencies" D OUTURG<br/> S LST($$NXT)="~Inpt Place" D INPLACE<br/> S LST($$NXT)="~Outpt Place" D OUTPLACE</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}