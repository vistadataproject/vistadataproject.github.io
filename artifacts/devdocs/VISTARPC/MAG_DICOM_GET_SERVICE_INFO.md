---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET SERVICE INFO<br/>
# MAG DICOM GET SERVICE INFO

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC retrieves the credentials for the DICOM GatewayService account.When an end-user changes an access or verify code whilea "long-running" process like "Process Text Messages" or"Process DICOM Images" is running, the need my arise forthe DICOM Gateway to re-connect to its VistA system.When the stored user's credentials fail, the DICOM Gatewaycan temporarily continue to function using these credentials.

## Properties

Property | Value
--- | ---
Label | SERVICE
MUMPS Implementation | [MAGDRPC2](http://code.osehra.org/dox/Routine_MAGDRPC2_source.html)
Return Type | SINGLE VALUE




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}