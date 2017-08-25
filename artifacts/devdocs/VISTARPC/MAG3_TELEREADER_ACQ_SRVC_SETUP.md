---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TELEREADER ACQ SRVC SETUP<br/>
# MAG3 TELEREADER ACQ SRVC SETUP

Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ UPDATES TELEREADER ACQUISITION SERVICE file (#2006.5841)

## Properties

Property | Value
--- | ---
Label | UASRVC
MUMPS Implementation | [MAGNTLR6](http://code.osehra.org/dox/Routine_MAGNTLR6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | Delete action: MAGPARAM(&quot;ACTION&quot;)           &#x3D; &quot;DELETE&quot; MAGPARAM(&quot;IEN&quot;)              &#x3D; IEN of the record that will be deletedAdd or Update action: MAGPARAM(&quot;ACTION&quot;)           &#x3D; &quot;ADD&quot; or &quot;UPDATE&quot; MAGPARAM(&quot;NAME&quot;)             &#x3D; A pointer to REQUEST SERVICES file (#123.5) MAGPARAM(&quot;PROCEDURE&quot;)        &#x3D; A pointer to GMRC PROCEDURE file (#123.3) MAGPARAM(&quot;SPECIALTY INDEX&quot;)  &#x3D; A pointer to the SPECIALTY file (#2005.84) MAGPARAM(&quot;PROCEDURE INDEX&quot;)  &#x3D; A pointer to the PROCEDURE/EVENT file (#2005.85) MAGPARAM(&quot;ACQUISITION SITE&quot;) &#x3D; A pointer to the INSTITUTION file (#4)  MAGPARAM(&quot;UNREAD LIST CREATION TRIGGER&quot;) &#x3D; I/O/F MAGPARAM(&quot;TIU NOTE FILE&quot;)    &#x3D; A pointer to TIU DOCUMENT file (#8925.1)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}