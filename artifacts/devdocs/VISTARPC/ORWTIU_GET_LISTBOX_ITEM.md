---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU GET LISTBOX ITEM<br/>
# ORWTIU GET LISTBOX ITEM

Given a TIU document IEN, return the information required to construct alistbox item for that single document.

## Properties

Property | Value
--- | ---
Label | GTLSTITM
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Documemnt IEN | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GTLSTITM^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Return single listbox item for document
Input Parameters | ORTIUDA
Code | {::nomarkdown}<pre><code> Q:+$G(ORTIUDA)=0<br/> S ORY=ORTIUDA_U_$$RESOLVE^TIUSRVLO(ORTIUDA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}