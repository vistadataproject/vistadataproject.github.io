---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV FILE INSURANCE TO AUDIT
# DSIV FILE INSURANCE TO AUDIT

Files new insurance data fields from ICB to the DSIV ICB AUDIT (#19625) file that are not part of the INSURANCE BUFFER (#355.33) file so that theymay be updated as part of buffer processing by insurance verifiers.

Property | Value
--- | ---
Label | IN
Routine | [DSIVIM](http://code.osehra.org/dox/Routine_DSIVIM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVAUD | LITERAL | 30 | true | Pointer to the DSIV ICB AUDIT (#19625) file.
DATA | LIST | 80 | true | Contains data to file in the following format: D DATA(n)&#x3D;field^multi-id^value e.g. DATA(1)&#x3D;&quot;6.01^0^1&quot;      DATA(2)&#x3D;&quot;6.02^0^2&quot;      DATA(3)&#x3D;&quot;8^1^SYN1&quot; SYNONYM is fld 8, subfile 19625.08 (multiple)      DATA(4)&#x3D;&quot;8^2^SYN2&quot;      DATA(5)&#x3D;&quot;9^1^FIRST LINE OF REMARKS&quot;  REMARKS is field 9, wp field      DATA(6)&#x3D;&quot;9^2^SECOND LINE OF REMARKS&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}