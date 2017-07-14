---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE IMM<br/>
# ORWPCE IMM

Returns a list of immunizations for a clinic.

## Properties

Property | Value
--- | ---
Label | IMM
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [IMM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of immunizations for clinic
Input Parameters | CLINIC
Code | {::nomarkdown}<pre><code> D GETLST^IBDF18A(CLINIC,"PX SELECT IMMUNIZATIONS","LST")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}