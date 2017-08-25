---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD NAME IS UNIQUE<br/>
# TIU FIELD NAME IS UNIQUE

Returns TRUE if the template field name is unique

## Properties

Property | Value
--- | ---
Label | ISUNIQUE
MUMPS Implementation | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL |  | true | Template Field Name.
IEN | LITERAL |  |  | Optional IEN of existing field



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISUNIQUE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Is Name Unique?
Input Parameters | NAME, IEN
Code | {::nomarkdown}<pre><code> N FLD<br/> S FLD=+$O(^TIU(8927.1,"B",NAME,0))<br/> I +FLD,FLD'=IEN S TIUY=0<br/> E  S TIUY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}