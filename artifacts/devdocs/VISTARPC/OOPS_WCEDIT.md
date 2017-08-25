---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS WCEDIT<br/>
# OOPS WCEDIT

This call clears the Supervisor signature and related fields if the WorkersCompensation specialist has edited fields INJURED PERFORMING DUTY (#146),NOT INJURED PERFORMING JOB (#147), INJURY CAUSED BY EMPLOYEE (#148),CAUSED BY EMPLOYEE EXPLAIN (#149), SUPERVISOR NOT AGREE EXPLAN (#164), or REASON AGENCY CONTROVERTS COP (#165) after the Supervisor signed.  It also sets the field WORKER'S COMP EDIT (#199) so the required bulletin will be sent.

## Properties

Property | Value
--- | ---
Label | OWCPCLR
MUMPS Implementation | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 25 | true | This is the IEN for the ASISTS record that is being modified.
CALLER | LITERAL | 10 | true | This is the menu that originated the call.
FORM | LITERAL | 10 | true | This is the form type which can be 2162, CA1, or CA2.  However, the only formever expected with this call is a CA1.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}