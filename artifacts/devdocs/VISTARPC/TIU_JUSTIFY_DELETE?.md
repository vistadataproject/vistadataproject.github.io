---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU JUSTIFY DELETE?
# TIU JUSTIFY DELETE?

BOOLEAN RPC that evaluates wheter a justification is required for deletion (e.g., deletion is authorized, but the document has been signed, etc.).

Property | Value
--- | ---
Label | NEEDJUST
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  |  | This is the record number (IEN) of the document in file 8925.



### MUMPS Method Description

Property | Value
--- | ---
Method | [NEEDJUST^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Is justification required for deletion?
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUD0 S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUY=0<br/> I +$P(TIUD0,U,5)'<6 S TIUY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}