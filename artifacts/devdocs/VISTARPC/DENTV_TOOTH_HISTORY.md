---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TOOTH HISTORY<br/>
# DENTV TOOTH HISTORY

This returns the dental history for a single tooth for a patient or for all records.

## Properties

Property | Value
--- | ---
Label | TH
MUMPS Implementation | [DENTVRH](http://code.osehra.org/dox/Routine_DENTVRH_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 30 | true | Input parameter for looking up dental history in file 19600.1  Format: Patient DFN ^ tooth# ^ FMDate where  Patient DFN :&#x3D; required - pointer to patient file (2)  tooth# :&#x3D; optional - number of the tooth you wish the history on.           If tooth#&#x3D;0 or tooth#&#x3D;&quot;&quot;, then return data that was not           associated with any particular tooth.           If tooth#&#x3D;&quot;ALL&quot;, then it will return data for all teeth and           for procedures not related to a specific tooth.  FMDate :&#x3D; optional - Fileman date format - optional - default to all           records.  If date is passed, then only records whose date is           greater than or equal to this date will be returned



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}