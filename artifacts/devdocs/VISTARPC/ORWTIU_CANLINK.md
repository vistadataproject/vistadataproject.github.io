---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU CANLINK<br/>
# ORWTIU CANLINK

 Given a title, call CANLINK^TIULP to determine whether this title can use linked as an Interdisciplinary child note. dbia #2322

## Properties

Property | Value
--- | ---
Label | CANLINK
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [CANLINK^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Can the title be an ID child?
Input Parameters | ORTITLE
First Comment | {::nomarkdown}<pre><code> DBIA #2322</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=$$CANLINK^TIULP(ORTITLE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}