---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE GETROOTS
# TIU TEMPLATE GETROOTS



Property | Value
--- | ---
Label | GETROOTS
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETROOTS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Get template root info
Input Parameters | USER
Code | {::nomarkdown}<pre><code> N IDX,TYPE<br/> I +$G(USER) D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",USER,0)),1)<br/> F TYPE="R","TF","CF","OF" D<br/> .D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",$$ROOTIDX^TIUDDT(TYPE),0)),1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}