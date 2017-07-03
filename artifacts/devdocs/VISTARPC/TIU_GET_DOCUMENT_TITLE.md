---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET DOCUMENT TITLE
# TIU GET DOCUMENT TITLE

This remote procedure returns the pointer to the TIU DOCUMENT DEFINITIONFILE that corresponds to the TITLE of the document identified in the TIUDAparameter.

Property | Value
--- | ---
Label | GETTITLE
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the internal entry number (IEN) of the document in the TIUDOCUMENT FILE (#8925).



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETTITLE^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Get the title from a TIU Document Record
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> S TIUY=+$G(^TIU(8925,+TIUDA,0))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}