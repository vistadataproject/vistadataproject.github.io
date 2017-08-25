---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA LOOKUP<br/>
# NUPA LOOKUP

Does lookups on files.  Returns info in ^TMP("DILIST",$J) or -1 if recordnot in file.

## Properties

Property | Value
--- | ---
Label | LOOK
MUMPS Implementation | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST |  | true | Array of format: PAR(&quot;F&quot;)&#x3D;The file to do the lookup on.PAR(&quot;V&quot;)&#x3D;The value to lookup.PAR(&quot;FD&quot;)&#x3D;Fields to return data from.PAR(&quot;IND&quot;)&#x3D;Indexes to do the lookup on.PAR(&quot;NUM&quot;)&#x3D;Number of results to return.PAR(&quot;SCR&quot;)&#x3D;The fileman lookup screen.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}