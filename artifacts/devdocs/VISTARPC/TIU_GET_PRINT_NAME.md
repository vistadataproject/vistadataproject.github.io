---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET PRINT NAME<br/>
# TIU GET PRINT NAME

This Remote Procedure receives a pointer to the TIU DOCUMENT DEFINITIONFILE (#8925.1) and returns a string containing the Print Name of thecorresponding Document Definition.

## Properties

Property | Value
--- | ---
Label | GETPNAME
MUMPS Implementation | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUTYPE | LITERAL |  | true | This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETPNAME^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Get Print Name of a Document
Input Parameters | TIUTYPE
Code | {::nomarkdown}<pre><code> S TIUY=$$PNAME^TIULC1(TIUTYPE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}