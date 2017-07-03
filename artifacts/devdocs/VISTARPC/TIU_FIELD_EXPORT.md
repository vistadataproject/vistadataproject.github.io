---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU FIELD EXPORT
# TIU FIELD EXPORT

Exports Template Fields in XML format

Property | Value
--- | ---
Label | EXPORT
Routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLDS | LIST |  |  | List of template field names to export.



### MUMPS Method Description

Property | Value
--- | ---
Method | [EXPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Method Comment | Exports Template Fields as XML
Input Parameters | FLDS
First Comment | {::nomarkdown}<pre><code> FLDS should be an array of Template Field names, not IENs</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN<br/> K TIUXML<br/> D ADD(.TIUXML,"<TEMPLATE_FIELDS>",0)<br/> S I=0<br/> F  S I=$O(FLDS(I)) Q:I'>0  D<br/> . S IEN=$O(^TIU(8927.1,"B",FLDS(I),0))<br/> . I +IEN D ADDXML(.TIUXML,IEN)<br/> D ADD(.TIUXML,"</TEMPLATE_FIELDS>",0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}