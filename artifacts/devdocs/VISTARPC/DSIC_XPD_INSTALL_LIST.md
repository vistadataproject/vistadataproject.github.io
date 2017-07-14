---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPD INSTALL LIST<br/>
# DSIC XPD INSTALL LIST

This will return a list of all the entries in the INSTALL file.  You pass in either a KIDS Build name or the name portion of the Build name (a Build name without the version number or patch number).  All Installs matching that name will be returned in reverse chronological order (the newest first).

## Properties

Property | Value
--- | ---
Label | INSLIST
Routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIKID | LITERAL | 30 | true | This value will be used to do a Fileman lookup on the INSTALL file .01 Name field.  This value can be a full Build name in the form:  &lt;test&gt;&lt;space&gt;&lt;version&gt;  or a patch &lt;text&gt;*&lt;version&gt;*&lt;patch&gt;This value can just be the text portion of the Build name.
DSIALL | LITERAL | 1 | true | This parameter will only be used if the DSIKID input value is a patch designation name, that is a Build name with &quot;*&quot;. This is a Boolean value: 1/0   Default value &#x3D; 0  if 1 then return only Installs whose Build name exactly matches the    value passed in DSIKID  if 0 then return all Installs whose Build name starts with the text     portion of a patch designation:  &lt;text&gt;*&lt;version&gt;*&lt;patch&gt;
DSISTAT | LITERAL | 5 | true | This is a string of numbers which can be 0,1,2,3,4These numbers indicate the status of the KIDS Install Status  0:Loaded   1:Queued   2:Install Started   3:Install Completed  4:De-installed The only statuses that indicate a Build was actually installed are 2,3  3 indicates the install ran to completion successfully  2 indicates that the install started but never ran to completion.     There is no way to determine how far the install got just looking at     this status code. Default value &#x3D; 23



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}