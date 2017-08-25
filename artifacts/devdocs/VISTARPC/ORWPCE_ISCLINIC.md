---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE ISCLINIC<br/>
# ORWPCE ISCLINIC

Returns TRUE if location is a Clinic.

## Properties

Property | Value
--- | ---
Label | ISCLINIC
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORLOC | LITERAL |  | true | Location



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns TRUE if location is a clinic
Input Parameters | ORLOC
Code | {::nomarkdown}<pre><code> N ORTYP<br/> S ORY=0<br/> S ORTYP=$$GET1^DIQ(44,+ORLOC,2,"I")<br/> I (ORTYP="C")!(ORTYP="M") S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}