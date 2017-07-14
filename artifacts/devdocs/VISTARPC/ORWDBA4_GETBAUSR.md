---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDBA4 GETBAUSR<br/>
# ORWDBA4 GETBAUSR

Gets the value of the Enable Billing Awareness By User parameter. The value returned will be 1 for Yes, Billing Awareness Enabled, and 0 for No, Billing Awareness Disabled.

## Properties

Property | Value
--- | ---
Label | GETBAUSR
Routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORCIEN | REFERENCE | 255 | true | This is the interanl ID number of the clinicial who is being checked for the value of the Enable Billing Awareness Parameter.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETBAUSR^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
Method Comment | GUI RPC CALL
Input Parameters | ORCIEN
First Comment | {::nomarkdown}<pre><code>Get Billing Awareness By User parameter value<br/>Gets and returns the value of the Enabled Billing Awareness By User<br/>parameter assigned to a provider.<br/>Input Variable:<br/>  ORCIEN    Ordering Clinician's Internal Entry Number<br/>Output Variable:<br/>  Y         Parameter value, 1 if enabled, 0 if disabled</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$$GET^XPAR(ORCIEN_";VA(200,","OR BILLING AWARENESS BY USER",1,"Q")<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}