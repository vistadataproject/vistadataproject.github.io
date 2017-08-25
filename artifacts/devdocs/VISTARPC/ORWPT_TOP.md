---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT TOP<br/>
# ORWPT TOP

Returns the last selected patient by the defined user.

## Properties

Property | Value
--- | ---
Label | TOP
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [TOP^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return top for all patients list (last selected for now)
Code | {::nomarkdown}<pre><code> N IEN<br/> S IEN=$G(^DISV(DUZ,"^DPT("))<br/> I IEN S LST(1)=IEN_U_$P($G(^DPT(IEN,0)),U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}