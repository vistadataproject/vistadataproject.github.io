---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPS1 PICKUP<br/>
# ORWPS1 PICKUP

Returns default for refill location (mail or window).

## Properties

Property | Value
--- | ---
Label | PICKUP
MUMPS Implementation | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PICKUP^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Method Comment | Return default for refill location
Code | {::nomarkdown}<pre><code> I $D(^PSX(550,"C")) S Y="M"<br/> E  S Y="W"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}