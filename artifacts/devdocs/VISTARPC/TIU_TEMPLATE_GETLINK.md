---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE GETLINK<br/>
# TIU TEMPLATE GETLINK

Returns template linked to a specific title or reason for request.

## Properties

Property | Value
--- | ---
Label | GETLINK
Routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Returns template linked to title or reason for request
Input Parameters | LINK
Code | {::nomarkdown}<pre><code> N IDX<br/> S ORY="",IDX=$O(^TIU(8927,"AL",LINK,0))<br/> I +IDX,$P($G(^TIU(8927,IDX,0)),U,4)'="I" S ORY=$$NODEDATA^TIUSRVT(IDX)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}