---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ADD BUFFER ENTRY<br/>
# DSIV ADD BUFFER ENTRY

Adds a new entry to the INSURANCE BUFFER file #355.33.

## Properties

Property | Value
--- | ---
Label | ADDBUF
MUMPS Implementation | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Patient internal entry number.
TYPE | LITERAL | 1 | true | &quot;M&quot; for Medicare, &quot;X&quot; for all other insurance (default).
INSCO | LITERAL | 30 | true | Insurance company name.  Required for non-Medicare insurance.Not required for Medicare type.
DATA | LIST | 80 | true | Array of keyword^value pairs for Medicare type entry orField number^value pairs for other insurance type entries.For example, SOURCE is a required value.  For non-Medicareentries this could be specified as DATA(1)&#x3D;&quot;.03^1&quot;, meaningsource&#x3D;interview.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}