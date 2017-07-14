---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH FINDTYP<br/>
# ORWDFH FINDTYP

Return type of dietetics order based on display group.

## Properties

Property | Value
--- | ---
Label | FINDTYP
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [FINDTYP^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return type of dietetics order based on display group
Input Parameters | DGRP
Code | {::nomarkdown}<pre><code> S VAL=$P($G(^ORD(100.98,DGRP,0)),U,3)<br/> S:VAL="D AO" VAL="A" S VAL=$E(VAL)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}