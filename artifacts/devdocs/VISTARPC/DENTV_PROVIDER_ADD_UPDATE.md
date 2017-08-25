---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV PROVIDER ADD UPDATE<br/>
# DENTV PROVIDER ADD UPDATE

This RPC allows Dental Record Manager to add/edit their Dental Providers.

## Properties

Property | Value
--- | ---
Label | EDIT
MUMPS Implementation | [DENTVRP5](http://code.osehra.org/dox/Routine_DENTVRP5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | The input array contains the Dental Provider information to be added/updated into file 220.5.  The following fields are sent:  DATA(&quot;PERSON&quot;)&#x3D;pointer to file 200 (PERSON)  DATA(&quot;IEN&quot;)&#x3D;pointer to file 220.5 (only for update records)  DATA(&quot;PROVNUM&quot;)&#x3D;8 character Dental Provider Number  DATA(&quot;INACTIVE&quot;)&#x3D;-1 if inactive, else &#x3D; 0.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}