---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR SHOW OPTOP WHEN SIGNING<br/>
# ORWSR SHOW OPTOP WHEN SIGNING



## Properties

Property | Value
--- | ---
Label | SHOWOPTP
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CASE IEN | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [SHOWOPTP^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Should OpTop be displayed on signature?
Input Parameters | ORCASE
Code | {::nomarkdown}<pre><code> I '$$PATCH^XPDUTL("SR*3.0*100") S ORY=0 Q<br/> S ORY=$$OPTOP^SROESTV(+ORCASE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}