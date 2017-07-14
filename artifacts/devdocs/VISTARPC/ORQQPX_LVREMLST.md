---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX LVREMLST<br/>
# ORQQPX LVREMLST

Returns Cover Sheet reminder settings

## Properties

Property | Value
--- | ---
Label | LVREMLST
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LVL | LITERAL |  |  | Parameter Level setting
CLASS | LITERAL |  |  | Optional User Class IEN if level is CLASS



## MUMPS Method Description

Property | Value
--- | ---
Method | [LVREMLST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Returns cover sheet reminders at a specified level
Input Parameters | LVL, CLASS
Code | {::nomarkdown}<pre><code> D REMACCUM(.ORY,LVL,"Q","",$G(CLASS))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}