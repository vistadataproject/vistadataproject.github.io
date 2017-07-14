---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU HAS OPTION ACCESS<br/>
# ORWU HAS OPTION ACCESS

Returns true if the user has access to the specified menu option.

## Properties

Property | Value
--- | ---
Label | HASOPTN
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL |  | true | Either the Option Name or Option IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [HASOPTN^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | returns TRUE if the user has access to a menu option
Input Parameters | OPTION
Code | {::nomarkdown}<pre><code> S VAL=+$$ACCESS^XQCHK(DUZ,OPTION)<br/> I VAL'>0 S VAL=0<br/> E  S VAL=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}