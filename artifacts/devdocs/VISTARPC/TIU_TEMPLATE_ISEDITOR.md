---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE ISEDITOR<br/>
# TIU TEMPLATE ISEDITOR



## Properties

Property | Value
--- | ---
Label | ISEDITOR
MUMPS Implementation | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROOT | LITERAL |  | true | 
USER | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISEDITOR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Returns TRUE if user is a Template Editor
Input Parameters | ROOT, USER
Code | {::nomarkdown}<pre><code> N CLASS,TIUERR<br/> S CLASS=$P($G(^TIU(8927,ROOT,0)),U,7)<br/> I 'CLASS S TIUY="^NO CLASS OWNER DEFINED"<br/> E  D<br/> .S TIUY=$$ISA^USRLM(USER,CLASS,.TIUERR)<br/> .I 'TIUY,$D(TIUERR) S TIUY=U_TIUERR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}