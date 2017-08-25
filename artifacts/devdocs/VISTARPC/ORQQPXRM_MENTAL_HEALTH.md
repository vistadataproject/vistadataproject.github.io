---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM MENTAL HEALTH<br/>
# ORQQPXRM MENTAL HEALTH

Returns array for given mental health instrument

## Properties

Property | Value
--- | ---
Label | MH
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MENTAL HEALTH INSTRUMENT | LITERAL | 16 | true | Name of the mental health instrument



## MUMPS Method Description

Property | Value
--- | ---
Method | [MH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | OTEST
Code | {::nomarkdown}<pre><code> D MH^PXRMRPCC(.ORY,OTEST)  ; DBIA 3080<br/> S ORY(0)=0<br/> I $$PATCH^XPDUTL("YS*5.01*85") S ORY(0)=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}